'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { StyledButton } from '@/components/ui/buttons';

interface FilterDropdownProps {
  filters: string[];
}

function formatFilterLabel(filter: string) {
  return decodeURIComponent(filter)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export default function FilterDropdown({ filters }: FilterDropdownProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const currentFilter = searchParams.get('filter') ?? 'All';
  const currentQuery = searchParams.get('q') ?? '';
  const currentSortField = searchParams.get('sortField') ?? 'title';
  const availableFilters = ['All', ...filters];

  function handleFilterChange(filter: string) {
    router.push(
      `/?q=${encodeURIComponent(currentQuery)}&filter=${encodeURIComponent(filter)}&sortField=${encodeURIComponent(currentSortField)}`,
    );
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <StyledButton variant="primary" onClick={() => setIsOpen(!isOpen)}>
        {formatFilterLabel(currentFilter)}
      </StyledButton>
      {isOpen && (
        <div
          role="listbox"
          aria-label="Filter products"
          className="bg-secondary absolute top-20 right-0 mt-2 w-40 -translate-y-1/2 rounded-xs"
        >
          {availableFilters.map((filter) => (
            <div
              key={filter}
              role="option"
              onClick={() => handleFilterChange(filter)}
              aria-selected={currentFilter === filter}
              className={`hover:bg-primary cursor-pointer rounded-xs px-2 py-1 text-xs ${
                currentFilter === filter ? 'bg-primary-brown text-white' : ''
              }`}
            >
              {formatFilterLabel(filter)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
