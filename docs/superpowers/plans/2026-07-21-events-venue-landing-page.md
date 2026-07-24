# Events Venue & Catering Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the FinWise fintech landing page into an elegant events venue & catering landing page with services, venues, gallery, packages, booking form, and contact info.

**Architecture:** Reuse existing Next.js + Tailwind CSS component architecture. Replace all fintech content with venue content. Rename Benefits→Services, Pricing→Packages, Logos→Gallery. Add new components: Venues, About, BookingContact. Update color scheme to gold/green elegant palette.

**Tech Stack:** Next.js 16, React 18, TypeScript, Tailwind CSS 3, Framer Motion, HeadlessUI, react-icons

## Global Constraints

- Business name: "Yolach&apos;s Venue" (placeholder)
- Primary color: `#C9A96E` (warm gold), Secondary: `#1B3A2D` (forest green)
- Background: `#FDFBF7` (warm white), Hero background: `#F5F0E8` (cream)
- Foreground: `#1A1A1A`, Foreground accent: `#5A5A5A`
- Heading font: Playfair Display (serif), Body font: Source Sans 3 (existing)
- All images use placeholder paths — no actual image files created
- Booking form is client-side only with validation and success state
- Must pass `npm run build` and `npm run lint` after each task

---

## File Structure

### Modified Files

| File                              | Responsibility                                     |
| --------------------------------- | -------------------------------------------------- |
| `src/app/globals.css`             | Update CSS custom properties for new color palette |
| `src/app/layout.tsx`              | Import Playfair Display font, update metadata      |
| `src/app/page.tsx`                | New section composition                            |
| `src/types.ts`                    | Add IVenue, IGalleryImage interfaces               |
| `src/data/siteDetails.ts`         | New site name, metadata                            |
| `src/data/hero.ts`                | New headline, subheading, image                    |
| `src/data/menuItems.ts`           | New navigation items                               |
| `src/data/faq.ts`                 | Venue-related FAQs                                 |
| `src/data/footer.ts`              | Updated links and contact                          |
| `src/data/testimonials.ts`        | Venue client reviews                               |
| `src/data/stats.tsx`              | Venue business stats                               |
| `src/components/Header.tsx`       | New nav items, icon, CTA                           |
| `src/components/Hero.tsx`         | Remove app buttons, add venue CTAs                 |
| `src/components/Testimonials.tsx` | No structural change (data-driven)                 |
| `src/components/Stats.tsx`        | No structural change (data-driven)                 |
| `src/components/FAQ.tsx`          | Update email reference                             |
| `src/components/Footer.tsx`       | Update content, credits                            |

### Renamed Files

| From                                         | To                                           |
| -------------------------------------------- | -------------------------------------------- |
| `src/components/Benefits/`                   | `src/components/Services/`                   |
| `src/components/Benefits/Benefits.tsx`       | `src/components/Services/Services.tsx`       |
| `src/components/Benefits/BenefitSection.tsx` | `src/components/Services/ServiceSection.tsx` |
| `src/components/Benefits/BenefitBullet.tsx`  | `src/components/Services/ServiceFeature.tsx` |
| `src/components/Pricing/`                    | `src/components/Packages/`                   |
| `src/components/Pricing/Pricing.tsx`         | `src/components/Packages/Packages.tsx`       |
| `src/components/Pricing/PricingColumn.tsx`   | `src/components/Packages/PackageColumn.tsx`  |
| `src/data/benefits.tsx`                      | `src/data/services.ts`                       |
| `src/data/pricing.ts`                        | `src/data/packages.ts`                       |

### Created Files

| File                                | Responsibility                 |
| ----------------------------------- | ------------------------------ |
| `src/data/venues.ts`                | Venue space data               |
| `src/data/gallery.ts`               | Gallery image data             |
| `src/data/about.ts`                 | About section content          |
| `src/data/booking.ts`               | Booking section content        |
| `src/components/Venues.tsx`         | Venues section component       |
| `src/components/Gallery.tsx`        | Gallery section component      |
| `src/components/About.tsx`          | About section component        |
| `src/components/BookingContact.tsx` | Booking form + contact details |

### Deleted Files

| File                                 | Reason              |
| ------------------------------------ | ------------------- |
| `src/components/AppStoreButton.tsx`  | Not needed          |
| `src/components/PlayStoreButton.tsx` | Not needed          |
| `src/components/Logos.tsx`           | Replaced by Gallery |

---

### Task 1: Foundation — Colors, Fonts, Types, and Site Metadata

**Files:**

- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/types.ts`
- Modify: `src/data/siteDetails.ts`

**Interfaces:**

- Produces: CSS custom properties for new palette, Playfair Display font import, IVenue/IGalleryImage types, updated siteDetails

- [ ] **Step 1: Update CSS custom properties in globals.css**

Replace the `:root` block in `src/app/globals.css`:

```css
:root {
  --background: #fdfbf7;
  --foreground: #1a1a1a;
  --primary: #c9a96e;
  --secondary: #1b3a2d;

  --primary-accent: #b8943d;
  --foreground-accent: #5a5a5a;
  --hero-background: #f5f0e8;
}
```

Also update the heading font-family rule to use Playfair Display:

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
}
```

