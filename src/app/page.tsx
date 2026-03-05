import SearchSection from '@/components/features/products/search/search-section';

interface HomeProps {
  searchParams: {
    q?: string;
    filter?: 'All' | 'Fashion' | 'Shoes' | 'Electronics' | 'Beauty';
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const { q, filter } = await searchParams;
  return (
    <div className="min-h-screen">
      <main className="mx-auto flex w-full max-w-3xl items-center py-10">
        <SearchSection query={q || ''} filter={filter || 'All'} />
      </main>
    </div>
  );
}
