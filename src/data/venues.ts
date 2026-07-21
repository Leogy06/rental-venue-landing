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
