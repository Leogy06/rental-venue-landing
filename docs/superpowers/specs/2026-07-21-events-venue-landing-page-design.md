# Events Venue & Catering Landing Page — Design Spec

## Overview

Transform the existing FinWise fintech landing page template into an elegant, inviting landing page for an events venue and catering business. The business hosts weddings, birthdays, corporate events, and other celebrations, offering full-service event solutions.

**Business Name:** "Yolach&apos;s Venue" (placeholder)
**Visual Mood:** Elegant & luxurious — warm golds, deep forest greens, serif typography
**Approach:** Content swap + component adaptation (reuse existing architecture, replace content)

---

## Site Structure (Top to Bottom)

1. **Header** — Logo + navigation + "Book Now" CTA
2. **Hero** — Full-width venue image, headline, dual CTAs
3. **Services** — 6 service cards in a grid
4. **Venues** — 3 venue space showcases
5. **Gallery** — Photo grid of past events
6. **Packages** — 3 pricing tiers
7. **About** — Business story and mission
8. **Testimonials** — 3 client reviews
9. **Stats** — Key business numbers
10. **FAQ** — Common booking questions
11. **Booking/Contact** — Inquiry form + contact details
12. **Footer** — Links, contact, social media

---

## Visual Design

### Color Palette

| Token                 | Value     | Usage                                         |
| --------------------- | --------- | --------------------------------------------- |
| `--primary`           | `#C9A96E` | Warm gold — buttons, accents, highlights      |
| `--primary-accent`    | `#B8943D` | Deeper gold — hover states                    |
| `--secondary`         | `#1B3A2D` | Deep forest green — headings, strong elements |
| `--foreground`        | `#1A1A1A` | Near-black — body text                        |
| `--foreground-accent` | `#5A5A5A` | Warm gray — secondary text                    |
| `--background`        | `#FDFBF7` | Warm white — page background                  |
| `--hero-background`   | `#F5F0E8` | Cream — hero/section backgrounds              |

### Typography

- **Headings:** Playfair Display (elegant serif) — replaces Manrope for h1-h6
- **Body:** Source Sans 3 (already in project) — clean and readable
- Import Playfair Display via `next/font/google` in `layout.tsx`

---

## Component Mapping

### Header (`src/components/Header.tsx`)

**Changes:**

- Replace `FaFingerprint` icon with `FaGlassCheers` (celebration/venue theme)
- Update `siteDetails.siteName` to "Yolach&apos;s Venue"
- Nav items (from `menuItems.ts`): Home (`#hero`), Services (`#services`), Venues (`#venues`), Gallery (`#gallery`), About (`#about`), Testimonials (`#testimonials`), FAQ (`#faq`), Contact (`#contact`)
- CTA button text: "Book Now" → links to `#booking`
- Keep mobile hamburger behavior with HeadlessUI Transition

### Hero (`src/components/Hero.tsx`)

**Changes:**

- Remove `AppStoreButton` and `PlayStoreButton` imports entirely
- Replace with two styled buttons: "Book a Tour" (primary gold) and "View Packages" (outline/secondary)
- Headline: "Where Your Dream Event Comes to Life"
- Subheading: "From elegant weddings to milestone celebrations, we create unforgettable experiences tailored to your vision"
- Background: placeholder venue image (`/images/hero-venue.webp`)
- Keep the grid pattern background and gradient overlay, update colors to match new palette

### Benefits → Services (`src/components/Benefits/` → `src/components/Services/`)

**Rename folder** from `Benefits/` to `Services/`.
**Rename files:** `Benefits.tsx` → `Services.tsx`, `BenefitSection.tsx` → `ServiceSection.tsx`, `BenefitBullet.tsx` → `ServiceFeature.tsx`

**Changes:**

- Update `IBenefit` type to `IService` (or keep type name, update data)
- Replace financial features with 6 venue services:
  1. **Venue Rental** — `FaBuilding` icon — Elegant spaces for every occasion
  2. **Catering** — `FaUtensils` icon — Custom menus from plated dinners to buffet spreads
  3. **Bar Service** — `FaWineGlass` icon — Full bar packages with craft cocktails
  4. **Event Planning & Decor** — `FaPaintBrush` icon — Full-service coordination and styling
  5. **Lighting & Sound** — `FaLightbulb` icon — Professional AV setup for any atmosphere
  6. **Floral Arrangements** — `FaLeaf` icon — Stunning centerpieces and venue florals
- Keep the alternating layout pattern (image + bullet points per service)
- Replace mockup images with placeholder venue images

### New: Venues Section

