import react from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';

interface MockCartLines {
  id: string;
  quantity: number;
  product: Product;
}

interface CheckoutProps {
  Lines: MockCartLines[];
  mode: 'checkout' | 'cart';
}

export function Checkout({ Lines, mode }: CheckoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-6 py-10">
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="p-2 text-left">Product</div>
        <div className="p-2 text-left">Price</div>
        <div className="p-2 text-left">Quantity</div>
        <div className="p-2 text-left">Total</div>
      </div>

      <div className="w-full">
        {Lines.map((line) => (
          <div key={line.id} className="flex items-center justify-between border p-2">
            <div className="flex items-center">
              <Image
                src={line.product.image.url}
                alt={line.product.image.alt}
                width={48}
                height={48}
                className="mr-2 inline-block h-12 w-12"
              />
              {line.product.title}
            </div>
            <div className="p-2">${line.product.discountedPrice.toFixed(2)}</div>
            <div className="p-2">{line.quantity}</div>
            <div className="p-2">${(line.quantity * line.product.discountedPrice).toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
