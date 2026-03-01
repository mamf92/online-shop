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
    <div className="mx-auto flex w-full max-w-3xl flex-col px-0 py-10 sm:px-6">
      <div
        className={`font-heading bg-secondary mb-4 grid w-full items-center px-2 text-[14px] uppercase ${
          mode === 'cart'
            ? 'grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr_0.8fr]'
            : 'grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr]'
        }`}
      >
        <div className="p-2">Product details</div>
        <div className="p-2 text-right">Price</div>
        <div className="p-2 text-right">Quantity</div>
        <div className="p-2 text-right">Total</div>
        {mode === 'cart' && <div className="p-2 text-right"></div>}
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col">
        {Lines.map((line) => (
          <div
            key={line.id}
            className={`mb-4 grid items-center p-2 ${
              mode === 'cart'
                ? 'grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr_0.8fr]'
                : 'grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr]'
            }`}
          >
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
            <div className="p-2 text-right">${line.product.discountedPrice.toFixed(2)}</div>
            <div className="flex items-center justify-end gap-2 p-2 text-right">
              {mode === 'cart' && <div>+</div>}
              {line.quantity}
              {mode === 'cart' && <div>-</div>}
            </div>
            <div className="p-2 text-right">
              ${(line.quantity * line.product.discountedPrice).toFixed(2)}
            </div>
            {mode === 'cart' && <div className="p-2 text-right">Remove</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
