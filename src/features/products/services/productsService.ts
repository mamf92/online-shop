import { Product } from '@/src/types/product';
import { PaginatedResponse } from '@/src/types/api/api-response-types';
import { get } from '@/src/lib/noroff/api-client';
import { PaginationOptions } from '@/src/types/pagination';

export async function getAllProducts(): Promise<PaginatedResponse<Product>> {
  return await get<PaginatedResponse<Product>>(`/online-shop`);
}

export async function getPaginatedProducts({
  page = 1,
  limit = 10,
}: PaginationOptions): Promise<PaginatedResponse<Product>> {
  return await get<PaginatedResponse<Product>>(`/online-shop?page=${page}&limit=${limit}`);
}
