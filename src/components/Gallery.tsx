import React from 'react';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { galleryImages } from '@/data/gallery';

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-10 lg:py-20">
            <div className="text-center mb-12">
                <SectionTitle>
                    <h2 className="my-3 !leading-snug">Our Gallery</h2>
                </SectionTitle>
                <p className="text-foreground-accent max-w-2xl mx-auto mt-4">
                    A glimpse into the unforgettable events we&apos;ve had the honor of hosting
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
