import { RootState } from "@/store";
import { newArrivals, topSelling } from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import { getCartAmountFromLocalStorage, getCartFromLocalStorage, saveCartAmountToLocalStorage, saveCartToLocalStorage } from "@/utils/localStorage";


type Product = {
    id: string;
    img: string;
    desc: string;
    rate: string;
    price: number;
    oldPrice?: number;
    size?: string;
    promo?: number
    amount?: number; // Add this
    productId?: string;
    cartAmount?: number;
}


export interface CartSlice {
    cart: Product[],
    products: Product[],
    cartAmount: number,
    totalPrice: number
}

const localCart = getCartFromLocalStorage();
const localCartAmount = getCartAmountFromLocalStorage(); 

const initialState: CartSlice = {
    cart: localCart || [],
    products: [...newArrivals, ...topSelling],
    cartAmount: localCartAmount | 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const { id, amount, size } = action.payload;
            const currentProduct = state.products.find((item) => item.id === id);
        
            if (!currentProduct) return;
            const existingCartItem = state.cart.find((item) => item.id === id);
        
            if (existingCartItem) {
                existingCartItem.amount += amount;
            } else {
                const newProduct = {
                    productId: uuidv4(),
                    ...currentProduct,
                    amount,
                    size
                };
                state.cart.push(newProduct);
            }
            state.cartAmount = state.cart.reduce((total, item) => {
                return total + (item.amount || 0);
            }, 0);
            saveCartToLocalStorage(state.cart.map((item) => ({
                ...item,
                img: typeof item.img === "string" ? item.img : item.img,
            })));
            saveCartAmountToLocalStorage(state.cartAmount);
        },
        calcCartAmount: (state) => {
            state.cartAmount = state.cart.reduce((total, item) => {
              return total + (item.amount || 0)
            }, 0)
            saveCartAmountToLocalStorage(state.cartAmount);

        },
        increaseAmount: (state, action) => {
            const { productId } = action.payload;
            const item = state.cart.find((item) => item.productId === productId);
            if (item) {
                item.amount = Math.min((item.amount || 0) + 1, 10); // max 10
            }
            state.cartAmount = state.cart.reduce((total, item) => total + (item.amount || 0), 0);
            saveCartToLocalStorage(state.cart);
            saveCartAmountToLocalStorage(state.cartAmount);
        },
        decreaseAmount: (state, action) => {
            const { productId } = action.payload;
            const item = state.cart.find((item) => item.productId === productId);
            if (item) {
                item.amount = Math.max((item.amount || 0) - 1, 1); // min 1
            }
            state.cartAmount = state.cart.reduce((total, item) => total + (item.amount || 0), 0);
            saveCartToLocalStorage(state.cart);
            saveCartAmountToLocalStorage(state.cartAmount);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.productId !== action.payload);
            state.cartAmount = state.cart.reduce((total, item) => total + (item.amount || 0), 0);
            saveCartToLocalStorage(state.cart);
            saveCartAmountToLocalStorage(state.cartAmount);
        },
        calcTotalPrice: (state) => {
            state.totalPrice = state.cart.reduce((total, item) => {
                return total + (item.price * (item.amount || 1));
            }, 0);
        },
    }
})

export const selectCartAmount = (state: RootState) => state.cart.cartAmount;

export const {addProductToCart, increaseAmount, decreaseAmount, removeFromCart, calcTotalPrice} = cartSlice.actions

export default cartSlice.reducer