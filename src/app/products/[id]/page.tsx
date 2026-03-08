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
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <ProductCard product={product.data} />
      <CustomerReviewsList reviews={product.data.reviews} />
    </main>
  );
}
