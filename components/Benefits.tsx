import { Check } from "lucide-react";

const benefits = [
  "Know which marketing actions to prioritize",
  "See where qualified leads may be getting lost",
  "Find practical ways to improve your follow-up",
  "Get a customized plan with clear next steps",
  "Keep the plan and use it after the consultation",
];

export function Benefits() {
  return (
    <section className="py-20 sm:py-24">
      <div className="site-container grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div className="lg:sticky lg:top-12">
          <p className="eyebrow">How you benefit</p>
          <h2 className="display-heading mt-4 text-4xl leading-tight sm:text-5xl">
            Leave with clarity, not more confusion.
          </h2>
        </div>

        <ul className="grid gap-3" aria-label="Consultation benefits">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex min-h-20 items-center gap-4 rounded-2xl border border-[#172019]/[0.08] bg-white px-5 py-4 shadow-[0_10px_36px_rgba(23,32,25,0.04)] sm:px-6"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f5c84c] text-[#172019]">
                <Check aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="font-semibold leading-6">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
