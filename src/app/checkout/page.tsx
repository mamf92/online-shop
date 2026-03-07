'use client';
import { ShoppingCart } from '@/components/features/cart/cart';
import { StyledButton } from '@/components/ui/buttons';

export default function CheckoutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <h1 className="font-hero text-accent text-center text-[2rem]">Checkout</h1>
      <ShoppingCart mode="checkout" />
      {/* Navigate to payment page */}
      <StyledButton
        variant={'primary'}
        onClick={() => {
          document.location.href = '/cart';
        }}
        className="mx-auto block"
      >
        Pay
      </StyledButton>
    </main>
  );
}
