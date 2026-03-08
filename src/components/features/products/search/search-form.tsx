'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchFormSchema } from '@/schemas/search';
import type { SearchFormData } from '@/schemas/search';
import { StyledButton } from '@/components/ui/buttons';
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

  const currentFilter = searchParams.get('filter') ?? 'All';
  const currentSortField = searchParams.get('sortField') ?? 'title';

  useEffect(() => {
    reset({ query: searchParams.get('q') || '' });
  }, [searchParams, reset]);

  const onSubmit = (data: SearchFormData) => {
    const query = data.query.trim();
    router.push(
      `/?q=${encodeURIComponent(query)}&filter=${encodeURIComponent(currentFilter)}&sortField=${encodeURIComponent(currentSortField)}`,
    );
  };

  const onReset = () => {
    reset();
    const currentFilter = searchParams.get('filter') || 'All';
    const currentSortField = searchParams.get('sortField') || 'title';
    router.push(
      `/?filter=${encodeURIComponent(currentFilter)}&sortField=${encodeURIComponent(currentSortField)}`,
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full">
      <div className="relative flex w-full flex-col gap-1">
        <div className="flex gap-2">
          <div className="relative w-full">
            <label
              htmlFor="searchInput"
              className="font-heading font-base sr-only w-full text-left text-white"
            >
              Search
            </label>
            <div className="relative flex">
              <input
                id="searchInput"
                type="text"
                placeholder="Search"
                {...register('query')}
                aria-invalid={errors.query ? 'true' : 'false'}
                className="text-primary-brown w-full rounded-xs border bg-white px-1 py-1 text-xs md:text-base"
              />
              <button
                type="button"
                onClick={onReset}
                className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          <StyledButton variant={isSubmitting ? 'secondary' : 'primary'}>Search</StyledButton>
        </div>
        {errors.query && (
          <p role="alert" className="text-accent font-body mt-1 text-sm">
            {errors.query.message}
          </p>
        )}
      </div>
    </form>
  );
}

export default SearchForm;
