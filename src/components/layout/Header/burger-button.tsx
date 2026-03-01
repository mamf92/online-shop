'use client';
import { useState } from 'react';

export function BurgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex h-5 w-7 cursor-pointer flex-col items-center justify-center gap-1 lg:h-7 lg:w-12 lg:gap-1.5"
      aria-label="Toggle menu"
    >
      <span
        className={`bg-accent block h-[0.2rem] w-6 origin-center rounded-3xl transition-all duration-300 lg:h-[0.3rem] lg:w-12 ${isOpen ? 'translate-y-1.75 rotate-45 lg:translate-y-2.75' : ''}`}
      />
      <span
        className={`bg-accent block h-[0.2rem] w-6 rounded-3xl transition-all duration-300 lg:h-[0.3rem] lg:w-12 ${isOpen ? 'scale-x-0 opacity-0' : ''}`}
      />
      <span
        className={`bg-accent block h-[0.2rem] w-6 origin-center rounded-3xl transition-all duration-300 lg:h-[0.3rem] lg:w-12 ${isOpen ? '-translate-y-1.75 -rotate-45 lg:-translate-y-2.75' : ''}`}
      />
    </button>
  );
}
