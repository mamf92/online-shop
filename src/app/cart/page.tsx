'use client';

import { ShoppingCart } from '@/components/features/cart/cart';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const { items } = useCartStore();
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <h1 className="font-hero text-heading-color text-center text-[2rem]">Cart</h1>
      <ShoppingCart mode="cart" />

      <Link
        href="/checkout"
        className={`font-label ${items.length === 0 ? 'bg-primary/60 pointer-events-none cursor-not-allowed text-white' : 'bg-accent'} mx-auto mt-6 block w-fit rounded-xs p-1 px-2 text-sm text-black sm:px-10`}
        aria-disabled={items.length === 0}
        tabIndex={items.length > 0 ? -1 : undefined}
      >
        Checkout
      </StyledButton>
    </main>
  );
}
