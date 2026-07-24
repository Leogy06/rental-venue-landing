"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"
import ServiceFeature from "./ServiceFeature";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
    /** optional short tag shown above the title, e.g. "THE SPACE" — omit if not meaningful */
    eyebrow?: string;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const imageVariants: Variants = {
    offscreen: {
        opacity: 0,
        scale: 0.94,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.15,
            duration: 1,
        }
    },
};

const ServiceSection: React.FC<Props> = ({ benefit, imageAtRight, eyebrow }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="service-section relative py-4 lg:py-10">
            {/* faint grid texture, contained to this section, echoes the hero panel */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] bg-[linear-gradient(to_right,#15130F_1px,transparent_1px),linear-gradient(to_bottom,#15130F_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-10 lg:gap-20 lg:flex-row lg:flex-nowrap mb-24"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* TEXT SIDE */}
                <div
                    className={clsx(
                        "flex flex-wrap items-center w-full max-w-lg",
                        { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight }
                    )}
                >
                    <div className="w-full text-center lg:text-left">
                        <motion.div className="flex flex-col w-full" variants={childVariants}>
                            {eyebrow && (
                                <span className="mb-3 mx-auto lg:mx-0 w-fit font-mono text-[11px] tracking-[0.2em] uppercase text-[#B34632]">
                                    {eyebrow}
                                </span>
                            )}
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl font-serif">
                                    {title}
                                </h3>
                            </SectionTitle>
                            {/* short gold rule ties the title to the accent used in the hero */}
                            <span className="mt-4 mb-1 h-px w-14 bg-[#C9A15A] mx-auto lg:mx-0" />
                            <p className="mt-3 mx-auto lg:ml-0 leading-relaxed text-foreground-accent">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mx-auto lg:ml-0 w-full mt-4 divide-y divide-[#E4DCC8]">
                            {bullets.map((item, index) => (
                                <ServiceFeature
                                    key={index}
                                    title={item.title}
                                    icon={item.icon}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* IMAGE SIDE */}
                <div className={clsx("mt-5 lg:mt-0 w-full lg:w-auto", { "lg:order-2": imageAtRight })}>
                    <div className={clsx("w-fit flex mx-auto", { "lg:justify-start": imageAtRight, "lg:justify-end": !imageAtRight })}>
                        <motion.div
                            variants={imageVariants}
                            className="group relative"
                        >
                            {/* corner bracket frame — the section's signature detail */}
                            <span className={clsx(
                                "absolute -top-3 w-10 h-10 border-t-2 border-[#C9A15A]",
                                imageAtRight ? "-left-3 border-l-2" : "-right-3 border-r-2"
                            )} />
                            <span className={clsx(
                                "absolute -bottom-3 w-10 h-10 border-b-2 border-[#C9A15A]",
                                imageAtRight ? "-right-3 border-r-2" : "-left-3 border-l-2"
                            )} />

                            <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    width={384}
                                    height={762}
                                    quality={100}
                                    className="lg:ml-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default ServiceSection