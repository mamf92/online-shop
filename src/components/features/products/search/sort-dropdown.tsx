'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { StyledButton } from '@/components/ui/buttons';
import { FieldOptions } from '@/types/api/serviceOptions';

const FIELDS: Record<FieldOptions, string> = {
  title: 'Title',
  price: 'Price',
  discountedPrice: 'Discounted Price',
  rating: 'Rating',
};

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const currentField = searchParams.get('sortField') ?? 'title';
  const currentQuery = searchParams.get('q') ?? '';
  const currentFilter = searchParams.get('filter') ?? 'All';

  function handleFieldChange(field: FieldOptions) {
    router.push(
      `/?q=${encodeURIComponent(currentQuery)}&filter=${encodeURIComponent(currentFilter)}&sortField=${encodeURIComponent(field)}`,
    );
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <StyledButton variant="primary" onClick={() => setIsOpen(!isOpen)}>
        {FIELDS[currentField as FieldOptions]}
      </StyledButton>
      {isOpen && (
        <div
          role="listbox"
          aria-label="Sort products"
          className="bg-secondary absolute top-20 right-0 mt-2 w-40 -translate-y-1/2 rounded-xs"
        >
          {Object.keys(FIELDS).map((key) => (
            <div
              key={key}
              role="option"
              onClick={() => handleFieldChange(key as FieldOptions)}
              aria-selected={currentField === key}
              className={`hover:bg-primary cursor-pointer rounded-xs px-2 py-1 text-xs ${
                currentField === key ? 'bg-primary-brown text-white' : ''
              }`}
            >
              {FIELDS[key as FieldOptions]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
