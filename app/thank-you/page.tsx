import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Your free digital marketing consultation request has been received.",
  robots: { index: false, follow: false },
};

const whatsappMessage = encodeURIComponent(
  "Hi, I just submitted my consultation request. I’d like to connect with you on WhatsApp and discuss the next steps.",
);
const whatsappUrl = `https://wa.me/9779745727478?text=${whatsappMessage}`;
const configuredVimeoId = getVimeoId(process.env.NEXT_PUBLIC_VIMEO_VIDEO_URL);
const vimeoId = configuredVimeoId ?? "945577561";

function getVimeoId(value?: string) {
  if (!value) return null;

  try {
    const parsed = new URL(value);
    if (
      parsed.hostname !== "vimeo.com" &&
      parsed.hostname !== "www.vimeo.com" &&
      parsed.hostname !== "player.vimeo.com"
    ) {
      return null;
    }
    const match = parsed.pathname.match(/(?:video\/)?(\d+)/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="relative isolate overflow-hidden px-5 py-14 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-[-18rem] -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#f5c84c]/25 blur-3xl" />
        <div className="site-container relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <section className="animate-rise w-full rounded-[2rem] border border-[#172019]/[0.08] bg-white p-6 shadow-[0_30px_90px_rgba(23,32,25,0.10)] min-[390px]:p-8 sm:p-12">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#f5c84c] text-[#172019]">
              <Check aria-hidden="true" className="h-7 w-7" strokeWidth={3} />
            </span>
            <h1 className="display-heading mt-4 text-4xl leading-tight sm:text-5xl">
              Your Consultation Request Has Been Received
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#5f695f]">
              Thanks for reaching out. Your consultation request is in. You can
              also message me directly on WhatsApp.
            </p>
          </section>

          <section className="mt-12 w-full sm:mt-14" aria-labelledby="watch-video-heading">
            <h2 id="watch-video-heading" className="display-heading mt-3 text-3xl sm:text-4xl">
              Watch this video
            </h2>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#172019]/10 bg-[#172019] shadow-[0_24px_70px_rgba(23,32,25,0.14)]">
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}`}
                title={configuredVimeoId ? "Watch this video on Vimeo" : "Sample video: Introduction to digital marketing"}
                className="block aspect-video w-full"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                allowFullScreen
              />
            </div>
            {!configuredVimeoId && (
              <p className="mt-3 text-sm text-[#5f695f]">
                Sample video: Introduction to digital marketing.
              </p>
            )}
          </section>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#1f9d55] px-7 py-4 text-sm font-extrabold text-white shadow-[0_14px_36px_rgba(31,157,85,0.22)] transition hover:-translate-y-0.5 hover:bg-[#188348] sm:mt-10 sm:w-auto"
          >
            <MessageCircle aria-hidden="true" className="mr-2 h-5 w-5" />
            Connect with me on WhatsApp
          </a>
          <p className="mt-3 text-sm font-semibold text-[#5f695f]">
            WhatsApp:{" "}
            <a className="underline underline-offset-4" href="tel:+9779745727478">
              +977 9745727478
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
