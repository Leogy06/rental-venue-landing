import React from "react";
import Image from "next/image";
import Link from "next/link";

import { heroDetails } from "@/data/hero";

/**
 * Expected shape of `heroDetails` (adjust /data/hero.ts to match):
 *
 * {
 *   eyebrow: "EST. 2014 · CAPACITY 400",
 *   headingLine1: "Your Story,",
 *   headingLine2: "Staged Grand",
 *   subheading: "A restored 1920s ballroom in the heart of downtown — ...",
 *   primaryCta: { label: "Book a Tour", href: "#booking" },
 *   secondaryCta: { label: "View Packages", href: "#packages" },
 *   contact: { phone: "(555) 210-4488", email: "hello@grandhallevents.com" },
 *   mainImageSrc: "/images/hero-main.jpg",
 *   secondaryImageSrc: "/images/hero-detail.jpg",
 *   nextAvailable: [
 *     { day: "Sat", date: "Oct 18" },
 *     { day: "Sat", date: "Nov 08" },
 *     { day: "Sat", date: "Nov 22" },
 *   ],
 * }
 */

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-[#F6F1E7] mt-14">
      <div className="grid md:grid-cols-[minmax(0,42%)_1fr] min-h-screen">
        {/* LEFT — INK PANEL */}
        <div className="relative flex flex-col justify-center px-8 py-20 md:px-14 bg-[#15130F] overflow-hidden">
          {/* faint grid texture, contained to this panel only */}
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:36px_36px]" />

          <div className="relative z-10 max-w-md">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#C9A15A]">
              {heroDetails.eyebrow}
            </p>

            <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] text-[#F6F1E7]">
              {heroDetails.headingLine1}
              <br />
              <span className="italic text-[#C9A15A]">
                {heroDetails.headingLine2}
              </span>
            </h1>

            <p className="mt-6 text-[#CFC8B8] leading-relaxed">
              {heroDetails.subheading}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={heroDetails.primaryCta.href}
                className="bg-[#C9A15A] hover:bg-[#DAB670] text-[#15130F] px-7 py-3 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A15A]"
              >
                {heroDetails.primaryCta.label}
              </Link>
              <Link
                href={heroDetails.secondaryCta.href}
                className="border border-[#4A463C] text-[#F6F1E7] hover:border-[#C9A15A] hover:text-[#C9A15A] px-7 py-3 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A15A]"
              >
                {heroDetails.secondaryCta.label}
              </Link>
            </div>

            <div className="mt-12 pt-6 border-t border-[#2A271F] flex flex-col gap-1.5 font-mono text-xs text-[#8C8676]">
              <a
                href={`tel:${heroDetails.contact.phone}`}
                className="hover:text-[#EDE9DD] transition-colors"
              >
                {heroDetails.contact.phone}
              </a>
              <a
                href={`mailto:${heroDetails.contact.email}`}
                className="hover:text-[#EDE9DD] transition-colors"
              >
                {heroDetails.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — IVORY PANEL, PHOTO COLLAGE */}
        <div className="relative flex items-center justify-center p-8 md:p-14">
          <div className="relative w-full max-w-xl aspect-[4/5] md:aspect-[5/4]">
            {/* main photo */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={heroDetails.mainImageSrc}
                alt="The main hall set for an evening reception"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 90vw, 44vw"
                className="object-cover"
              />
            </div>

            {/* overlapping detail photo */}
            <div className="absolute -bottom-8 -left-8 w-40 h-52 md:w-48 md:h-60 rounded-xl overflow-hidden shadow-lg border-4 border-[#F6F1E7] hidden sm:block">
              <Image
                src={heroDetails.secondaryImageSrc}
                alt="Table setting detail"
                fill
                unoptimized
                sizes="200px"
                className="object-cover"
              />
            </div>

            {/* floating availability card — the signature element */}
            <div className="absolute top-6 -right-4 md:right-6 w-52 rounded-xl bg-[#F6F1E7]/95 backdrop-blur border border-[#E4DCC8] shadow-lg px-5 py-4">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8C8676]">
                Next Open Saturdays
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {heroDetails.nextAvailable.map((slot, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between text-sm text-[#211F1A]"
                  >
                    <span className="font-medium">{slot.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B34632]" />
                  </li>
                ))}
              </ul>
              <Link
                href={heroDetails.primaryCta.href}
                className="mt-4 inline-block text-xs font-semibold text-[#B34632] hover:text-[#8f3627] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B34632]"
              >
                Hold a date →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
