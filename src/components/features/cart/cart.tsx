'use client';

import { Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';

interface ShoppingCartProps {
  mode: 'checkout' | 'cart';
}

export function ShoppingCart({ mode }: ShoppingCartProps) {
  const { items, removeItem, updateQuantity } = useCartStore();
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-0 py-10 sm:px-6">
      <div
        className={`font-heading bg-secondary mb-4 grid w-full items-center rounded-xs px-2 text-[14px] text-white uppercase ${
          mode === 'cart'
            ? 'grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr_0.3fr]'
            : 'grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr]'
        }`}
      >
        <div className="p-2">Product details</div>
        <div className="p-2 text-right">Price</div>
        <div className="p-2 text-right">Quantity</div>
        <div className="p-2 text-right">Total</div>
        {mode === 'cart' && <div></div>}
      </div>

      <div className="font-body mx-auto flex w-full max-w-3xl flex-col">
        {items.map((line) => (
          <div
            key={line.id}
            className={`mb-4 grid items-center p-2 ${
              mode === 'cart'
                ? 'grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr_0.3fr]'
                : 'grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr]'
            }`}
          >
            <div className="flex items-center">
              <Image
                src={line.image.url}
                alt={line.image.alt}
                width={48}
                height={48}
                className="mr-2 inline-block h-12 w-12"
              />
              {line.title}
            </div>
            <div className="p-2 text-right">${line.discountedPrice.toFixed(2)}</div>
            <div className="flex items-center justify-end gap-2 p-2 text-right">
              {mode === 'cart' && (
                <div onClick={() => updateQuantity(line.id, line.quantity + 1)}>+</div>
              )}
              {line.quantity}
              {mode === 'cart' && (
                <div onClick={() => updateQuantity(line.id, line.quantity - 1)}>-</div>
              )}
            </div>
            <div className="p-2 text-right">
              ${(line.quantity * line.discountedPrice).toFixed(2)}
            </div>
            {mode === 'cart' && (
              <div className="sm:p-2" onClick={() => removeItem(line.id)}>
                <Trash2 className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="font-semibold-body px-6 py-2 text-right text-lg">
        Total: $
        {items.reduce((sum, line) => sum + line.quantity * line.discountedPrice, 0).toFixed(2)}
      </div>
    </div>
  );
}
