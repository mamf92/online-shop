'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchFormSchema } from '@/schemas/search';
import type { SearchFormData } from '@/schemas/search';
import { X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      query: searchParams.get('q') || '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: SearchFormData) => {
    const query = data.query.trim();
    const currentFilter = searchParams.get('filter') || 'All';
    router.push(`/?q=${encodeURIComponent(query)}&filter=${encodeURIComponent(currentFilter)}`);
  };

  const onReset = () => {
    reset();
    const currentFilter = searchParams.get('filter') || 'All';
    router.push(`/?filter=${encodeURIComponent(currentFilter)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center">
      <div className="relative flex min-w-full flex-col">
        <label htmlFor="searchInput" className="font-heading font-base w-full text-left text-white">
          Search
        </label>
        <div className="relative flex w-full">
          <input
            id="searchInput"
            type="text"
            placeholder="What are you looking for?"
            {...register('query')}
            aria-invalid={errors.query ? 'true' : 'false'}
            className="text-primary-brown rounded-xs bg-white px-5 py-2 text-base"
          />
          <button
            type="button"
            onClick={onReset}
            className="absolute top-1/2 right-14 -translate-y-1/2 text-gray-400"
          >
            <X />
          </button>
          <button type="submit" disabled={isSubmitting} className="text-primary-brown">
            Search
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

export default SearchForm;
