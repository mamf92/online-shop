import { ShoppingCart } from '@/components/features/cart/cart';
import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Cart</h1>
      <ShoppingCart mode="cart" />

      <Link href="/checkout">Checkout</Link>
    </main>
  );
}
