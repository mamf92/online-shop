import Link from 'next/link';
import { getAllProducts } from '@/src/features/products/services/productsService';

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen">
      <header className="border-foreground/10 border-b">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-hero text-muted-brown text-sm font-semibold">
            Skretcher
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/checkout" className="hover:underline">
              Checkout
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">Home</h1>
        <p className="text-foreground/70 mt-2 text-sm">All Products!</p>
        <ul>
          {products.data.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`} className="hover:underline">
                {product.title}
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-8">
          <h2 className="text-sm font-semibold">Quick links</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link href="/category/example" className="hover:underline">
                /category/example
              </Link>
            </li>
            <li>
              <Link href="/products/1" className="hover:underline">
                /products/1
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
