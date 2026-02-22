import { Product } from '@/src/types/product';
import { SingleResponse } from '@/src/types/api/api-response-types';
import { get } from '@/src/lib/noroff/api-client';

export async function getProductById(productId: string): Promise<SingleResponse<Product>> {
  const response = await get<SingleResponse<Product>>(`/online-shop/${productId}`);
  return response;
}
