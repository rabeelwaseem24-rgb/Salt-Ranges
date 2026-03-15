import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Salt Ranges | Professional Financing Advisory Dubai",
  description: "Get in touch with Salt Ranges for strategic debt and capital raising inquiries. Offices in Dubai and Canada. Book a professional consultation today.",
  keywords: ["contact Salt Ranges", "financing consultation Dubai", "capital raising contact", "Haroon Altaf advisory", "Dubai debt financing"],
};

export default function Contact() {
  return <ContactClient />;
}
