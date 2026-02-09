import Link from 'next/link';

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Category</h1>
      <p className="text-foreground/70 mt-2 text-sm">
        Route param: <span className="font-mono">{category}</span>
      </p>

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
    </main>
  );
}
