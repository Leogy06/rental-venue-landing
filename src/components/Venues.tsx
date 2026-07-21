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
