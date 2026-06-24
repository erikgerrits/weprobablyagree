export type Statement = {
  /** Two-digit article number, e.g. "01". */
  n: string;
  /** The statement itself — a shared value, never a specific policy. */
  title: string;
  /** A single line of nuance that keeps it broadly agreeable. */
  note: string;
  /** Optional attribution, e.g. a book the statement draws on. */
  source?: string;
};

/**
 * Starter statements — deliberately written as shared *values* rather than
 * *policies*. The policies are where we disagree; the values are where we
 * (probably) already agree. Edit freely; this is the floor, not the ceiling.
 */
export const statements: Statement[] = [
  {
    n: "01",
    title: "Every child deserves a real chance to thrive.",
    note: "Where you happen to be born shouldn't decide how far you can go.",
  },
  {
    n: "02",
    title: "Honest work should earn a decent life.",
    note: "If you show up and contribute, you shouldn't be left behind.",
  },
  {
    n: "03",
    title: "Clean air, clean water, and a livable planet are worth protecting.",
    note: "We borrow this world from the people who come after us.",
  },
  {
    n: "04",
    title: "No one should be ruined by getting sick.",
    note: "Illness is hard enough without losing everything you've built.",
  },
  {
    n: "05",
    title: "The truth is worth defending.",
    note: "We can't fix real problems with things that aren't real.",
  },
  {
    n: "06",
    title: "Power should answer to the people it affects.",
    note: "Those who govern work for us — not the other way around.",
  },
  {
    n: "07",
    title: "Everyone deserves to feel safe.",
    note: "At home, at work, and in public — safety is the floor a good life stands on.",
  },
  {
    n: "08",
    title: "Wealth built on historical crimes was never rightfully earned.",
    note: "No one is morally entitled to the part of a fortune that traces back to slavery or theft — whether they committed the wrong themselves or inherited it from those who did.",
    source: "Limitarianism — Ingrid Robeyns",
  },
];
