import { Anek_Tamil, Geist, Geist_Mono } from "next/font/google";

/**
 * FONT REGISTRY — swap a font here and it updates site-wide.
 * Each font exposes a CSS variable that is mapped to a Tailwind font family
 * in `@theme inline` inside src/app/globals.css.
 */
export const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const fontHeading = Anek_Tamil({
  subsets: ["latin"], // add "tamil" if needed
  weight: ["600", "700", "800"],
  variable: "--font-anek-tamil",
  display: "swap",
});

/** All font CSS-variable classes, applied once on <html>. */
export const fontVariables = [
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable,
].join(" ");
