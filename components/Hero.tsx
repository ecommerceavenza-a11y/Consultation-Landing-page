import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-20rem] -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#f5c84c]/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-11rem] top-24 -z-10 h-72 w-72 rounded-full bg-[#829b83]/15 blur-3xl" />

      <div className="site-container flex min-h-[650px] flex-col items-center justify-center py-16 text-center sm:min-h-[690px] sm:py-24">
        <div className="animate-rise max-w-4xl">
          <p className="eyebrow">Free 30-minute consultation</p>
          <h1 className="display-heading mt-5 text-[2.65rem] leading-[0.98] min-[390px]:text-[3rem] sm:text-6xl lg:text-[4.85rem]">
            Get a clear plan to turn your marketing into{" "}
            <span className="relative inline-block whitespace-nowrap">
              more customers
              <span className="absolute inset-x-0 bottom-[0.04em] -z-10 h-[0.18em] rounded-full bg-[#f5c84c]" />
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-8 text-[#4f5b51] sm:text-xl">
            Book a free consultation and get a customized digital marketing plan
            with practical next steps.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6b756c] sm:text-base">
            For established service businesses that want more qualified leads,
            faster follow-up, and a clearer path from marketing to sales.
          </p>

          <a href="#consultation-form" className="primary-cta mt-9 w-full sm:w-auto">
            Book My Free Consultation
            <ArrowDown aria-hidden="true" className="ml-2 h-4 w-4" />
          </a>
          <p className="mt-4 text-xs font-semibold text-[#707a71]">
            30 minutes · Customized plan · Practical next steps
          </p>
        </div>
      </div>
    </section>
  );
}