**New component:** `src/components/Venues.tsx`
**New data file:** `src/data/venues.ts`

**Content — 3 venue spaces:**

1. **The Grand Ballroom** — Up to 300 guests, crystal chandeliers, marble floors, built-in stage
2. **Garden Terrace** — Up to 150 guests, outdoor covered space, string lights, garden views
3. **The Intimate Lounge** — Up to 50 guests, cozy fireplace, perfect for rehearsal dinners

**Layout:** 3-column card grid, each card has: venue image, name, capacity badge, 3-4 feature highlights, "Learn More" link

### Gallery (replaces Logos)

**New component:** `src/components/Gallery.tsx` (replaces `Logos.tsx`)
**New data file:** `src/data/gallery.ts`

**Layout:** Responsive grid (3 columns desktop, 2 tablet, 1 mobile) of 6-9 placeholder images
**Interaction:** Subtle hover zoom effect (scale 1.05)
**Images:** Placeholder venue/event images at `/images/gallery-1.webp` through `/images/gallery-9.webp`

### Pricing → Packages (`src/components/Pricing/`)

**Changes:**

- Rename to `Packages/` folder
- Update `IPricing` type fields or keep as-is (name, price, features works)
- 3 tiers:
  - **Silver Package** ($2,500) — Venue rental (4 hrs), basic tables & chairs, sound system, setup/cleanup
  - **Gold Package** ($5,000) — Everything in Silver + catering for 100, bar service, floral centerpieces, lighting
  - **Platinum Package** ($8,500) — Everything in Gold + full planning, premium catering for 200, live music, custom decor
- Highlight Gold as "Most Popular"
- CTA button on each card: "Inquire Now" → links to `#booking`

### New: About Section

**New component:** `src/components/About.tsx`
**New data file:** `src/data/about.ts`

**Layout:** Split layout — text on left, image on right
**Content:**

- Headline: "Crafting Unforgettable Moments Since 2010"
- Story paragraph about the business's passion for creating perfect events
- Mission statement
- Key differentiator: personal attention to every client
- Placeholder image of the venue/team

### Testimonials (`src/components/Testimonials.tsx`)

**Changes:**

- Keep the same 3-column layout with avatars
- Update content to venue-related reviews:
  1. **Sarah & Michael** — "Our wedding at Grand Hall was absolutely perfect..." (Bride & Groom)
  2. **David Chen** — "We've hosted our company gala here for 3 years running..." (Corporate Client)
  3. **Lisa Martinez** — "They turned my daughter's quinceañera into a fairy tale..." (Event Planner)
- Update avatar images to placeholder images

### Stats (`src/components/Stats.tsx`)

**Changes:**

- Update to venue-relevant stats:
  1. **500+ Events Hosted** — `FaCalendarCheck` icon — "From intimate gatherings to grand celebrations"
  2. **10,000+ Happy Guests** — `FaHeart` icon — "Memories created that last a lifetime"
  3. **15+ Years Experience** — `FaAward` icon — "Trusted by families and businesses alike"

### FAQ (`src/components/FAQ.tsx`)

**Changes:**

- Update questions to venue-related:
  1. "How far in advance should I book?" — Recommend 6-12 months for weddings, 3-6 for other events
  2. "Do you require a deposit?" — 30% deposit to reserve, balance due 2 weeks before event
  3. "Can I bring my own caterer?" — In-house catering preferred, external options available for select packages
  4. "Do you accommodate dietary restrictions?" — Yes, vegetarian, vegan, gluten-free, allergen-conscious menus
  5. "What's your cancellation policy?" — Full refund 90+ days out, partial refund 60-89 days
  6. "Can I customize my package?" — Yes, every package can be tailored to your needs
- Update email to `info@yollachsvenue.com.com`

### Booking/Contact (replaces CTA)

**New component:** `src/components/BookingContact.tsx` (replaces `CTA.tsx`)
**New data file:** `src/data/booking.ts`

**Layout:** Two-column section

- **Left column — Inquiry Form:**
  - Full Name (text input)
  - Email (email input)
  - Phone (tel input)
  - Event Type (select: Wedding, Birthday, Corporate Event, Anniversary, Baby Shower, Graduation, Holiday Party, Other)
  - Preferred Date (date input)
  - Number of Guests (number input)
  - Additional Details (textarea)
  - "Send Inquiry" submit button (gold primary)
  - Client-side only: on submit, show a success message ("Thank you! We'll be in touch within 24 hours.") — no backend integration
  - Basic validation: required fields, email format, phone format
