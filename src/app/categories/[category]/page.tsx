import HeroImage from '@/components/features/categories/hero-image';
import CategoryDivider from '@/components/features/categories/category-devider';
import ProductGrid from '@/components/features/products/product-grid';
import Breadcrumb from '@/components/layout/breadcrumb';

import { getAllProducts } from '@/components/features/products/services/product-service';

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const products = await getAllProducts({ sortField: 'title', sortOrder: 'asc' });
  const filteredProducts = products.data.filter((product) => product.tags.includes(category));

  return (
    <main className="mx-auto flex w-full flex-1 flex-col items-center gap-2 px-4 pb-4">
      <HeroImage category={category} />
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <Breadcrumb placement="banner" />
      </div>
      <ProductGrid products={filteredProducts} className="mt-6" />
      <section className="mx-auto w-full max-w-3xl px-6 py-10">
        <CategoryDivider />
      </section>
    </main>
  );
}
