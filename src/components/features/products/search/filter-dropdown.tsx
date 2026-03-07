'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { StyledButton } from '@/components/ui/buttons';

const FILTERS = ['All', 'Fashion', 'Shoes', 'Electronics', 'Beauty'] as const;

export default function FilterDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const currentFilter = searchParams.get('filter') ?? 'All';
  const currentQuery = searchParams.get('q') ?? '';
  const currentSortField = searchParams.get('sortField') ?? 'title';

  function handleFilterChange(filter: string) {
    router.push(
      `/?q=${encodeURIComponent(currentQuery)}&filter=${encodeURIComponent(filter)}&sortField=${encodeURIComponent(currentSortField)}`,
    );
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <StyledButton variant="primary" onClick={() => setIsOpen(!isOpen)}>
        {' '}
        {currentFilter}
      </StyledButton>
      {isOpen && (
        <div
          role="listbox"
          aria-label="Filter products"
          className="bg-secondary absolute top-20 right-0 mt-2 w-40 -translate-y-1/2 rounded-xs"
        >
          {FILTERS.map((filter) => (
            <div
              key={filter}
              role="option"
              onClick={() => handleFilterChange(filter)}
              aria-selected={currentFilter === filter}
              className={`hover:bg-primary cursor-pointer rounded-xs px-2 py-1 text-xs ${
                currentFilter === filter ? 'bg-primary-brown text-white' : ''
              }`}
            >
              {filter}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
