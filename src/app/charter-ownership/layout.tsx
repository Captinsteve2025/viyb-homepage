import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BVI Charter Ownership Program | Catamaran Charter Investment | VIYB",
  description: "Turn your catamaran into a profitable charter business in the British Virgin Islands. Professional charter management, tax benefits, and owner training with My Caribbean Charters (MCC).",
  keywords: [
    "BVI charter ownership",
    "catamaran charter investment",
    "Caribbean charter management",
    "Bali catamaran charter business",
    "yacht charter income BVI",
    "charter catamaran tax benefits",
    "MCC clearinghouse program",
    "British Virgin Islands yacht charter",
    "charter management BVI",
    "yacht charter ROI",
  ],
  openGraph: {
    title: "BVI Charter Ownership Program | Virgin Islands Yacht Broker",
    description: "Turn your catamaran into a profitable charter business in the British Virgin Islands. Professional charter management with proven income potential.",
    type: "website",
  },
};

export default function CharterOwnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