Remove the `.benefit-section:last-of-type > div` rule at the bottom of the file.

- [ ] **Step 2: Update layout.tsx with Playfair Display font and metadata**

In `src/app/layout.tsx`, replace the font imports:

```tsx
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });
```

Update the body className:

```tsx
<body
  className={`${playfair.className} ${sourceSans.className} antialiased`}
>
```

Update the metadata export:

```tsx
export const metadata: Metadata = {
  title: "Yolach&apos;s Venue — Where Your Dream Event Comes to Life",
  description:
    "Elegant venue and full-service catering for weddings, birthdays, corporate events, and celebrations. Create unforgettable memories at Yolach&apos;s Venue.",
  openGraph: {
    title: "Yolach&apos;s Venue — Where Your Dream Event Comes to Life",
    description:
      "Elegant venue and full-service catering for weddings, birthdays, corporate events, and celebrations.",
    url: siteDetails.siteUrl,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Yolach&apos;s Venue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yolach&apos;s Venue — Where Your Dream Event Comes to Life",
    description:
      "Elegant venue and full-service catering for weddings, birthdays, corporate events, and celebrations.",
    images: ["/images/twitter-image.jpg"],
  },
};
```

- [ ] **Step 3: Update types.ts with new interfaces**

Add to `src/types.ts` (keep all existing types):

```typescript
export interface IVenue {
  name: string;
  capacity: number;
  imageSrc: string;
  features: string[];
}

export interface IGalleryImage {
  src: string;
  alt: string;
}
```

- [ ] **Step 4: Update siteDetails.ts**

Replace `src/data/siteDetails.ts` content:

```typescript
export const siteDetails = {
  siteName: "Yolach&apos;s Venue",
  siteUrl: "https://grandhallevents.com/",
  metadata: {
    title: "Yolach&apos;s Venue — Where Your Dream Event Comes to Life",
    description:
      "Elegant venue and full-service catering for weddings, birthdays, corporate events, and celebrations.",
  },
  language: "en-us",
  locale: "en-US",
  siteLogo: `${process.env.BASE_PATH || ""}/images/logo.png`,
  googleAnalyticsId: "",
};
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 6: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx src/types.ts src/data/siteDetails.ts
git commit -m "feat: update foundation — colors, fonts, types, site metadata for events venue"
```

---

### Task 2: Data Files — Navigation, Hero, Menu

**Files:**

- Modify: `src/data/menuItems.ts`
- Modify: `src/data/hero.ts`

**Interfaces:**

- Consumes: siteDetails from Task 1
- Produces: Updated menu items and hero data

- [ ] **Step 1: Update menuItems.ts**

Replace `src/data/menuItems.ts`:

```typescript
import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
  {
    text: "Services",
    url: "#services",
  },
  {
    text: "Venues",
    url: "#venues",
  },
  {
    text: "Gallery",
    url: "#gallery",
  },
  {
    text: "About",
    url: "#about",
  },
  {
    text: "Testimonials",
    url: "#testimonials",
  },
  {
    text: "FAQ",
    url: "#faq",
  },
  {
    text: "Contact",
    url: "#contact",
  },
];
```

- [ ] **Step 2: Update hero.ts**

Replace `src/data/hero.ts`:

```typescript
export const heroDetails = {
  heading: "Where Your Dream Event Comes to Life",
  subheading:
    "From elegant weddings to milestone celebrations, we create unforgettable experiences tailored to your vision",
  centerImageSrc: "/images/hero-venue.webp",
};
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/data/menuItems.ts src/data/hero.ts
git commit -m "feat: update navigation and hero data for events venue"
```

---

### Task 3: Header Component

**Files:**

- Modify: `src/components/Header.tsx`

**Interfaces:**

- Consumes: menuItems from Task 2, siteDetails from Task 1

- [ ] **Step 1: Update Header.tsx**

In `src/components/Header.tsx`, make these changes:

1. Replace the import of `FaFingerprint` with `FaGlassCheers`:

```tsx
import { FaGlassCheers } from "react-icons/fa";
```

2. Replace the icon in the logo section:

```tsx
<FaGlassCheers className="text-foreground min-w-fit w-7 h-7" />
```

3. Update the desktop CTA button text from "Download" to "Book Now" and link to `#booking`:

```tsx
<Link
  href="#booking"
  className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
>
  Book Now
</Link>
```

4. Update the mobile CTA button similarly:

```tsx
<Link
  href="#booking"
  className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
  onClick={toggleMenu}
>
  Book Now
</Link>
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: update Header with venue branding and Book Now CTA"
```

---

