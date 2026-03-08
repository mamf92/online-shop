'use client';

import { useCartStore } from '@/store/cartStore';
import { Product } from '@/types/product';
import Image from 'next/image';

interface CardProps {
  product: Product;
}

export function ProductCard({ product }: CardProps) {
  const { addItem } = useCartStore();
  return (
    <div className="mx-auto max-w-3xl sm:max-w-162.5 lg:max-w-172">
      <h1 className="font-hero text-heading-color text-center text-lg sm:text-[2rem]">
        {product.title}
      </h1>
      <div className="flex h-[35vh] items-stretch gap-2 py-8 sm:items-center sm:px-6 md:h-[40vh]">
        <div className="flex h-full w-4/9 shrink-0 flex-col justify-between py-4 text-center sm:w-3/7 sm:max-w-none sm:shrink-0 md:w-auto">
          <div className="flex flex-col">
            <h2 className="font-heading text-lg uppercase">{product.tags[0]}</h2>
            <p className="font-label text-muted-brown text-sm/3">{product.tags.join(', ')}</p>
          </div>
          <div>
            <h3 className="font-label text-base">Description</h3>
            <p className="font-body text-foreground/70 mx-auto max-w-50 text-xs">
              {product.description}
            </p>
          </div>
          <div>
            <h3 className="font-label text-base">Price</h3>
            <p className="font-label text-base">{product.price}$</p>
          </div>
          <button
            onClick={() => addItem(product)}
            className="font-label bg-accent w-full rounded-xs p-1 px-2 text-sm text-black sm:px-10"
          >
            Add to Cart
          </button>
        </div>
        <div className="relative h-full w-5/9 overflow-hidden sm:w-4/7 sm:flex-1 md:w-auto">
          <Image
            src={product.image.url}
            alt={product.image.alt}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
