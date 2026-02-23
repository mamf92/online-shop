export interface PaginationOptions {
  page?: number;
  limit?: number;
}

type FieldOptions = 'title' | 'price' | 'discountedPrice' | 'rating';

export interface SortingOptions {
  sortField: FieldOptions;
  sortOrder: 'asc' | 'desc';
}
