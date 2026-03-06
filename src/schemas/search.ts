import { z } from 'zod';

export const SearchFormSchema = z.object({
  query: z
    .string()
    .toLowerCase()
    .min(2, { message: 'The search query needs to be at least 2 characters long.' })
    .max(100, { message: 'The search query cannot be longer than 100 characters.' }),
  filter: z.enum(['All', 'Fashion', 'Shoes', 'Electronics', 'Beauty']).optional(),
});

export type SearchFormData = z.infer<typeof SearchFormSchema>;
