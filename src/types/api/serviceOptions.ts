export interface PaginationOptions {
  page?: number;
  limit?: number;
}

export type FieldOptions = 'title' | 'price' | 'discountedPrice' | 'rating';

export interface SortingOptions {
  sortField: FieldOptions;
  sortOrder: 'asc' | 'desc';
}
