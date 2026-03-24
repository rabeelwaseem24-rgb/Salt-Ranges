import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://salt-ranges.com"),
  title: {
    default: "Salt Ranges | Strategic Debt Solutions",
    template: "%s | Salt Ranges"
  },
  description: "Multinational advisory firm helping businesses access capital, bank financing, and structure financial strategies.",
  openGraph: {
    title: "Salt Ranges | Strategic Debt Solutions",
    description: "Empowering businesses with structured financial solutions and global capital access.",
    url: "https://salt-ranges.com",
    siteName: "Salt Ranges",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salt Ranges | Strategic Debt Solutions",
    description: "Multinational financial advisory firm specializing in debt and capital raising.",
  },
  icons: {
    icon: "/logo_.png",

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <Navigation />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
