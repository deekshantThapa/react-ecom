import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    // NOTE: reducers is a type of function.
    // -- we can create other different functions inside reducers

    reducers: {

        addToCart(state, action){
            const existingItem = state.find(item => item.id === action.payload.id);

            if (existingItem) {
                // Increase quantity
                existingItem.quantity += 1;
            } 
            else {
                // Add new item with quantity 1
                state.push({ ...action.payload, quantity: 1 });
            }

        },

        // -- so whatever products we add in cart, it gets pushed
        // -- payload comes inside action. payload can be anything

        deleteFromCart(state, action){
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addToCart, deleteFromCart} = cartSlice.actions

export default cartSlice.reducer