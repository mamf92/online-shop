'use client';

import { ShoppingCart } from '@/components/features/cart/cart';
import { StyledButton } from '@/components/ui/buttons';

export default function CartPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <h1 className="font-hero text-accent text-center text-[2rem]">Cart</h1>
      <ShoppingCart mode="cart" />

      <StyledButton
        variant={'primary'}
        onClick={() => {
          document.location.href = '/checkout';
        }}
        className="mx-auto block"
      >
        Checkout
      </StyledButton>
    </main>
  );
}
