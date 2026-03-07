import { ShoppingCart } from '@/components/features/cart/cart';
import Link from 'next/link';
import { StyledButton } from '@/components/ui/buttons';

export default function CartPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <h1 className="font-hero text-accent text-center text-[2rem]">Cart</h1>
      <ShoppingCart mode="cart" />

      <Link
        href="/checkout"
        className="font-label bg-accent mx-auto mt-6 block w-fit rounded-xs p-1 px-2 text-sm text-black sm:px-10"
      >
        Checkout
      </Link>
    </main>
  );
}
