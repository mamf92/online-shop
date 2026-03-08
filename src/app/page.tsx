import SearchSection from '@/components/features/products/search/search-section';
import HeroImage from '@/components/ui/hero-image';
import CategoryDivider from '@/components/features/categories/category-devider';
import { FieldOptions } from '@/types/api/serviceOptions';

interface HomeProps {
  searchParams: {
    q?: string;
    filter?: 'All' | 'Fashion' | 'Shoes' | 'Electronics' | 'Beauty';
    sortField?: FieldOptions;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const { q, filter, sortField } = await searchParams;
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center gap-4">
      <HeroImage
        src="/images/HeroImage.jpg"
        alt="Curated essentials for everyday life"
        name="Curated essentials for everyday life"
      />
      <CategoryDivider />
      <SearchSection query={q || ''} filter={filter || 'All'} sortField={sortField || 'title'} />
    </main>
  );
}
