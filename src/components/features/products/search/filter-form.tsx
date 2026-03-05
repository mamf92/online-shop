'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const FILTERS = ['All', 'Fashion', 'Shoes', 'Electronics', 'Beauty'] as const;

export default function FilterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get('filter') ?? 'All';
  const currentQuery = searchParams.get('q') ?? '';

  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newFilter = e.target.value;
    // 👇 keeps the current search query, only updates the filter
    router.push(`/?q=${encodeURIComponent(currentQuery)}&filter=${encodeURIComponent(newFilter)}`);
  }

  return (
    <form className="flex w-full flex-col items-center">
      <div className="relative flex min-w-full flex-col">
        <label htmlFor="filter">Filter</label>
        <select
          id="filter"
          name="filter"
          value={currentFilter} // 👈 reads current value from URL
          onChange={handleFilterChange} // 👈 updates URL on every change
          className="text-primary-brown rounded-xs bg-white px-5 py-2 text-base"
        >
          {FILTERS.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
