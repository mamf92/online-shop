'use client';

import { useCartStore } from '@/store/cartStore';
import { useRouter } from 'next/navigation';
import { SuccessOverview } from '@/components/features/checkout/success';
import SuccessCheckmark from '@/components/ui/success-checkmark';
import { StyledButton } from '@/components/ui/buttons';
import Link from 'next/link';

export default function SuccessPage() {
  const router = useRouter();
  const orderSummary = useCartStore((state) => state.orderSummary);

  if (orderSummary.length === 0) {
    return (
      <main className="...">
        <p>
          No order found. <Link href="/products">Continue shopping</Link>
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col items-center gap-2 px-4 py-10 sm:px-6">
      <h1 className="font-hero text-heading-color text-2xl capitalize">Order confirmed</h1>
      <SuccessCheckmark />
      <h2 className="font-heading text-center text-base">Order summary</h2>
      <p className="font-body text-center text-sm text-gray-600">
        Thank you for your order! Your order has been successfully processed. You will receive an
        email confirmation shortly. If you have any questions about your order, please contact our
        support team.
      </p>
      <StyledButton
        onClick={() => {
          router.push('/');
        }}
      >
        Continue Shopping
      </StyledButton>
      <SuccessOverview />
      <StyledButton
        onClick={() => {
          router.push('/');
        }}
      >
        Home
      </StyledButton>
    </main>
  );
}
