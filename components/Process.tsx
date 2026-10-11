const steps = [
  {
    number: "01",
    title: "Share your details",
    description: "Tell me about your business and what you want to improve.",
  },
  {
    number: "02",
    title: "Join the consultation",
    description: "We discuss your goals, current marketing, and practical options.",
  },
  {
    number: "03",
    title: "Get your customized plan",
    description: "Your plan is provided after the consultation, with clear next steps.",
  },
];

export function Process() {
  return (
    <section className="bg-[#172019] py-20 text-white sm:py-24">
      <div className="site-container">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f5c84c]">
            Consultation process
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Three simple steps
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 sm:p-7"
            >
              <span className="text-sm font-extrabold text-[#f5c84c]">{step.number}</span>
              <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
