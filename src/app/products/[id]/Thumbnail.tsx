import React from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';

interface ThumbnailProps {
  product: Product;
}

export function Thumbnail({ product }: ThumbnailProps) {
  return (
    <div className="bg-muted-brown w-40 rounded-sm p-2">
      <div className="-mx-1 -mt-1 mb-2 flex justify-center">
        <Image
          src={product.image.url}
          alt={product.image.alt}
          width={160}
          height={160}
          className="h-40 w-40 rounded-sm object-cover"
        />
      </div>
      <div className="flex justify-between gap-2 text-xs">
        <h3 className="font-heading text-sm text-black">{product.tags[0]}</h3>
        <p className="font-label text-black">{product.price}$</p>
      </div>
      <p className="font-label line-clamp-2 text-xs text-black">{product.title}</p>
    </div>
  );
}
