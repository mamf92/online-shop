import React from 'react';
import Image from 'next/image';

export const heroImage = {
  src: '/images/CategoryFashion.jpg',
  alt: 'Hero Image',
  width: 1800,
  height: 200,
};

export default function HeroImage() {
  return (
    <div>
      <div className="relative left-1/2 h-64 w-screen -translate-x-1/2 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <p className="font-hero text-accent absolute right-4 bottom-4 z-20 text-5xl">Beauty</p>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
