import Link from 'next/link';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Product</h1>
      <p className="text-foreground/70 mt-2 text-sm">
        Route param: <span className="font-mono">{id}</span>
      </p>

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
    </main>
  );
}
