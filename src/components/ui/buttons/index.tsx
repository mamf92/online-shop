'use client';
import React from 'react';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;

  variant?: 'primary' | 'secondary';
}

export function StyledButton({ children, onClick, variant = 'primary' }: StyledButtonProps) {
  const baseStyles =
    'font-label text-xs md:text-base text-white py-1 px-5 rounded-sm transition duration-150 ease-in-out';

  const primaryStyles = 'bg-secondary hover:bg-primary text-white';
  const secondaryStyles = 'bg-gray-300 hover:bg-gray-400 text-gray-800'; //TODO: update colors

  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {children}
    </button>
  );
}
