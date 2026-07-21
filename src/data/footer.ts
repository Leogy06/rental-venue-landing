import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Creating unforgettable events with elegance, warmth, and attention to detail.",
    quickLinks: [
        {
            text: "Services",
            url: "#services"
        },
        {
            text: "Venues",
            url: "#venues"
        },
        {
            text: "Gallery",
            url: "#gallery"
        },
        {
            text: "About",
            url: "#about"
        },
        {
            text: "Testimonials",
            url: "#testimonials"
        },
        {
            text: "FAQ",
            url: "#faq"
        },
        {
            text: "Contact",
            url: "#contact"
        }
    ],
    email: 'info@grandhallevents.com',
    telephone: '(555) 123-4567',
    socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
    }
}
