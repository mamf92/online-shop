import ProductsSearchFilter from '@/components/features/products/search/products-search-filter';
import ProductGrid from '@/components/features/products/product-grid';
import { getAllProducts } from '../services/product-service';
import SearchForm from './search-form';
import FilterDropdown from '@/components/features/products/search/filter-dropdown';

interface SearchSectionProps {
  query: string;
  filter: 'All' | 'Fashion' | 'Shoes' | 'Electronics' | 'Beauty';
}

export default async function SearchSection({ query, filter }: SearchSectionProps) {
  const allProducts = await getAllProducts();

  const filteredProducts = ProductsSearchFilter({
    allProducts: allProducts.data,
    filterOption: filter,
    searchQuery: query,
  });

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-2 px-4 py-8">
      <div className="z-0 flex w-84 justify-between gap-2 md:w-lg lg:w-172">
        <SearchForm />
        <FilterDropdown />
      </div>
      {filteredProducts.length === 0 ? (
        <p className="mt-8 text-center text-gray-500">No products found matching your criteria.</p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
}
