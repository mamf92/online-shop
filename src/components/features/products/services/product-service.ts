import { Product } from '@/types/product';
import { PaginatedResponse, SingleResponse } from '@/types/api/api-response-types';
import { get } from '@/lib/noroff/api-client';
import { PaginationOptions, SortingOptions } from '@/types/api/serviceOptions';

export async function getProductById(productId: string): Promise<SingleResponse<Product>> {
  const response = await get<SingleResponse<Product>>(`/online-shop/${productId}`);
  return response;
}

export async function getAllProducts({
  sortField = 'title',
  sortOrder = 'asc',
}: SortingOptions): Promise<PaginatedResponse<Product>> {
  // Fetch all products by paginating through the API,
  // this is necessary because the API does not provide filter options.
  // Could be mitigated by caching the results on the client side, but for simplicity we will fetch all products every time.

  let page = 1;
  let allProducts: Product[] = [];

  while (true) {
    const response = await getPaginatedProducts({ page, limit: 100, sortField, sortOrder });
    allProducts = allProducts.concat(response.data);
    if (response.meta.isLastPage) {
      return {
        data: allProducts,
        meta: response.meta,
      };
    }
    page++;
  }
}

export async function getPaginatedProducts({
  page = 1,
  limit = 10,
  sortField = 'title',
  sortOrder = 'asc',
}: PaginationOptions & SortingOptions): Promise<PaginatedResponse<Product>> {
  // The API does not provide filter options, so we need to fetch all products and filter them on the client side.
  // This is not ideal, but it is necessary given the limitations of the API.
  // In a real-world scenario, we would want to implement server-side filtering and pagination to avoid fetching unnecessary data.

  return await get<PaginatedResponse<Product>>(
    `/online-shop?page=${page}&limit=${limit}&sort=${sortField}&sortOrder=${sortOrder}`,
  );
}
