import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Salt Ranges | Multinational Financial Advisory Experts",
  description: "Learn about Salt Ranges, a multinational advisory firm led by Haroon Altaf, dedicated to empowering businesses with strategic financial strategies and capital access.",
  keywords: ["financial advisory", "Salt Ranges mission", "Haroon Altaf", "investment strategies", "capital advisory"],
};

export default function About() {
  return <AboutClient />;
}
