import { Product } from '@/types/product';

interface ProductsSearchFilterProps {
  allProducts: Product[];
  filterOption?: 'All' | 'Fashion' | 'Shoes' | 'Electronics' | 'Beauty';
  searchQuery?: string;
}

export default function ProductsSearchFilter({
  allProducts,
  filterOption,
  searchQuery,
}: ProductsSearchFilterProps) {
  console.log('Filtering products with:', { filterOption, searchQuery });
  let productsToFilter = [...allProducts];

  if (filterOption && filterOption !== 'All') {
    productsToFilter = productsToFilter.filter((product) => {
      if (Array.isArray(product.tags)) {
        return product.tags.map((tag) => tag.toLowerCase()).includes(filterOption.toLowerCase());
      }
      return (product.tags as string).toLowerCase() === filterOption.toLowerCase();
    });
  }
  if (!searchQuery || searchQuery.trim() === '') {
    return productsToFilter;
  }

  if (searchQuery?.trim() !== '') {
    const lowerSearchQuery = searchQuery.toLowerCase();
    productsToFilter = productsToFilter.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerSearchQuery) ||
        product.description.toLowerCase().includes(lowerSearchQuery),
    );
  }
  return productsToFilter;
}
