import react from 'react';
import { Product } from '@/types/product';

interface MockCartLines {
  id: string;
  quantity: number;
  product: Product;
}

interface CheckoutProps {
  Lines: MockCartLines[];
  mode: 'checkout' | 'cart';
}

export function Checkout({ Lines, mode }: CheckoutProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">Product</th>
            <th className="border p-2 text-left">Price</th>
            <th className="border p-2 text-left">Quantity</th>
            <th className="border p-2 text-left">Total</th>
          </tr>
        </thead>

        <tbody>
          {Lines.map((line) => (
            <tr key={line.id}>
              <td className="border p-2">{line.product.title}</td>
              <td className="border p-2">${line.product.discountedPrice.toFixed(2)}</td>
              <td className="border p-2">{line.quantity}</td>
              <td className="border p-2">
                ${(line.quantity * line.product.discountedPrice).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
