import { ShoppingCart } from '@/components/features/cart/cart';

export default function CheckoutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Checkout</h1>
      <ShoppingCart mode="checkout" />
      <button>Pay</button>
    </main>
  );
}
