"use client";

import { jsPDF } from "jspdf";

// Palette
const PRIMARY = { r: 10, g: 37, b: 64 }; // Navy
const GOLD = { r: 212, g: 175, b: 55 }; // Gold
const MUTED = { r: 92, g: 108, b: 126 };

async function loadImageData(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch image: " + url);
  const blob = await res.blob();
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function heading(doc: jsPDF, text: string, x: number, y: number, size = 22) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(size);
  doc.setTextColor(PRIMARY.r, PRIMARY.g, PRIMARY.b);
  doc.text(text, x, y);
}

function subheading(doc: jsPDF, text: string, x: number, y: number, size = 14) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(size);
  doc.setTextColor(GOLD.r, GOLD.g, GOLD.b);
  doc.text(text, x, y);
}

function body(doc: jsPDF, text: string, x: number, y: number, size = 11) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(size);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  doc.text(text, x, y);
}

function footer(doc: jsPDF, pageWidth: number, pageHeight: number) {
  doc.setDrawColor(230);
  doc.line(40, pageHeight - 50, pageWidth - 40, pageHeight - 50);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(
    "Virgin Islands Yacht Broker • www.viyb.com • info@viyb.com • +1 (284) 494-2450",
    pageWidth / 2,
    pageHeight - 35,
    { align: "center" }
  );
}

export async function generateOwnerTransitionPDF() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;

  // Load assets
  const [logo, hero, layout1, layout2, layout3] = await Promise.all([
    loadImageData("/viyb-logo-white.png"),
    loadImageData("/hero/bali-hero.jpg"),
    loadImageData("/bali/layouts/bali-5-4-layout-01.png"),
    loadImageData("/bali/layouts/bali-5-4-layout-02.jpg"),
    loadImageData("/bali/layouts/bali-5-4-layout-03.jpg"),
  ]);

  // Cover
  doc.setFillColor(PRIMARY.r, PRIMARY.g, PRIMARY.b);
  doc.rect(0, 0, pageWidth, 180, "F");
  doc.addImage(logo, "PNG", margin, 30, 140, 40);
  doc.addImage(hero, "JPEG", pageWidth - 260, 20, 220, 140);
  heading(doc, "Owner Transition Program", margin, 240, 28);
  subheading(doc, "Structured owner training and charter onboarding", margin, 270, 12);
  doc.setDrawColor(GOLD.r, GOLD.g, GOLD.b);
  doc.setLineWidth(1.2);
  doc.line(margin, 285, margin + 180, 285);

  // Overview bullets
  subheading(doc, "Program Overview", margin, 320);
  body(doc, "Duration: 7–10 days (modular)", margin, 345);
  body(doc, "Location: British Virgin Islands", margin, 365);
  body(doc, "Vessel: Your catamaran or charter-spec", margin, 385);
  body(doc, "Outcome: Charter-ready transition", margin, 405);

  footer(doc, pageWidth, pageHeight);

  // Page 2 — Outcomes
  doc.addPage();
  heading(doc, "Program Outcomes", margin, 80);
  const outcomes = [
    "Owner confidence as skipper or informed non-skipper",
    "Safe, insurable charter-ready vessel",
    "Seamless handover into charter operations",
    "Clear understanding of financial, legal, and operational realities",
  ];
  outcomes.forEach((t, i) => {
    body(doc, "- " + t, margin, 120 + i * 24);
  });

  // Layout images row
  subheading(doc, "Example Layouts (Bali 5.4)", margin, 210);
  const imgW = (pageWidth - margin * 2 - 20) / 3; // 10px gaps
  const imgH = imgW * 0.75;
  doc.addImage(layout1, "PNG", margin, 230, imgW, imgH);
  doc.addImage(layout2, "JPEG", margin + imgW + 10, 230, imgW, imgH);
  doc.addImage(layout3, "JPEG", margin + imgW * 2 + 20, 230, imgW, imgH);

  footer(doc, pageWidth, pageHeight);

  // Page 3 — Phases 1–3
  doc.addPage();
  heading(doc, "Program Phases (1–3)", margin, 80);

  subheading(doc, "1. Owner Orientation & Expectations (Day 1)", margin, 110);
  body(doc, "Objectives:", margin, 132);
  [
    "Align owner goals with commercial reality",
    "Establish roles, authority, and decision boundaries",
    "Remove surprises early",
  ].forEach((t, idx) => body(doc, "- " + t, margin + 16, 152 + idx * 20));

  body(doc, "Content:", margin, 222);
  [
    "Ownership models: owner-use vs revenue-first",
    "Income expectations and seasonality",
    "Responsibilities: owner vs charter manager",
    "Charter standards, inspections, and audits",
  ].forEach((t, idx) => body(doc, "- " + t, margin + 16, 242 + idx * 20));

  subheading(doc, "2. Vessel Systems & Risk Awareness (Days 2–3)", margin, 322);
  body(doc, "Systems (hands-on): engines, electrical, plumbing, nav, safety", margin, 344);
  body(doc, "Risk awareness: what breaks first, preventative vs reactive, liability", margin, 364);

  subheading(doc, "3. Owner as Skipper (Optional; Days 4–6)", margin, 394);
  body(doc, "Competencies: handling, anchoring, sail management, emergency drills", margin, 416);
  body(doc, "Charter focus: guest safety, decision making, fatigue, weather", margin, 436);

  footer(doc, pageWidth, pageHeight);

  // Page 4 — Phases 4–6
  doc.addPage();
  heading(doc, "Program Phases (4–6)", margin, 80);

  subheading(doc, "4. Charter Operations Reality (Days 4–6)", margin, 110);
  body(doc, "Turnarounds, presentation standards, provisioning, guest handovers", margin, 132);
  body(doc, "Crew integration, boundaries, performance expectations", margin, 152);

  subheading(doc, "5. Financial, Legal & Tax Briefing (Day 7 or separate)", margin, 182);
  body(doc, "Financial structure, compliance, insurance, tax concepts", margin, 204);

  subheading(doc, "6. Handover to Charter Management (Final Day)", margin, 234);
  body(doc, "Condition sign-off, inventory, calendar rules, protocols", margin, 256);

  subheading(doc, "Contact & Next Steps", margin, 300);
  body(doc, "Request full program details or schedule your transition:", margin, 322);
  body(doc, "Email: info@viyb.com • Web: www.viyb.com • Phone: +1 (284) 494-2450", margin, 342);

  footer(doc, pageWidth, pageHeight);

  // Save
  doc.save("VIYB-Owner-Transition-Program.pdf");
}
