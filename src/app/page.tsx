import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Salt Ranges | Structured Debt & Capital Raising Dubai",
  description: "Salt Ranges helps businesses access strategic capital, bank financing, and debt restructuring solutions in Dubai and internationally.",
  keywords: ["debt financing Dubai", "capital raising", "financial advisory", "bank financing", "Salt Ranges"],
  openGraph: {
    title: "Salt Ranges | Strategic Debt Solutions",
    description: "Multinational advisory firm specialized in structured debt and capital raising.",
    url: "https://salt-ranges.com",
    siteName: "Salt Ranges",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
