import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>
      <p className="text-foreground/70 mt-2 text-sm">Basic placeholder page to verify routing.</p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/checkout" className="hover:underline">
          Checkout
        </Link>
      </div>
    </main>
  );
}
