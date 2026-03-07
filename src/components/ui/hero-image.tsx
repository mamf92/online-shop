import Image from 'next/image';

interface HeroDetails {
  src: string;
  alt: string;
  name: string;
}

export default function HeroImage(heroDetails: HeroDetails) {
  return (
    <div>
      <div className="relative left-1/2 h-[30vh] w-screen -translate-x-1/2 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        <div className="max-w-3xl">
          <h1 className="font-hero text-accent absolute bottom-4 left-4 z-20 text-xs lg:text-2xl">
            {heroDetails.name}
          </h1>
        </div>
        <Image
          src={heroDetails.src}
          alt={heroDetails.alt}
          fill
          className="object-cover md:object-[center_20%] lg:object-[center_60%]"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
