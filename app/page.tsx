import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { CTAForm } from "@/components/CTAForm";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";

export const metadata: Metadata = {
  title: "Free Digital Marketing Consultation",
  description:
    "Book a free 30-minute consultation and receive a customized digital marketing plan with practical next steps.",
  openGraph: {
    title: "Free Digital Marketing Consultation | AI Manjeet",
    description:
      "Get a customized digital marketing plan with clear priorities and practical next steps.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Process />
        <CTAForm />
      </main>
    </>
  );
}
