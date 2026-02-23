import React from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';

interface CardProps {
  product: Product;
}

export function ProductCard({ product }: CardProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-hero text-accent text-center text-[2rem]">{product.title}</h1>
      <div className="flex items-start gap-0 px-6 pt-8 sm:items-center">
        <div className="w-1/3 flex-shrink-0 text-center sm:w-auto sm:max-w-none sm:flex-shrink-0">
          <h2 className="font-heading text-lg uppercase">{product.tags[0]}</h2>
          <p className="font-label text-muted-brown text-sm">{product.tags.join(', ')}</p>

          <h3 className="font-label mt-6 text-base sm:mt-12">Description</h3>
          <p className="font-body text-foreground/70 mx-auto mt-2 max-w-[200px] text-xs">
            {product.description}
          </p>

          <h3 className="font-label mt-6 text-base sm:mt-12">Price</h3>
          <p className="font-label mt-2 text-base">{product.price}$</p>
        </div>
        <div className="flex w-2/3 justify-center px-1 sm:w-auto sm:flex-1 sm:px-6">
          <Image
            src={product.image.url}
            alt={product.image.alt}
            width={300}
            height={300}
            className="w-full sm:max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
