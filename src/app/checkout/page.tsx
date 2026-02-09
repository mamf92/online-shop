import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Checkout</h1>
      <p className="text-foreground/70 mt-2 text-sm">Basic placeholder page to verify routing.</p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/product/1" className="hover:underline">
          Example product
        </Link>
      </div>
    </main>
  );
}
