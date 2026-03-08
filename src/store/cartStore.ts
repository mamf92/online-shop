import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartStore } from '../types/cart';

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      orderSummary: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
              ),
            };
          } else {
            return {
              items: [...state.items, { ...product, quantity }],
            };
          }
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          items: state.items
            .map((item) => {
              if (item.id === productId) {
                return { ...item, quantity };
              }
              return item;
            })
            .filter((item) => item.quantity > 0) as typeof state.items,
        }));
      },
      clearCart: () => set({ items: [] }),
      setOrderSummary: (items) => set({ orderSummary: items }),
    }),
    {
      name: 'cart-storage',
    },
  ),
);