### Task 4: Hero Component

**Files:**

- Modify: `src/components/Hero.tsx`

**Interfaces:**

- Consumes: heroDetails from Task 2

- [ ] **Step 1: Rewrite Hero.tsx**

Replace `src/components/Hero.tsx` entirely:

```tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(245,240,232,0.5)] to-[rgba(245,240,232,0.5)]"></div>

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.heading}
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">
          {heroDetails.subheading}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <Link
            href="#booking"
            className="bg-primary hover:bg-primary-accent text-black px-8 py-3 rounded-full transition-colors font-semibold"
          >
            Book a Tour
          </Link>
          <Link
            href="#packages"
            className="border-2 border-primary text-foreground hover:bg-primary hover:text-black px-8 py-3 rounded-full transition-colors font-semibold"
          >
            View Packages
          </Link>
        </div>
        <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="Yolach's Venue venue"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: update Hero with venue headline and Book a Tour / View Packages CTAs"
```

---

### Task 5: Services (Rename from Benefits)

**Files:**

- Rename: `src/components/Benefits/` → `src/components/Services/`
- Rename: `src/components/Benefits/Benefits.tsx` → `src/components/Services/Services.tsx`
- Rename: `src/components/Benefits/BenefitSection.tsx` → `src/components/Services/ServiceSection.tsx`
- Rename: `src/components/Benefits/BenefitBullet.tsx` → `src/components/Services/ServiceFeature.tsx`
- Rename: `src/data/benefits.tsx` → `src/data/services.ts`

**Interfaces:**

- Produces: Services data, Services/ServiceSection/ServiceFeature components

- [ ] **Step 1: Create services data file**

Create `src/data/services.ts`:

```tsx
import {
  FiBuilding,
  FiCoffee,
  FiHeart,
  FiMic,
  FiMusic,
  FiStar,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const services: IBenefit[] = [
  {
    title: "Venue Rental",
    description:
      "Elegant spaces designed for every occasion, from grand celebrations to intimate gatherings.",
    bullets: [
      {
        title: "Grand Ballroom",
        description:
          "A stunning 5,000 sq ft space with crystal chandeliers and marble floors.",
        icon: <FiBuilding size={26} />,
      },
      {
        title: "Flexible Layouts",
        description:
          "Custom floor plans tailored to your event's unique needs and vision.",
        icon: <FiStar size={26} />,
      },
      {
        title: "All-Inclusive Amenities",
        description:
          "Tables, chairs, linens, and setup included with every rental.",
        icon: <FiHeart size={26} />,
      },
    ],
    imageSrc: "/images/service-venue.webp",
  },
  {
    title: "Catering",
    description:
      "Exquisite cuisine crafted by our award-winning culinary team to delight every palate.",
    bullets: [
      {
        title: "Custom Menus",
        description:
          "From plated dinners to buffet spreads, designed around your taste.",
        icon: <FiCoffee size={26} />,
      },
      {
        title: "Dietary Accommodations",
        description:
          "Vegetarian, vegan, gluten-free, and allergen-conscious options available.",
        icon: <FiHeart size={26} />,
      },
      {
        title: "Tastings Available",
        description:
          "Schedule a tasting to perfect your menu before the big day.",
        icon: <FiStar size={26} />,
      },
    ],
    imageSrc: "/images/service-catering.webp",
  },
  {
    title: "Event Planning & Decor",
    description:
      "Full-service coordination and stunning styling to bring your vision to life.",
    bullets: [
      {
        title: "Dedicated Planner",
        description:
          "A personal event coordinator assigned to your celebration.",
        icon: <FiHeart size={26} />,
      },
      {
        title: "Theme Design",
        description: "Custom themes, color palettes, and decor concepts.",
        icon: <FiStar size={26} />,
      },
      {
        title: "Day-Of Coordination",
        description:
          "We handle every detail so you can enjoy your event stress-free.",
        icon: <FiMic size={26} />,
      },
    ],
    imageSrc: "/images/service-planning.webp",
  },
  {
    title: "Bar Service",
    description:
      "Full bar packages featuring craft cocktails, premium wines, and curated selections.",
    bullets: [
      {
        title: "Craft Cocktails",
        description: "Signature drinks customized to match your event's theme.",
        icon: <FiCoffee size={26} />,
      },
      {
        title: "Premium Selection",
        description: "Top-shelf spirits, fine wines, and artisan beers.",
        icon: <FiStar size={26} />,
      },
      {
        title: "Professional Bartenders",
        description: "Experienced mixologists ensuring impeccable service.",
        icon: <FiMusic size={26} />,
      },
    ],
    imageSrc: "/images/service-bar.webp",
  },
  {
    title: "Lighting & Sound",
    description:
      "Professional AV setup to create the perfect atmosphere for any occasion.",
    bullets: [
      {
        title: "Ambient Lighting",
        description: "Uplighting, string lights, and custom gobo projections.",
        icon: <FiStar size={26} />,
      },
      {
        title: "Sound Systems",
        description:
          "Crystal-clear audio for speeches, music, and entertainment.",
        icon: <FiMic size={26} />,
      },
      {
        title: "Dance Floor Setup",
        description: "LED dance floors and DJ booth configurations.",
        icon: <FiMusic size={26} />,
      },
    ],
    imageSrc: "/images/service-lighting.webp",
  },
  {
    title: "Floral Arrangements",
    description:
      "Stunning centerpieces and venue florals designed by our talented floral artists.",
    bullets: [
      {
        title: "Custom Bouquets",
        description: "Bridal bouquets, boutonnieres, and corsages.",
        icon: <FiHeart size={26} />,
      },
      {
        title: "Table Centerpieces",
        description: "Elegant arrangements that complement your decor.",
        icon: <FiStar size={26} />,
      },
      {
        title: "Venue Florals",
        description:
          "Arch installations, aisle decor, and entrance arrangements.",
        icon: <FiBuilding size={26} />,
      },
    ],
    imageSrc: "/images/service-floral.webp",
  },
];
```

