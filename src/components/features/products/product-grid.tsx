import React from 'react';
import { Product } from '@/types/product';
import { Thumbnail } from '@/components/features/products/thumbnail';

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className }: ProductGridProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 ${className ?? ''}`}>
      {products.map((product) => (
        <Thumbnail key={product.id} product={product} />
      ))}
    </div>
  );
}
