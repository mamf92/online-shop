import Link from 'next/link';
import { getProductById } from '@/components/features/products/services/product-service';
import { ProductCard } from '@/components/features/products/product-card';
import { CustomerReviewsList } from '@/components/features/products/customer-reviews-list';
type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <ProductCard product={product.data} />

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/product/1" className="hover:underline">
          /product/1
        </Link>
        <Link href="/category/example" className="hover:underline">
          /category/example
        </Link>
      </div>

      <CustomerReviewsList reviews={product.data.reviews} />
    </main>
  );
}
