import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Salt Ranges",
  description: "Learn more about Salt Ranges, our mission, vision, and leadership.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
