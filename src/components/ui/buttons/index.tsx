'use client';
import React from 'react';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function StyledButton({
  children,
  onClick,
  disabled,
  variant = 'primary',
  className = '',
}: StyledButtonProps) {
  const baseStyles =
    'font-label text-xs md:text-base text-white py-1 px-5 rounded-xs transition duration-150 ease-in-out';

  const primaryStyles =
    'bg-secondary hover:bg-primary text-white disabled:bg-primary/60 disabled:text-gray-500 disabled:cursor-not-allowed';
  const secondaryStyles = 'bg-gray-300 hover:bg-gray-400 text-gray-800 '; //TODO: update colors

  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