- [ ] **Step 2: Rename Benefits folder to Services**

Run:

```bash
git mv src/components/Benefits src/components/Services
git mv src/components/Services/Benefits.tsx src/components/Services/Services.tsx
git mv src/components/Services/BenefitSection.tsx src/components/Services/ServiceSection.tsx
git mv src/components/Services/BenefitBullet.tsx src/components/Services/ServiceFeature.tsx
git mv src/data/benefits.tsx src/data/services.ts
```

- [ ] **Step 3: Update Services.tsx**

In `src/components/Services/Services.tsx`, make these changes:

1. Update import of ServiceSection:

```tsx
import ServiceSection from "./ServiceSection";
```

2. Update data import:

```tsx
import { services } from "@/data/services";
```

3. Rename the component and update references:

```tsx
const Services: React.FC = () => {
  return (
    <div id="services">
      <h2 className="sr-only">Services</h2>
      {services.map((item, index) => {
        return (
          <ServiceSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        );
      })}
    </div>
  );
};

export default Services;
```

- [ ] **Step 4: Update ServiceSection.tsx**

In `src/components/Services/ServiceSection.tsx`, make these changes:

1. Update import of ServiceFeature:

```tsx
import ServiceFeature from "./ServiceFeature";
```

2. Rename the component from `BenefitSection` to `ServiceSection`:

```tsx
const ServiceSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
```

3. Update the class name on the section element:

```tsx
<section className="service-section">
```

4. Update the bullet mapping to use `ServiceFeature`:

```tsx
{
  bullets.map((item, index) => (
    <ServiceFeature
      key={index}
      title={item.title}
      icon={item.icon}
      description={item.description}
    />
  ));
}
```

5. Update the export:

```tsx
export default ServiceSection;
```

- [ ] **Step 5: Update ServiceFeature.tsx**

In `src/components/Services/ServiceFeature.tsx`, make these changes:

1. Update the import from BenefitSection to ServiceSection:

```tsx
import { childVariants } from "./ServiceSection";
```

2. Rename the component:

```tsx
const ServiceFeature: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
```

3. Update the export:

```tsx
export default ServiceFeature;
```

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: rename Benefits to Services with venue service content"
```

---

### Task 6: Venues Section (New Component)

**Files:**

- Create: `src/data/venues.ts`
- Create: `src/components/Venues.tsx`

**Interfaces:**

- Produces: Venues data, Venues component

- [ ] **Step 1: Create venues data**

Create `src/data/venues.ts`:

```typescript
import { IVenue } from "@/types";

export const venues: IVenue[] = [
  {
    name: "The Grand Ballroom",
    capacity: 300,
    imageSrc: "/images/venue-ballroom.webp",
    features: [
      "Crystal chandeliers and marble floors",
      "Built-in stage for entertainment",
      "Full bar and catering kitchen",
      "ADA accessible",
    ],
  },
  {
    name: "Garden Terrace",
    capacity: 150,
    imageSrc: "/images/venue-terrace.webp",
    features: [
      "Covered outdoor pavilion",
      "String lights and garden views",
      "Perfect for cocktail receptions",
      "Rain-or-shine guarantee",
    ],
  },
  {
    name: "The Intimate Lounge",
    capacity: 50,
    imageSrc: "/images/venue-lounge.webp",
    features: [
      "Cozy fireplace ambiance",
      "Ideal for rehearsal dinners",
      "Private bar area",
      "Elegant lounge seating",
    ],
  },
];
```

- [ ] **Step 2: Create Venues component**

Create `src/components/Venues.tsx`:

```tsx
import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { venues } from "@/data/venues";

