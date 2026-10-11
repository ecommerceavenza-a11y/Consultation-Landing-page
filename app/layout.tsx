import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "AI Manjeet | Digital Marketing Consultation",
    template: "%s | AI Manjeet",
  },
  description:
    "A free 30-minute digital marketing consultation with a customized plan and practical next steps.",
  applicationName: "AI Manjeet",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Manjeet",
    title: "AI Manjeet | Digital Marketing Consultation",
    description:
      "Book a free 30-minute consultation and receive a customized digital marketing plan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Manjeet | Digital Marketing Consultation",
    description:
      "Book a free 30-minute consultation and receive a customized digital marketing plan.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
