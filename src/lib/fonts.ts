// src/lib/fonts.ts
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";

export const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const elegantSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-elegant",
});