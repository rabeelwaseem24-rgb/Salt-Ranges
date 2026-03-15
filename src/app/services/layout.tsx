import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services & Industries | Salt Ranges",
  description: "Explore our strategic financial services and the key industries we serve globally.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
