import { FaCalendarCheck, FaHeart, FaAward } from "react-icons/fa";

import { IStats } from "@/types"

export const stats: IStats[] = [
    {
        title: "500+ Events Hosted",
        icon: <FaCalendarCheck className="text-primary" />,
        description: "From intimate gatherings to grand celebrations, we bring dreams to life."
    },
    {
        title: "10,000+ Happy Guests",
        icon: <FaHeart className="text-primary" />,
        description: "Memories created that last a lifetime for our clients and their loved ones."
    },
    {
        title: "15+ Years Experience",
        icon: <FaAward className="text-primary" />,
        description: "Trusted by families and businesses to deliver exceptional events."
    },
];
