import { useCartStore } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';

type CartIconProps = {
  className?: string;
  cartClassName?: string;
};

export default function CartIcon({
  cartClassName = 'h-5 w-5 text-accent',
  className,
}: CartIconProps) {
  const { items } = useCartStore();
  const itemsCount = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className={`relative ${className}`}>
      {!!itemsCount && (
        <div className="bg-accent text-primary font-heading absolute -top-2 -right-2.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-xs">
          <span className="-translate-y-px">{itemsCount}</span>
        </div>
      )}
      <ShoppingCart className={cartClassName} />
    </div>
  );
}
