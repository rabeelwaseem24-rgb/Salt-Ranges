import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Financial Services & Industries | Debt, PE & M&A Advisory",
  description: "Explore Salt Ranges' services: Debt Financing, Capital Raising, Private Equity, and M&A advisory. Tailored capital solutions for Real Estate, Manufacturing, and Healthcare.",
  keywords: ["debt financing", "private equity", "M&A advisory", "trade facilities", "capital raising services"],
};

export default function Services() {
  return <ServicesClient />;
}