- **Right column — Contact Details:**
  - Address: 123 Celebration Avenue, Suite 100, Springfield, IL 62701
  - Phone: (555) 123-4567
  - Email: info@yollachsvenue.com.com
  - Hours: Mon-Fri 9am-6pm, Sat 10am-4pm, Sun by appointment
  - Small placeholder map image

### Footer (`src/components/Footer.tsx`)

**Changes:**

- Update quick links to match new nav: Services, Venues, Gallery, About, Testimonials, FAQ, Contact
- Update subheading: "Creating unforgettable events with elegance, warmth, and attention to detail."
- Update contact info to match booking section
- Update social media links (keep same platforms)
- Remove Nexi Launch / Youthmind credits, add: "© 2026 Yolach&apos;s Venue. All rights reserved."

---

## Data Files to Modify

| File                                    | Action                          |
| --------------------------------------- | ------------------------------- |
| `src/data/siteDetails.ts`               | Update name, URL, metadata      |
| `src/data/hero.ts`                      | New headline, subheading, image |
| `src/data/menuItems.ts`                 | New nav items                   |
| `src/data/benefits.tsx` → `services.ts` | New service content             |
| `src/data/faq.ts`                       | New venue-related FAQs          |
| `src/data/footer.ts`                    | New links, contact, subheading  |
| `src/data/cta.ts` → remove or replace   | Replaced by booking section     |
| `src/data/testimonials.ts`              | New venue client reviews        |
| `src/data/stats.tsx`                    | New venue stats                 |
| `src/data/pricing.ts` → `packages.ts`   | New package tiers               |

## New Files to Create

| File                                | Purpose                   |
| ----------------------------------- | ------------------------- |
| `src/data/venues.ts`                | Venue space data          |
| `src/data/gallery.ts`               | Gallery image data        |
| `src/data/about.ts`                 | About section content     |
| `src/data/booking.ts`               | Booking section content   |
| `src/components/Venues.tsx`         | Venues section component  |
| `src/components/Gallery.tsx`        | Gallery section component |
| `src/components/About.tsx`          | About section component   |
| `src/components/BookingContact.tsx` | Booking form + contact    |

## Types to Update (`src/types.ts`)

- Add `IVenue` interface: `{ name: string; capacity: number; imageSrc: string; features: string[] }`
- Add `IGalleryImage` interface: `{ src: string; alt: string }`
- Add `IAbout` interface: `{ headline: string; story: string; mission: string; imageSrc: string }`
- Keep existing: `IMenuItem`, `IFAQ`, `ITestimonial`, `IStats`, `ISocials`, `IPricing` (reuse for packages)

## Files to Delete

| File                                 | Reason                    |
| ------------------------------------ | ------------------------- |
| `src/components/AppStoreButton.tsx`  | Not needed for venue site |
| `src/components/PlayStoreButton.tsx` | Not needed for venue site |
| `src/components/Logos.tsx`           | Replaced by Gallery       |

## CSS Changes (`src/app/globals.css`)

- Update CSS custom properties with new color values
- Update font-family references (Playfair Display for headings)
- Remove `.benefit-section` styles, add `.service-section` if needed

## Layout Changes (`src/app/layout.tsx`)

- Import Playfair Display font from `next/font/google`
- Update font classes to use Playfair Display for headings
- Update metadata title/description

## Page Composition (`src/app/page.tsx`)

```tsx
<Hero />
<Services />
<Venues />
<Container>
  <Gallery />
  <Packages />
  <About />
  <Section id="testimonials" title="What Our Clients Say">
    <Testimonials />
  </Section>
  <Stats />
  <FAQ />
  <BookingContact />
</Container>
```

## Placeholder Images

All images will use placeholder paths in `/public/images/`:

- `hero-venue.webp` — Hero background
- `service-1.webp` through `service-6.webp` — Service section images
- `venue-ballroom.webp`, `venue-terrace.webp`, `venue-lounge.webp` — Venue cards
- `gallery-1.webp` through `gallery-9.webp` — Gallery grid
- `about.webp` — About section
- `testimonial-1.webp` through `testimonial-3.webp` — Reuse existing (or new placeholders)

Note: Actual images are not included in this spec. Placeholder paths are defined; the user will supply real images.

---

## Success Criteria

1. The landing page feels inviting and luxurious — a potential booker should feel confident the venue can handle their event
2. All sections are content-complete with realistic placeholder text
3. The booking form is functional (client-side validation, form state management)
4. Responsive design works on mobile, tablet, and desktop
5. Smooth scroll navigation between sections
6. Consistent gold/green color scheme throughout
7. Playfair Display serif headings give an elegant feel
8. No references to the original FinWise/fintech content remain
