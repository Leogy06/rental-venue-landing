# Venues Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a Venues section component displaying 3 venue spaces with their details and features.

**Architecture:** Add a new data file for venue information and a React component to render venue cards in a responsive grid layout.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS

## Global Constraints

- Follow existing code patterns and conventions
- Use Next.js Image component for images
- Maintain consistent styling with other components
- Do not import Venues component in page.tsx (Task 14 handles page composition)

---

### Task 6: Venues Section

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
            "ADA accessible"
        ]
    },
    {
        name: "Garden Terrace",
        capacity: 150,
        imageSrc: "/images/venue-terrace.webp",
        features: [
            "Covered outdoor pavilion",
            "String lights and garden views",
            "Perfect for cocktail receptions",
            "Rain-or-shine guarantee"
        ]
    },
    {
        name: "The Intimate Lounge",
        capacity: 50,
        imageSrc: "/images/venue-lounge.webp",
        features: [
            "Cozy fireplace ambiance",
            "Ideal for rehearsal dinners",
            "Private bar area",
            "Elegant lounge seating"
        ]
    },
];
```

- [ ] **Step 2: Create Venues component**

Create `src/components/Venues.tsx`:

```tsx
import React from 'react';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { venues } from '@/data/venues';

const Venues: React.FC = () => {
    return (
        <section id="venues" className="py-10 lg:py-20">
            <div className="text-center mb-12">
                <SectionTitle>
                    <h2 className="my-3 !leading-snug">Our Venue Spaces</h2>
                </SectionTitle>
                <p className="text-foreground-accent max-w-2xl mx-auto mt-4">
                    Three distinct spaces designed to match the scale and style of any celebration
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {venues.map((venue, index) => (
                    <div key={index} className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
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
                                <h3 className="text-xl font-semibold text-secondary">{venue.name}</h3>
                                <span className="text-sm bg-primary/20 text-secondary px-3 py-1 rounded-full font-medium">
                                    Up to {venue.capacity}
                                </span>
                            </div>
                            <ul className="space-y-2">
                                {venue.features.map((feature, i) => (
                                    <li key={i} className="text-foreground-accent text-sm flex items-start gap-2">
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
