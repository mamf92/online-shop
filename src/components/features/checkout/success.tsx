'use client';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';

export function SuccessOverview() {
  const purchasedItems = useCartStore((state) => state.orderSummary);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-0 py-10 sm:px-6">
      <div className="font-heading§ bg-secondary mb-4 grid w-full grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr] items-center rounded-xs px-2 text-[14px] text-white uppercase">
        <div className="p-2">Product details</div>
        <div className="p-2 text-right">Price</div>
        <div className="p-2 text-right">Quantity</div>
        <div className="p-2 text-right">Total</div>
      </div>

      <div className="font-body mx-auto flex w-full max-w-3xl flex-col">
        {purchasedItems.map((line) => (
          <div
            key={line.id}
            className="mb-4 grid grid-cols-[minmax(0,1.8fr)_0.8fr_0.7fr_0.8fr] items-center p-2"
          >
            <Link href={`/products/${line.id}`}>
              <div className="xs:text-base flex items-center gap-1 text-xs">
                <Image
                  src={line.image.url}
                  alt={line.image.alt}
                  width={48}
                  height={48}
                  className="inline-block h-12 w-12"
                />
                {line.title}
              </div>
            </Link>
            <div className="xs:text-base xs:p-2 p-0 text-right text-sm">
              ${line.discountedPrice.toFixed(2)}
            </div>
            <div className="flex items-center justify-end gap-2 p-2 text-right">
              {line.quantity}
            </div>
            <div className="xs:text-base p-2 text-right text-sm">
              ${(line.quantity * line.discountedPrice).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-2 text-right text-lg font-semibold">
        Total: $
        {purchasedItems
          .reduce((sum, line) => sum + line.quantity * line.discountedPrice, 0)
          .toFixed(2)}
      </div>
    </div>
  );
}