const Venues: React.FC = () => {
  return (
    <section id="venues" className="py-10 lg:py-20">
      <div className="text-center mb-12">
        <SectionTitle>
          <h2 className="my-3 !leading-snug">Our Venue Spaces</h2>
        </SectionTitle>
        <p className="text-foreground-accent max-w-2xl mx-auto mt-4">
          Three distinct spaces designed to match the scale and style of any
          celebration
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {venues.map((venue, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            <div className="relative h-56 w-full">
              <Image
                src={venue.imageSrc}
                alt={venue.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-secondary">
                  {venue.name}
                </h3>
                <span className="text-sm bg-primary/20 text-secondary px-3 py-1 rounded-full font-medium">
                  Up to {venue.capacity}
                </span>
              </div>
              <ul className="space-y-2">
                {venue.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-foreground-accent text-sm flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Venues;
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/data/venues.ts src/components/Venues.tsx
git commit -m "feat: add Venues section component with 3 venue spaces"
```

---

### Task 7: Gallery Section (Replaces Logos)

**Files:**

- Create: `src/data/gallery.ts`
- Create: `src/components/Gallery.tsx`
- Delete: `src/components/Logos.tsx`

**Interfaces:**

- Produces: Gallery data, Gallery component

- [ ] **Step 1: Create gallery data**

Create `src/data/gallery.ts`:

```typescript
import { IGalleryImage } from "@/types";

export const galleryImages: IGalleryImage[] = [
  { src: "/images/gallery-1.webp", alt: "Elegant wedding reception setup" },
  { src: "/images/gallery-2.webp", alt: "Grand Ballroom with chandeliers" },
  { src: "/images/gallery-3.webp", alt: "Garden Terrace evening event" },
  { src: "/images/gallery-4.webp", alt: "Beautiful floral centerpieces" },
  { src: "/images/gallery-5.webp", alt: "Corporate gala dinner" },
  { src: "/images/gallery-6.webp", alt: "Birthday celebration decor" },
  { src: "/images/gallery-7.webp", alt: "Cocktail hour on the terrace" },
  { src: "/images/gallery-8.webp", alt: "Dance floor and lighting" },
  { src: "/images/gallery-9.webp", alt: "Intimate lounge rehearsal dinner" },
];
```

- [ ] **Step 2: Create Gallery component**

Create `src/components/Gallery.tsx`:

```tsx
import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { galleryImages } from "@/data/gallery";

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-10 lg:py-20">
      <div className="text-center mb-12">
        <SectionTitle>
          <h2 className="my-3 !leading-snug">Our Gallery</h2>
        </SectionTitle>
        <p className="text-foreground-accent max-w-2xl mx-auto mt-4">
          A glimpse into the unforgettable events we&apos;ve had the honor of
          hosting
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
```

- [ ] **Step 3: Delete Logos.tsx**

Run:

```bash
git rm src/components/Logos.tsx
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds (Logos is no longer imported in page.tsx — will be fixed in Task 14)

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Gallery section, remove Logos component"
```

---

### Task 8: Packages (Rename from Pricing)

**Files:**

- Rename: `src/components/Pricing/` → `src/components/Packages/`
- Rename: `src/components/Pricing/Pricing.tsx` → `src/components/Packages/Packages.tsx`
- Rename: `src/components/Pricing/PricingColumn.tsx` → `src/components/Packages/PackageColumn.tsx`
- Rename: `src/data/pricing.ts` → `src/data/packages.ts`

**Interfaces:**

- Produces: Packages data and components

- [ ] **Step 1: Create packages data**

Create `src/data/packages.ts`:

```typescript
import { IPricing } from "@/types";

export const packages: IPricing[] = [
  {
    name: "Silver",
    price: "$2,500",
    features: [
      "Venue rental for 4 hours",
      "Basic tables and chairs",
      "Standard sound system",
      "Setup and cleanup included",
      "On-site event coordinator",
      "Parking for 50 vehicles",
    ],
  },
  {
    name: "Gold",
    price: "$5,000",
    features: [
      "Venue rental for 6 hours",
      "Premium tables, chairs, and linens",
      "Catering for up to 100 guests",
      "Full bar service",
      "Floral centerpieces",
      "Custom lighting design",
      "Dedicated event planner",
      "Valet parking",
    ],
  },
  {
    name: "Platinum",
    price: "$8,500",
    features: [
      "Venue rental for 8 hours",
      "Luxury decor and furnishings",
      "Premium catering for up to 200 guests",
      "Top-shelf bar with craft cocktails",
      "Full floral design and installation",
      "Professional lighting and sound",
      "Live music or DJ included",
      "Custom cake and dessert table",
      "Photography coordination",
      "Complimentary bridal suite",
    ],
  },
];
```

- [ ] **Step 2: Rename Pricing to Packages**

Run:

```bash
git mv src/components/Pricing src/components/Packages
git mv src/components/Packages/Pricing.tsx src/components/Packages/Packages.tsx
git mv src/components/Packages/PricingColumn.tsx src/components/Packages/PackageColumn.tsx
git mv src/data/pricing.ts src/data/packages.ts
```

- [ ] **Step 3: Update Packages.tsx**

In `src/components/Packages/Packages.tsx`, update to:

```tsx
import PackageColumn from "./PackageColumn";

import { packages } from "@/data/packages";

const Packages: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <PackageColumn key={pkg.name} tier={pkg} highlight={index === 1} />
      ))}
    </div>
  );
};

export default Packages;
```

- [ ] **Step 4: Update PackageColumn.tsx**

In `src/components/Packages/PackageColumn.tsx`, make these changes:

1. Update the button text from "Get Started" to "Inquire Now":

```tsx
<button
  className={clsx("w-full py-3 px-4 rounded-full transition-colors", {
    "bg-primary hover:bg-primary-accent": highlight,
    "bg-hero-background hover:bg-gray-200": !highlight,
  })}
>
  Inquire Now
</button>
```

2. Add a link wrapper around the button to go to `#booking`:

```tsx
<a href="#booking">
  <button
    className={clsx("w-full py-3 px-4 rounded-full transition-colors", {
      "bg-primary hover:bg-primary-accent": highlight,
      "bg-hero-background hover:bg-gray-200": !highlight,
    })}
  >
    Inquire Now
  </button>
</a>
```

3. Remove the "/mo" suffix from the price display since packages are one-time, not monthly. Replace the price paragraph:

```tsx
<p className="text-3xl md:text-5xl font-bold mb-6">
  <span className={clsx({ "text-secondary": highlight })}>
    {typeof price === "number" ? `$${price.toLocaleString()}` : price}
  </span>
</p>
```

4. Update the "FEATURES" section heading and subtext:

```tsx
<p className="font-bold mb-0">WHAT&apos;S INCLUDED</p>
<p className="text-foreground-accent mb-5">Everything you need for a perfect event.</p>
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: rename Pricing to Packages with venue package tiers"
```

---

### Task 9: About Section (New Component)

**Files:**

- Create: `src/data/about.ts`
- Create: `src/components/About.tsx`

**Interfaces:**

- Produces: About data, About component

- [ ] **Step 1: Create about data**

Create `src/data/about.ts`:

```typescript
export const aboutDetails = {
  headline: "Crafting Unforgettable Moments Since 2010",
  story:
    "Yolach&apos;s Venue was born from a simple belief: every celebration deserves a extraordinary setting. What started as a family-owned venue has grown into one of the region's most beloved event destinations, hosting over 500 celebrations from fairy-tale weddings to landmark corporate galas.",
  mission:
    "Our mission is to transform your vision into reality with meticulous attention to detail, warm hospitality, and a commitment to excellence that shows in every petal, every plate, and every perfectly timed moment of your event.",
  imageSrc: "/images/about.webp",
};
```

- [ ] **Step 2: Create About component**

Create `src/components/About.tsx`:

```tsx
import React from "react";
import Image from "next/image";
import { aboutDetails } from "@/data/about";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="lg:w-1/2">
          <SectionTitle>
            <h2 className="my-3 !leading-snug text-center lg:text-left">
              {aboutDetails.headline}
            </h2>
          </SectionTitle>
          <p className="mt-6 text-foreground-accent leading-relaxed">
            {aboutDetails.story}
          </p>
          <p className="mt-4 text-foreground-accent leading-relaxed">
            {aboutDetails.mission}
          </p>
        </div>
        <div className="lg:w-1/2 relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden">
          <Image
            src={aboutDetails.imageSrc}
            alt="Yolach's Venue venue"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default About;
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/data/about.ts src/components/About.tsx
git commit -m "feat: add About section with business story and mission"
```

---

### Task 10: Testimonials & Stats Data Updates

**Files:**

- Modify: `src/data/testimonials.ts`
- Modify: `src/data/stats.tsx`

**Interfaces:**

- Produces: Updated testimonials and stats data

- [ ] **Step 1: Update testimonials data**

Replace `src/data/testimonials.ts`:

```typescript
import { ITestimonial } from "@/types";

export const testimonials: ITestimonial[] = [
  {
    name: "Sarah & Michael Thompson",
    role: "Wedding — June 2025",
    message:
      "Our wedding at Grand Hall was absolutely perfect. Every detail was taken care of with such care and precision. The ballroom looked like something out of a fairy tale, and our guests are still raving about the food!",
    avatar: "/images/testimonial-1.webp",
  },
  {
    name: "David Chen",
    role: "Corporate Client",
    message:
      "We have hosted our annual company gala at Yolach&apos;s Venue for three years running. The professionalism of their team and the quality of the venue is unmatched. They make planning effortless.",
    avatar: "/images/testimonial-2.webp",
  },
  {
    name: "Lisa Martinez",
    role: "Event Planner",
    message:
      "As an event planner, I've worked with dozens of venues. Yolach&apos;s Venue stands out for their flexibility, attention to detail, and genuine passion for making every event extraordinary.",
    avatar: "/images/testimonial-3.webp",
  },
];
```

- [ ] **Step 2: Update stats data**

Replace `src/data/stats.tsx`:

```tsx
import { FaCalendarCheck, FaHeart, FaAward } from "react-icons/fa";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "500+ Events Hosted",
    icon: <FaCalendarCheck className="text-primary" />,
    description:
      "From intimate gatherings to grand celebrations, we bring dreams to life.",
  },
  {
    title: "10,000+ Happy Guests",
    icon: <FaHeart className="text-primary" />,
    description:
      "Memories created that last a lifetime for our clients and their loved ones.",
  },
  {
    title: "15+ Years Experience",
    icon: <FaAward className="text-primary" />,
    description:
      "Trusted by families and businesses to deliver exceptional events.",
  },
];
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/data/testimonials.ts src/data/stats.tsx
git commit -m "feat: update Testimonials and Stats with venue content"
```

---

### Task 11: FAQ Data & Component Update

**Files:**

- Modify: `src/data/faq.ts`
- Modify: `src/components/FAQ.tsx`

**Interfaces:**

- Produces: Updated FAQ data

- [ ] **Step 1: Update FAQ data**

Replace `src/data/faq.ts`:

```typescript
import { IFAQ } from "@/types";

export const faqs: IFAQ[] = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 6-12 months in advance for weddings and large events, and 3-6 months for smaller celebrations. Popular dates fill up quickly, so the earlier you reach out, the better your chances of securing your preferred date.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes, we require a 30% deposit to reserve your date, with the remaining balance due two weeks before your event. We also offer flexible payment plans for larger events.",
  },
  {
    question: "Can I bring my own caterer?",
    answer:
      "We offer in-house catering as part of our packages for the best experience and pricing. However, we do allow external caterers for select packages with prior arrangement.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Absolutely! Our culinary team is experienced in preparing vegetarian, vegan, gluten-free, and allergen-conscious menus. Simply let us know your requirements during the planning process.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer a full refund for cancellations made 90 or more days before the event, and a partial refund for cancellations 60-89 days out. We also offer date rescheduling options.",
  },
  {
    question: "Can I customize my package?",
    answer:
      "Yes! Every package can be tailored to your specific needs. During your consultation, we will work with you to add, remove, or modify any elements to create your perfect event.",
  },
];
```

- [ ] **Step 2: Update FAQ component email**

In `src/components/FAQ.tsx`, update the hardcoded email from `help@finwise.com` to `info@yollachsvenue.com.com`:

```tsx
<a
  href="mailto:info@yollachsvenue.com.com"
  className="mt-3 block text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left"
>
  info@yollachsvenue.com.com
</a>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/data/faq.ts src/components/FAQ.tsx
git commit -m "feat: update FAQ with venue-related booking questions"
```

---

### Task 12: BookingContact Section (Replaces CTA)

**Files:**

- Create: `src/data/booking.ts`
- Create: `src/components/BookingContact.tsx`
- Delete: `src/components/CTA.tsx`
- Delete: `src/data/cta.ts`

**Interfaces:**

- Produces: Booking data, BookingContact component

- [ ] **Step 1: Create booking data**

Create `src/data/booking.ts`:

```typescript
export const bookingDetails = {
  headline: "Ready to Start Planning?",
  subheading:
    "Fill out the form below and our events team will get back to you within 24 hours.",
  address: "123 Celebration Avenue, Suite 100, Springfield, IL 62701",
  phone: "(555) 123-4567",
  email: "info@yollachsvenue.com.com",
  hours: [
    "Monday - Friday: 9:00 AM - 6:00 PM",
    "Saturday: 10:00 AM - 4:00 PM",
    "Sunday: By appointment only",
  ],
};
```

- [ ] **Step 2: Create BookingContact component**

Create `src/components/BookingContact.tsx`:

```tsx
"use client";

import React, { useState } from "react";
import { bookingDetails } from "@/data/booking";
import SectionTitle from "./SectionTitle";

const BookingContact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-10 lg:py-20">
      <div className="text-center mb-12">
        <SectionTitle>
          <h2 className="my-3 !leading-snug">{bookingDetails.headline}</h2>
        </SectionTitle>
        <p className="text-foreground-accent max-w-2xl mx-auto mt-4">
          {bookingDetails.subheading}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form */}
        <div className="lg:w-2/3">
          {submitted ? (
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-10 text-center">
              <h3 className="text-2xl font-semibold text-secondary mb-3">
                Thank You!
              </h3>
              <p className="text-foreground-accent">
                Your inquiry has been received. Our events team will be in touch
                within 24 hours to discuss your celebration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="graduation">Graduation</option>
                    <option value="holiday">Holiday Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your dream event..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-accent text-black px-8 py-3 rounded-full transition-colors font-semibold"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Contact Details */}
        <div id="contact" className="lg:w-1/3">
          <div className="bg-hero-background rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Contact Information
            </h3>
            <div className="space-y-4 text-foreground-accent">
              <p>
                <strong className="text-foreground">Address:</strong>
                <br />
                {bookingDetails.address}
              </p>
              <p>
                <strong className="text-foreground">Phone:</strong>
                <br />
                <a
                  href={`tel:${bookingDetails.phone.replace(/\D/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {bookingDetails.phone}
                </a>
              </p>
              <p>
                <strong className="text-foreground">Email:</strong>
                <br />
                <a
                  href={`mailto:${bookingDetails.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {bookingDetails.email}
                </a>
              </p>
              <div>
                <strong className="text-foreground">Hours:</strong>
                <ul className="mt-1 space-y-1">
                  {bookingDetails.hours.map((hour, i) => (
                    <li key={i}>{hour}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-foreground-accent text-sm">
              Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContact;
```

- [ ] **Step 3: Delete old CTA files**

Run:

```bash
git rm src/components/CTA.tsx
git rm src/data/cta.ts
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds (BookingContact not yet imported in page.tsx — fixed in Task 14)

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add BookingContact section with inquiry form and contact details"
```

---

### Task 13: Footer Update

**Files:**

- Modify: `src/data/footer.ts`
- Modify: `src/components/Footer.tsx`

**Interfaces:**

- Consumes: siteDetails from Task 1
- Produces: Updated footer

- [ ] **Step 1: Update footer data**

Replace `src/data/footer.ts`:

```typescript
import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Creating unforgettable events with elegance, warmth, and attention to detail.",
  quickLinks: [
    {
      text: "Services",
      url: "#services",
    },
    {
      text: "Venues",
      url: "#venues",
    },
    {
      text: "Gallery",
      url: "#gallery",
    },
    {
      text: "About",
      url: "#about",
    },
    {
      text: "Testimonials",
      url: "#testimonials",
    },
    {
      text: "FAQ",
      url: "#faq",
    },
    {
      text: "Contact",
      url: "#contact",
    },
  ],
  email: "info@yollachsvenue.com.com",
  telephone: "(555) 123-4567",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com",
  },
};
```

- [ ] **Step 2: Update Footer.tsx**

In `src/components/Footer.tsx`, replace the FaFingerprint import:

```tsx
import { FaGlassCheers } from "react-icons/fa";
```

Update the icon in the logo section:

```tsx
<FaGlassCheers className="min-w-fit w-5 h-5 md:w-7 md:h-7" />
```

Remove the Nexi Launch and Youthmind credit lines. Replace with:

```tsx
<p className="text-sm mt-2 text-gray-500">
  &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
</p>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/data/footer.ts src/components/Footer.tsx
git commit -m "feat: update Footer with venue links, contact, and branding"
```

---

### Task 14: Page Composition & Cleanup

**Files:**

- Modify: `src/app/page.tsx`
- Delete: `src/components/AppStoreButton.tsx`
- Delete: `src/components/PlayStoreButton.tsx`
- Delete: `src/data/benefits.tsx` (if still exists after rename)

**Interfaces:**

- Consumes: All components from previous tasks

- [ ] **Step 1: Rewrite page.tsx**

Replace `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";
import Services from "@/components/Services/Services";
import Venues from "@/components/Venues";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages/Packages";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import BookingContact from "@/components/BookingContact";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Services />
        <Venues />
      </Container>
      <Gallery />
      <Container>
        <Section
          id="packages"
          title="Our Packages"
          description="Flexible packages to suit every celebration and budget."
        >
          <Packages />
        </Section>

        <About />

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have celebrated with us."
        >
          <Testimonials />
        </Section>

        <Stats />

        <FAQ />

        <BookingContact />
      </Container>
    </>
  );
};

export default HomePage;
```

- [ ] **Step 2: Delete unused files**

Run:

```bash
git rm src/components/AppStoreButton.tsx
git rm src/components/PlayStoreButton.tsx
```

Check if `src/data/benefits.tsx` still exists (it was renamed in Task 5). If it does:

```bash
git rm src/data/benefits.tsx
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors or warnings about missing imports

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: No errors

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: update page composition and remove unused components"
```

---

### Task 15: Final Verification

- [ ] **Step 1: Full build check**

Run: `npm run build`
Expected: Clean build, no errors

- [ ] **Step 2: Lint check**

Run: `npm run lint`
Expected: No errors

- [ ] **Step 3: Verify no fintech references remain**

Search for any remaining "Finwise", "financial", "budgeting", "investing" references:

```bash
rg -i "finwise\|financial\|budgeting\|investing\|app store\|play store" src/
```

Expected: No results

- [ ] **Step 4: Verify all sections render**

Run: `npm run dev`
Expected: Dev server starts, all sections visible on the landing page

- [ ] **Step 5: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "chore: final verification and cleanup"
```
