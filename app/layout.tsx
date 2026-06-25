import type { Metadata } from "next";
import { Schibsted_Grotesk, Figtree } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "We Probably Agree",
  description:
    "Before we argue about how, let's name what we share. The things most of us already agree on — the starting point for the decisions that come next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${schibsted.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
