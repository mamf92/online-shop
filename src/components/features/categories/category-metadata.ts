import { getAllProducts } from '@/components/features/products/services/product-service';

export interface CategoryDetails {
  src: string;
  alt: string;
  name: string;
}

const DEFAULT_CATEGORY_IMAGE = '/images/HeroImage.jpg';

const KNOWN_CATEGORIES: Record<string, CategoryDetails> = {
  fashion: {
    src: '/images/CategoryFashion.jpg',
    alt: 'Fashion Category',
    name: 'Fashion',
  },
  shoes: {
    src: '/images/CategoryShoes.jpg',
    alt: 'Shoes Category',
    name: 'Shoes',
  },
  electronics: {
    src: '/images/CategoryElectronics.jpg',
    alt: 'Electronics Category',
    name: 'Electronics',
  },
  beauty: {
    src: '/images/CategoryBeauty.jpg',
    alt: 'Beauty Category',
    name: 'Beauty',
  },
};

export const FEATURED_CATEGORY_SLUGS = ['fashion', 'shoes', 'electronics', 'beauty'] as const;

export function formatCategoryName(category: string) {
  return decodeURIComponent(category)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export function getCategoryDetails(category: string): CategoryDetails {
  const normalizedCategory = category.toLowerCase();
  const knownCategory = KNOWN_CATEGORIES[normalizedCategory];

  if (knownCategory) {
    return knownCategory;
  }

  const formattedName = formatCategoryName(category);

  return {
    src: DEFAULT_CATEGORY_IMAGE,
    alt: `${formattedName} Category`,
    name: formattedName,
  };
}

export function getFeaturedCategoryList() {
  return FEATURED_CATEGORY_SLUGS.map((category) => ({
    slug: category,
    ...getCategoryDetails(category),
  }));
}

export async function getCategoryList() {
  const products = await getAllProducts({ sortField: 'title', sortOrder: 'asc' });
  const categorySet = new Set<string>();

  for (const product of products.data) {
    for (const tag of product.tags) {
      categorySet.add(tag);
    }
  }

  return Array.from(categorySet)
    .sort((left, right) => formatCategoryName(left).localeCompare(formatCategoryName(right)))
    .map((category) => ({
      slug: category.toLowerCase(),
      ...getCategoryDetails(category),
    }));
}
