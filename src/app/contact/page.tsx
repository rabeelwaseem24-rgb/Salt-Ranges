import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Salt Ranges | Professional Financing Advisory",
  description: "Get in touch with Salt Ranges for strategic debt and capital raising inquiries. Book a professional consultation today.",
  keywords: ["contact Salt Ranges", "financing consultation", "capital raising contact", "Haroon Altaf advisory", "debt financing"],
};

export default function Contact() {
  return <ContactClient />;
}
