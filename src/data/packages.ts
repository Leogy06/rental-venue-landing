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
        ]
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
        ]
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
        ]
    },
];
