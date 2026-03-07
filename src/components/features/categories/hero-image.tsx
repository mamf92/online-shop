import React from 'react';
import Image from 'next/image';

interface HeroImageProps {
  category: string;
}

interface CategoryDetails {
  src: string;
  alt: string;
  name: string;
}

const categories: Record<string, CategoryDetails> = {
  fashion: {
    src: '/images/CategoryFashion.jpg',
    alt: 'Fashion Category',
    name: 'Fashion',
  },
  shoes: {
    src: '/images/CategoryShoes.jpg',
    alt: 'Shoes Category',
    name: 'Shoes',
  },
  electronics: {
    src: '/images/CategoryElectronics.jpg',
    alt: 'Electronics Category',
    name: 'Electronics',
  },
  beauty: {
    src: '/images/CategoryBeauty.jpg',
    alt: 'Beauty Category',
    name: 'Beauty',
  },
};

export default function HeroImage({ category }: HeroImageProps) {
  const heroDetails = category ? categories[category.toLowerCase()] : categories.beauty;

  return (
    <div>
      <div className="relative left-1/2 h-64 w-screen -translate-x-1/2 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        <h1 className="font-hero text-accent absolute right-4 bottom-4 z-20 text-5xl">
          {heroDetails.name}
        </h1>
        <Image
          src={heroDetails.src}
          alt={heroDetails.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
