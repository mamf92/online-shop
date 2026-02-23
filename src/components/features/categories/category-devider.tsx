import React from 'react';
import Image from 'next/image';

export default function CategoryDivider() {
  const items = [
    { id: 1, image: '/images/CategoryFashion.jpg', name: 'Fashion' },
    { id: 4, image: '/images/CategoryShoes.jpg', name: 'Shoes' },
    { id: 2, image: '/images/CategoryElectronics.jpg', name: 'Electronics' },
    { id: 3, image: '/images/CategoryBeauty.jpg', name: 'Beauty' },
  ];

  return (
    <div className="bg-primary-brown w-full px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-row justify-center gap-8 sm:gap-6 md:gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-shrink-0 flex-col items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={160}
                height={160}
                className="mb-4 h-16 w-16 object-cover sm:h-24 sm:w-24 md:h-40 md:w-40"
              />
              <p className="font-heading text-muted-brown text-center text-sm uppercase">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
