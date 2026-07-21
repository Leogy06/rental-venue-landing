import React from 'react';
import Image from 'next/image';
import { aboutDetails } from '@/data/about';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
    return (
        <section id="about" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug text-center lg:text-left">{aboutDetails.headline}</h2>
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
                        alt="Grand Hall Events venue"
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
