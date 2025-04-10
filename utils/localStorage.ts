import { LocalCartProduct } from "./types";

const CART_KEY = "cartData";

export const saveCartToLocalStorage = (cart: LocalCartProduct[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
};

export const getCartFromLocalStorage = (): LocalCartProduct[] | null => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(CART_KEY);
    return storedCart ? JSON.parse(storedCart) : null;
  }
  return null;
}; 

export const getCartAmountFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const cartAmount = localStorage.getItem('cartAmount');
    return cartAmount ? JSON.parse(cartAmount) : 0;
  }
  return 0;
}

export const saveCartAmountToLocalStorage = (cartAmount: number) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cartAmount', JSON.stringify(cartAmount));
  }
}