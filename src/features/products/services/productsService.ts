import { Product } from '@/src/types/product';
import { PaginatedResponse } from '@/src/types/api/api-response-types';
import { get } from '@/src/lib/noroff/api-client';
import { PaginationOptions, SortingOptions } from '@/src/types/serviceOptions';

export async function getAllProducts(): Promise<PaginatedResponse<Product>> {
  return await get<PaginatedResponse<Product>>(`/online-shop`);
}

export async function getPaginatedProducts({
  page = 1,
  limit = 10,
}: PaginationOptions): Promise<PaginatedResponse<Product>> {
  return await get<PaginatedResponse<Product>>(`/online-shop?page=${page}&limit=${limit}`);
}

export async function getSortedProducts({
  sortField = 'title',
  sortOrder = 'desc',
}: SortingOptions): Promise<PaginatedResponse<Product>> {
  return await get<PaginatedResponse<Product>>(
    `/online-shop?sort=${sortField}&sortOrder=${sortOrder}`,
  );
}
