import Reveal from "@/components/Reveal";
import { statements } from "@/lib/statements";

/** Gentle pastel themes, rotated across the statement cards. */
const palettes = [
  { card: "#FCE9E0", badge: "#F7CDBA", ink: "#BC5C36" }, // peach
  { card: "#E4F1EA", badge: "#BFE2CD", ink: "#3E8E6B" }, // mint
  { card: "#E7EFF8", badge: "#C4DBEE", ink: "#3F7CB0" }, // sky
  { card: "#FAF0D2", badge: "#F0DE9C", ink: "#A9842B" }, // butter
  { card: "#EFEAF7", badge: "#D6CAEC", ink: "#7E64B0" }, // lilac
  { card: "#FBE5E9", badge: "#F3C1CB", ink: "#C2566F" }, // rose
];

export default function Home() {
  const total = statements.length;

  return (
    <main className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
      {/* Hero ------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="blob h-64 w-64 bg-[#f7b79c]" style={{ top: "-2rem", left: "-3rem" }} />
        <div
          className="blob h-72 w-72 bg-[#bcd9ec]"
          style={{ top: "1rem", right: "-4rem", animationDelay: "2s" }}
        />
        <div
          className="blob h-56 w-56 bg-[#c8e3d1]"
          style={{ bottom: "-3rem", left: "30%", animationDelay: "4s" }}
        />

        <div className="relative z-10">
          <span
            className="rise inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft shadow-sm ring-1 ring-black/5 backdrop-blur"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 rounded-full bg-coral" />
            Common ground, first
          </span>

          <h1
            className="rise mt-7 max-w-4xl font-display text-[clamp(2.9rem,11vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.01em]"
            style={{ animationDelay: "0.12s" }}
          >
            we probably <span className="text-coral">agree</span>
          </h1>

          <p
            className="rise mt-8 max-w-2xl font-body text-[clamp(1.1rem,2.2vw,1.45rem)] leading-relaxed text-ink-soft"
            style={{ animationDelay: "0.22s" }}
          >
            The headlines sell us the ten percent where we clash. But underneath
            the noise, most of us already share the things that matter most.
            Before we argue about <span className="font-semibold text-ink">how</span>,
            let&apos;s name <span className="font-semibold text-ink">what</span>{" "}
            we share — and start there.
          </p>

          <div
            className="rise mt-9 inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-2 font-body text-sm font-bold text-coral-deep"
            style={{ animationDelay: "0.32s" }}
          >
            ✦ {total} things we share
          </div>
        </div>
      </section>

      {/* Cards ------------------------------------------------------ */}
      <section aria-label="Statements of common ground" className="pb-6">
        <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {statements.map((s, i) => {
            const p = palettes[i % palettes.length];
            return (
              <li key={s.n}>
                <Reveal delay={(i % 2) * 90}>
                  <article
                    className="card card-hover flex h-full flex-col p-7 sm:p-9"
                    style={{ backgroundColor: p.card }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl font-display text-lg font-semibold"
                        style={{ backgroundColor: p.badge, color: p.ink }}
                      >
                        {s.n}
                      </span>
                      <span
                        className="font-body text-[0.7rem] font-bold uppercase tracking-[0.16em]"
                        style={{ color: p.ink }}
                      >
                        a thing we share
                      </span>
                    </div>

                    <h2 className="mt-6 font-display text-[clamp(1.45rem,2.6vw,1.9rem)] font-semibold leading-[1.18] text-ink">
                      {s.title}
                    </h2>

                    <p className="mt-3 font-body text-[1.02rem] leading-relaxed text-ink-soft">
                      {s.note}
                    </p>

                    {s.source ? (
                      <p
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/55 px-3 py-1.5 font-body text-[0.72rem] font-semibold"
                        style={{ color: p.ink }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: p.ink }}
                        />
                        {s.source}
                      </p>
                    ) : null}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Closing ---------------------------------------------------- */}
      <section className="py-14 sm:py-20">
        <Reveal>
          <div className="card relative overflow-hidden bg-white/70 p-9 backdrop-blur sm:p-14">
            <div
              className="blob h-48 w-48 bg-[#f2d6a0]"
              style={{ top: "-2rem", right: "10%" }}
            />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.16em] text-coral-deep">
                Where this goes
              </span>
              <h2 className="mt-6 font-display text-[clamp(1.9rem,5vw,3.1rem)] font-semibold leading-[1.1] text-ink">
                this is where we start —{" "}
                <span className="text-coral">not where we stop.</span>
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-ink-soft sm:text-xl">
                Agreeing on what matters is the easy part. The hard part is
                deciding what to{" "}
                <span className="font-semibold text-ink">do</span> about it — and
                that&apos;s the argument worth having. It&apos;s a better argument
                when it starts from common ground instead of contempt. These are
                the floor. The decisions come next.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer ----------------------------------------------------- */}
      <footer className="flex flex-col items-start justify-between gap-3 border-t border-black/5 py-8 font-body text-sm text-ink-faint sm:flex-row sm:items-center">
        <span className="font-display text-base font-semibold text-ink-soft">
          we probably agree
        </span>
        <span>a starting point · 2026</span>
      </footer>
    </main>
  );
}
