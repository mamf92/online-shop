import Link from 'next/link';
import { Checkout } from '@/components/features/checkout/checkout';

const mockLines = [
  {
    id: 'line1',
    quantity: 2,
    product: {
      id: 'product1',
      title: 'Example Product',
      description: 'This is an example product.',
      price: 29.99,
      discountedPrice: 19.99,
      image: {
        url: '/images/Moodimage.jpg',
        alt: 'Example Product Image',
      },
      rating: 4,
      tags: ['example', 'product'],
      reviews: [
        {
          id: 'review1',
          username: 'JohnDoe',
          rating: 5,
          description: 'Great product! Highly recommend.',
        },
      ],
    },
  },
  {
    id: 'line2',
    quantity: 1,
    product: {
      id: 'product2',
      title: 'Another Product',
      description: 'This is another example product.',
      price: 49.99,
      discountedPrice: 39.99,
      image: {
        url: '/images/Moodimage02.jpg',
        alt: 'Another Product Image',
      },
      rating: 3,
      tags: ['another', 'product'],
      reviews: [],
    },
  },
];

export default function CheckoutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Checkout</h1>
      <p className="text-foreground/70 mt-2 text-sm">Basic placeholder page to verify routing.</p>
      <Checkout Lines={mockLines} mode="cart" />
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/product/1" className="hover:underline">
          Example product
        </Link>
      </div>
    </main>
  );
}
