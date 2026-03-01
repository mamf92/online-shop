import Logo from '@/components/ui/logo';
import TextLogo from '@/components/ui/text-logo';
import CartIcon from '@/components/layout/Header/cart-icon';
import { BurgerButton } from '@/components/layout/Header/burger-button';

export default function Header() {
  return (
    <header className="bg-primary text-accent grid grid-cols-[1fr_auto_1fr] items-center p-4">
      <Logo />
      <TextLogo />
      <div className="flex items-center justify-end gap-4">
        <CartIcon />
        <BurgerButton />
      </div>
    </header>
  );
}
