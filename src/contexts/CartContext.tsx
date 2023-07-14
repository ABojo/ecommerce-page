import { createContext, useState } from "react";
import CartItem from "../types/CartItem";

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (cartItem: CartItem) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartQuantity: 0,
} as unknown as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  function addToCart(newCartItem: CartItem): void {
    const indexOfItem = cartItems.findIndex((currentItem) => {
      return currentItem.id === newCartItem.id;
    });

    //inrement quantity if already in cart else add to cart
    if (indexOfItem > -1) {
      const newItems = [...cartItems];
      newItems[indexOfItem].quantity += newCartItem.quantity;

      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, newCartItem]);
    }

    //increase global quantity
    setCartQuantity((prev) => prev + newCartItem.quantity);
  }

  function removeFromCart(cartItem: CartItem): void {
    const itemIndex = cartItems.findIndex((item) => item.id === cartItem.id);

    if (itemIndex > -1) {
      const newCartItems = [...cartItems];

      //decrement global quantity
      setCartQuantity((prev) => prev - cartItems[itemIndex].quantity);

      //splice element out of array and update the cart items
      newCartItems.splice(itemIndex, 1);
      setCartItems(newCartItems);
    }
  }

  const value: CartContextType = { cartItems, cartQuantity, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
