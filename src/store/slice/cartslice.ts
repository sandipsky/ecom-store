import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../models/cart";

export interface CartState {
    cartItems: CartItem[];
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItems: [] } as CartState,
    reducers: {
        addItem: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity++;
            }
            else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseQty: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            }
        },
        clearCart: state => {
            state.cartItems = [];
        },
    },
});


export const { addItem, decreaseQty, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;