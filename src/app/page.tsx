import Link from 'next/link';
import {
  getAllProducts,
  getSortedProducts,
} from '@/components/features/products/services/product-service';
import ProductGrid from '@/components/features/products/product-grid';

function getSortedProductsByPrice() {
  return getSortedProducts({ sortField: 'price', sortOrder: 'asc' });
}

export default async function Home() {
  const products = await getAllProducts();
  const sortedProducts = await getSortedProductsByPrice();
  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">Home</h1>

        <section className="mt-6">
          <h2 className="text-sm font-semibold">Products</h2>
          <div className="mt-3">
            <ProductGrid products={products.data} />
          </div>
        </section>

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

        <p className="text-foreground/70 mt-2 text-sm">Sorted products by price!</p>
        <ul>
          {sortedProducts.data.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`} className="hover:underline">
                {product.title}
              </Link>
              <span className="text-foreground/50 ml-2 text-xs">(${product.price})</span>
            </li>
          ))}
        </ul>

        <section className="mt-8">
          <h2 className="text-sm font-semibold">Quick links</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link href="/categories/example" className="hover:underline">
                /categories/example
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
