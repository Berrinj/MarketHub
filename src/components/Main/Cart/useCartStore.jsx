import { create } from "zustand";
import { persist } from "zustand/middleware";

// const useCartStore = create((set) => ({
//     count: 0,
//     cart: [],
//     addToCart: (item) => set((state) => (
//         { cart: [...state.cart, item], count: state.count + 1 })),
//     removeFromCart: (id) =>
//       set((state) => ({
//         cart: state.cart.filter((item) => item.id !== id),
//         count: state.count - 1,
//       })),
//   }));
  
//     export default useCartStore;

const useCartStore = create(
  persist(
    (set, get) => ({
      count: 0,
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

          if(existingItem) {
            return {
              cart: state.cart.map((cartItem) => 
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
              ),
              count: state.count + 1,
            }
          }
          return {
            cart: [...state.cart, { ...item, quantity: 1 }],
            count: state.count + 1,
          }
        }),
      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
        count: state.count - state.cart.find((item) => item.id === id).quantity,
      })),

      clearCart: () => set({ cart: [], count: 0 }),

      increaseQuantity: (id) => set((state) => ({
        cart: state.cart.map((item) => 
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
        count: state.count + 1,
      })),

      decreaseQuantity: (id) => set((state) => ({
        cart: state.cart.map((item) => 
        item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0),
        count: Math.max(0, state.count - 1),
      })),

      getTotalCost: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      }
    }),
    {
      name: "cart-storage",
    }
  )
)

export default useCartStore;