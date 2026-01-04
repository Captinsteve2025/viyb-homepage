"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ScheduleConsultation({ modelName }: { modelName: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" size="lg" onClick={() => setOpen(true)}>Schedule Viewing</Button>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-xl rounded-lg bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-primary">Schedule a Consultation</h3>
              <button aria-label="Close" className="rounded p-2 text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>✕</button>
            </div>
            <form name="schedule-consultation" method="POST" action="/api/model-enquiry" className="space-y-4">
              <input type="hidden" name="_source" value={`Schedule Viewing - ${modelName}`} />
              <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">First Name *</label>
                  <Input name="firstName" required autoComplete="given-name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Last Name *</label>
                  <Input name="lastName" required autoComplete="family-name" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Email *</label>
                  <Input type="email" name="email" required autoComplete="email" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Phone</label>
                  <Input type="tel" name="phone" inputMode="tel" autoComplete="tel" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Preferred Date</label>
                  <Input type="date" name="preferredDate" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Preferred Time</label>
                  <Input type="time" name="preferredTime" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">Notes</label>
                <Textarea name="message" placeholder="Any details or questions..." />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent-consult" className="mt-1 h-4 w-4 rounded border-gray-300 text-secondary" name="privacy" required />
                <label htmlFor="consent-consult" className="text-sm text-muted-foreground">I agree to be contacted regarding this consultation.</label>
              </div>
              <Button type="submit" variant="gold" className="w-full">Submit Consultation Request</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
