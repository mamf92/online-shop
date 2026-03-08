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
    <div className="font-label mx-auto max-w-3xl sm:max-w-162.5 lg:max-w-172">
      <h1 className="font-hero text-muted-brown text-center text-xl sm:text-[2rem]">
        {product.title}
      </h1>
      <div className="flex h-[35vh] items-stretch gap-2 py-8 sm:items-center sm:px-6 md:h-[40vh]">
        <div className="flex h-full w-4/9 shrink-0 flex-col justify-between py-4 text-center sm:w-3/7 sm:max-w-none sm:shrink-0 md:w-auto">
          <div className="flex flex-col">
            <h2 className="font-heading text-lg uppercase">{product.tags[0]}</h2>
            <p className="text-muted-brown text-sm/3">{product.tags.join(', ')}</p>
          </div>
          <div>
            <h3 className="text-base">Description</h3>
            <p className="font-body text-foreground/70 mx-auto max-w-50 text-xs">
              {product.description}
            </p>
          </div>
          <div className="gap-1">
            <h3 className="text-base">Price</h3>
            <div className="flex justify-center gap-6">
              <p
                className={`text-xs ${product.discountedPrice !== product.price ? 'line-through' : ''}`}
              >
                {product.price}$
              </p>
              {product.discountedPrice !== product.price && (
                <p className="text-xs">{product.discountedPrice}$</p>
              )}
            </div>
          </div>
          <button
            onClick={() => addItem(product)}
            className="bg-accent w-full rounded-xs p-1 px-2 text-sm text-black sm:px-10"
          >
            Add to Cart
          </button>
        </div>
        <div className="relative h-full w-5/9 overflow-hidden sm:w-4/7 sm:flex-1 md:w-auto">
          {product.discountedPrice !== product.price && (
            <div className="bg-accent absolute top-2 right-2 z-10 rounded-xs px-8 py-1 text-xs text-black drop-shadow-md">
              <p>
                {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                SALE
              </p>
            </div>
          )}
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
