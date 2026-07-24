import {
  FiCoffee,
  FiHeart,
  FiHome,
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
        icon: <FiHome size={26} />,
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
    imageSrc: "/images/service-venue.jpg",
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
    imageSrc: "/images/service-catering.jpg",
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
    imageSrc: "/images/service-planning.jpg",
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
    imageSrc: "/images/service-bar.jpg",
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
    imageSrc: "/images/service-lighting.jpg",
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
        icon: <FiHome size={26} />,
      },
    ],
    imageSrc: "/images/service-floral.jpg",
  },
];
