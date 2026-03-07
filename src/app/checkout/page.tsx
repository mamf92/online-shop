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
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <Checkout Lines={mockLines} mode="cart" />
    </main>
  );
}
