'use client';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart } from '@/components/features/cart/cart';
import { StyledButton } from '@/components/ui/buttons';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <h1 className="font-hero text-accent text-center text-[2rem]">Checkout</h1>
      <ShoppingCart mode="checkout" />
      <StyledButton
        variant={'primary'}
        onClick={() => {
          const { items, setOrderSummary, clearCart } = useCartStore.getState();
          setOrderSummary(items);
          clearCart();
          router.push('/checkout/success');
        }}
        className="mx-auto block"
      >
        Pay
      </StyledButton>
    </main>
  );
}
