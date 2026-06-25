import Reveal from "@/components/Reveal";
import { statements } from "@/lib/statements";

export default function Home() {
  const total = statements.length;

  return (
    <main className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
      {/* Nav -------------------------------------------------------- */}
      <header className="rise flex items-center justify-between border-b border-border py-5">
        <span className="flex items-center gap-2 font-display text-sm font-bold tracking-tight text-ink">
          <span className="h-2 w-2 rounded-full bg-ember" />
          We Probably Agree
        </span>
        <span className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-faint">
          Common ground · 2026
        </span>
      </header>

      {/* Hero ------------------------------------------------------- */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p
          className="rise flex items-center gap-3 font-body text-xs font-bold uppercase tracking-[0.22em] text-ember-deep"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="h-px w-8 bg-ember" />
          Common ground, first
        </p>

        <h1
          className="rise mt-7 max-w-4xl font-display text-[clamp(3rem,11vw,7rem)] font-bold leading-[0.95] tracking-[-0.025em]"
          style={{ animationDelay: "0.12s" }}
        >
          We probably <span className="text-ember">agree.</span>
        </h1>

        <p
          className="rise mt-9 max-w-2xl font-body text-[clamp(1.12rem,2.2vw,1.45rem)] leading-relaxed text-ink-soft"
          style={{ animationDelay: "0.22s" }}
        >
          The headlines sell us the ten percent where we clash. But underneath
          the noise, most of us already share the things that matter most.
          Before we argue about{" "}
          <span className="font-semibold text-ink">how</span>, let&apos;s name{" "}
          <span className="font-semibold text-ink">what</span> we share — and
          start there.
        </p>

        <div
          className="rise mt-11 flex items-center gap-4 font-body text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink-faint"
          style={{ animationDelay: "0.32s" }}
        >
          <span className="h-px w-12 bg-ember" />
          {total} statements
        </div>
      </section>

      {/* Cards ------------------------------------------------------ */}
      <section aria-label="Statements of common ground">
        <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {statements.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={(i % 2) * 90}>
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-7 shadow-[0_1px_2px_rgba(38,34,27,0.04),0_16px_36px_-20px_rgba(38,34,27,0.22)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-[0_2px_4px_rgba(38,34,27,0.05),0_28px_56px_-22px_rgba(38,34,27,0.32)] sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ember font-display text-lg font-bold text-bone">
                      {s.n}
                    </span>
                    <span className="font-body text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink-faint transition-colors duration-500 group-hover:text-ember-deep">
                      a thing we share
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-[clamp(1.45rem,2.7vw,2rem)] font-bold leading-[1.14] tracking-[-0.01em] text-ink">
                    {s.title}
                  </h2>

                  <p className="mt-3 font-body text-[1.02rem] leading-relaxed text-ink-soft">
                    {s.note}
                  </p>

                  {s.source ? (
                    <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-ember/30 px-3 py-1.5 font-body text-[0.72rem] font-bold uppercase tracking-[0.1em] text-ember-deep">
                      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                      {s.source}
                    </span>
                  ) : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Closing — the one bold dark moment ------------------------- */}
      <section className="py-16 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-night p-9 sm:p-16">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-ember/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative max-w-3xl">
              <p className="flex items-center gap-3 font-body text-xs font-bold uppercase tracking-[0.22em] text-ember-light">
                <span className="h-px w-8 bg-ember-light" />
                Where this goes
              </p>
              <h2 className="mt-6 font-display text-[clamp(1.9rem,5vw,3.2rem)] font-bold leading-[1.06] tracking-[-0.02em] text-bone">
                This is where we start —{" "}
                <span className="text-ember-light">not where we stop.</span>
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-[#cfc7b8] sm:text-xl">
                Agreeing on what matters is the easy part. The hard part is
                deciding what to{" "}
                <span className="font-semibold text-bone">do</span> about it —
                and that&apos;s the argument worth having. It&apos;s a better
                argument when it starts from common ground instead of contempt.
                These are the floor. The decisions come next.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer ----------------------------------------------------- */}
      <footer className="flex flex-col items-start justify-between gap-3 border-t border-border py-8 font-body text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-faint sm:flex-row sm:items-center">
        <span className="flex items-center gap-2 text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          We Probably Agree
        </span>
        <span>A starting point · 2026</span>
      </footer>
    </main>
  );
}
