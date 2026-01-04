"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EnquiryDialogProps {
  open: boolean;
  onClose: () => void;
  preset?: {
    passage?: string;
    date?: string;
    pkg?: "standard" | "vip" | "";
  };
}

export default function EnquiryDialog({ open, onClose, preset }: EnquiryDialogProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
    age: "",
    experience: "",
    qualifications: "",
    swimmer: "",
    medical: "",
    goals: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  const submit = async () => {
    setError(null);
    setSuccess(false);

    // basic required validation
    for (const key of ["name","tel","email","age","experience","qualifications","swimmer","medical","goals"]) {
      // @ts-expect-error - index access validation
      if (!form[key] || String(form[key]).trim().length === 0) {
        setError(`Please complete the ${key} field.`);
        return;
      }
    }

    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          passage: preset?.passage || "",
          date: preset?.date || "",
          package: preset?.pkg || "",
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to send");
      setSuccess(true);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Failed to submit";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
        <div className="border-b p-4">
          <h3 className="text-xl font-bold text-primary">Reserve Your Spot</h3>
          <p className="text-sm text-muted-foreground">Fill out the enquiry form and we will contact you promptly</p>
        </div>
        <div className="p-6">
          {preset?.passage || preset?.date || preset?.pkg ? (
            <div className="mb-6 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
              {preset?.passage && (<p><span className="font-medium text-primary">Passage:</span> {preset.passage}</p>)}
              {preset?.date && (<p><span className="font-medium text-primary">Dates:</span> {preset.date}</p>)}
              {preset?.pkg && (<p><span className="font-medium text-primary">Package:</span> {preset.pkg === "vip" ? "VIP" : "Standard"}</p>)}
            </div>
          ) : null}

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Name *</label>
              <Input value={form.name} onChange={update("name")} placeholder="Full name" autoComplete="name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Tel *</label>
              <Input value={form.tel} onChange={update("tel")} placeholder="+1 (555) 123-4567" inputMode="tel" autoComplete="tel" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Email *</label>
              <Input type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" autoComplete="email" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Age *</label>
              <Input type="number" value={form.age} onChange={update("age")} placeholder="Your age" inputMode="numeric" autoComplete="off" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Experience *</label>
              <select className="flex h-11 w-full rounded-[10px] border border-input bg-background px-4 py-2 text-sm" value={form.experience} onChange={update("experience")} autoComplete="off">
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Current qualifications & experience *</label>
              <Input value={form.qualifications} onChange={update("qualifications")} placeholder="RYA/ASA/NauticEd or relevant experience" autoComplete="off" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Swimmer *</label>
              <select className="flex h-11 w-full rounded-[10px] border border-input bg-background px-4 py-2 text-sm" value={form.swimmer} onChange={update("swimmer")} autoComplete="off">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Medical conditions *</label>
              <Input value={form.medical} onChange={update("medical")} placeholder="Any conditions we should be aware of" autoComplete="off" />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-primary">What would you like to achieve from this trip? *</label>
            <Textarea value={form.goals} onChange={update("goals")} placeholder="Your objectives for training and mile-building" autoComplete="off" />
          </div>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          {success && <p className="mt-4 text-sm text-green-600">Thank you! Your enquiry has been sent.</p>}

          <div className="mt-6 flex gap-3">
            <Button variant="gold" disabled={loading} onClick={submit}>{loading ? "Sending..." : "Submit Enquiry"}</Button>
            <Button variant="outline" onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
