import Reveal from "@/components/Reveal";
import { statements } from "@/lib/statements";

export default function Home() {
  const total = statements.length;

  return (
    <main className="relative mx-auto w-full max-w-5xl px-6 sm:px-10">
      {/* Masthead --------------------------------------------------- */}
      <header className="rise flex items-center justify-between border-b border-line py-5 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-ink-soft">
        <span className="text-clay">We Probably Agree</span>
        <span className="hidden sm:inline">A charter of common ground</span>
        <span>Ed. 2026</span>
      </header>

      {/* Hero ------------------------------------------------------- */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p
          className="rise font-mono text-xs uppercase tracking-[0.32em] text-ink-soft"
          style={{ animationDelay: "0.05s" }}
        >
          Common ground, first
        </p>

        <h1
          className="rise mt-7 text-[clamp(3.2rem,13vw,9.5rem)] font-light leading-[0.92] tracking-[-0.03em]"
          style={{ animationDelay: "0.12s" }}
        >
          We probably
          <br />
          <span className="italic text-clay">agree.</span>
        </h1>

        <p
          className="rise mt-10 max-w-2xl text-[clamp(1.15rem,2.4vw,1.55rem)] leading-relaxed text-ink-soft"
          style={{ animationDelay: "0.22s" }}
        >
          The headlines sell us the ten percent where we clash. But beneath the
          noise, most of us already share the things that matter most. Before we
          argue about <span className="italic text-ink">how</span>, let&apos;s
          name <span className="italic text-ink">what</span> we share — and
          start there.
        </p>

        <div
          className="rise mt-12 flex items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ink-faint"
          style={{ animationDelay: "0.32s" }}
        >
          <span className="h-px w-12 bg-clay" />
          {total} statements
        </div>
      </section>

      {/* Articles --------------------------------------------------- */}
      <section aria-label="Statements of common ground">
        <ol>
          {statements.map((s, i) => (
            <li key={s.n} className="group relative border-t border-line">
              {/* Clay tick that grows on hover over the hairline */}
              <span className="absolute left-0 top-0 h-px w-0 bg-clay transition-all duration-500 ease-out group-hover:w-16" />

              <Reveal
                delay={(i % 4) * 70}
                className="grid grid-cols-1 gap-x-10 gap-y-3 py-10 sm:grid-cols-[5.5rem_1fr] sm:py-14"
              >
                <div className="flex items-baseline gap-3 sm:flex-col sm:gap-1">
                  <span className="font-mono text-2xl text-clay transition-transform duration-500 ease-out group-hover:-translate-y-0.5 sm:text-3xl">
                    {s.n}
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-faint">
                    / {total}
                  </span>
                </div>

                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[7rem] font-light leading-none text-clay/[0.06] transition-colors duration-500 group-hover:text-clay/[0.1] sm:-top-10 sm:text-[9rem]"
                  >
                    {s.n}
                  </span>
                  <h2 className="relative max-w-2xl text-[clamp(1.65rem,4.2vw,2.65rem)] font-light leading-[1.12] tracking-[-0.015em]">
                    {s.title}
                  </h2>
                  <p className="relative mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                    {s.note}
                  </p>
                  {s.source ? (
                    <p className="relative mt-4 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-ink-faint">
                      <span className="h-px w-5 bg-clay/60" />
                      {s.source}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="border-t border-line" />
      </section>

      {/* Closing ---------------------------------------------------- */}
      <section className="py-24 sm:py-32">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ink-faint">
            <span className="h-px w-12 bg-clay" />
            Where this goes
          </div>
          <h2 className="mt-8 text-[clamp(2rem,6vw,3.5rem)] font-light leading-[1.08] tracking-[-0.02em]">
            This is where we start —{" "}
            <span className="italic text-clay">not where we stop.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft sm:text-xl">
            Agreeing on what matters is the easy part. The hard part is deciding
            what to <span className="italic text-ink">do</span> about it — and
            that&apos;s the argument worth having. It&apos;s a better argument
            when it begins from common ground instead of contempt. These
            statements are the floor. The decisions come next.
          </p>
        </Reveal>
      </section>

      {/* Footer ----------------------------------------------------- */}
      <footer className="flex flex-col items-start justify-between gap-4 border-t border-line py-8 font-mono text-[0.66rem] uppercase tracking-[0.26em] text-ink-faint sm:flex-row sm:items-center">
        <span className="text-ink-soft">We Probably Agree</span>
        <span>A starting point · 2026</span>
      </footer>
    </main>
  );
}
