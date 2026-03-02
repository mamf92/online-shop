import Link from 'next/link';
import HeroImage from '@/components/features/categories/hero-image';
import CategoryDivider from '@/components/features/categories/category-devider';
import ProductGrid from '@/components/features/products/product-grid';

import { getAllProducts } from '@/components/features/products/services/product-service';

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const products = await getAllProducts();
  const filteredProducts = products.data.filter((product) => product.tags.includes(category));

  return (
    <main>
      <HeroImage category={category} />
      <ProductGrid products={filteredProducts} className="mt-6" />
      <section className="mx-auto w-full max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">Category</h1>
        <p className="text-foreground/70 mt-2 text-sm">
          Route param: <span className="font-mono">{category}</span>
        </p>

        <CategoryDivider />

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/category/example" className="hover:underline">
            /category/example
          </Link>
          <Link href="/product/1" className="hover:underline">
            /product/1
          </Link>
        </div>
      </section>
    </main>
  );
}
