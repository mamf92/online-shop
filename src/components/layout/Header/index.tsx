'use client';

import Logo from '@/components/ui/logo';
import TextLogo from '@/components/ui/text-logo';
import CartIcon from '@/components/layout/Header/cart-icon';
import { BurgerButton } from '@/components/layout/Header/burger-button';
import BurgerMenu from '@/components/layout/Header/burger-menu';
import { useCallback, useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/use-click-outside';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useClickOutside(menuRef, handleClose);
  return (
    <header className="bg-primary text-accent relative grid grid-cols-[1fr_auto_1fr] items-center p-4 px-[10%]">
      <Link href="/">
        <Logo />
      </Link>
      <TextLogo />
      <div className="flex items-center justify-end gap-4">
        <Link href="/cart">
          <CartIcon itemsCount={48} />
        </Link>
        <div ref={menuRef}>
          <BurgerButton isOpen={isOpen} onToggle={handleToggle} />
          <div className={`${isOpen ? 'block' : 'hidden'} absolute top-full right-0 z-10`}>
            {isOpen && <BurgerMenu handleClose={handleClose} />}
          </div>
        </div>
      </div>
    </header>
  );
}
