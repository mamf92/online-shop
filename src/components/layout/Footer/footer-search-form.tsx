'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchFormSchema } from '@/schemas/search';
import type { SearchFormData } from '@/schemas/search';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

function FooterSearchForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      query: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: SearchFormData) => {
    const query = data.query.trim();
    router.push(`/?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center">
      <div className="relative flex min-w-full flex-col">
        <label htmlFor="searchInput" className="font-heading font-base w-full text-left text-white">
          Search
        </label>
        <div className="relative flex w-full flex-col">
          <input
            id="searchInput"
            type="text"
            placeholder="What are you looking for?"
            {...register('query')}
            aria-invalid={errors.query ? 'true' : 'false'}
            className="text-primary-brown rounded-xs bg-white px-5 py-2 text-base"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-primary-brown absolute top-1/2 right-5 -translate-y-1/2 transform"
          >
            <Search />
          </button>
        </div>
        {errors.query && (
          //Replace with error toast component TODO
          <p role="alert" className="text-accent mt-1 text-sm">
            {errors.query.message}
          </p>
        )}
      </div>
    </form>
  );
}

export default FooterSearchForm;
