import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    // reducers is a type of function.
    // we can create other different functions inside reducers

    reducers: {

        addToCart(state, action){
            state.push(action.payload)
        },

        // so whatever products we add in cart, it gets pushed
        // payload comes inside action. payload can be anything

        deleteFromCart(state, action){
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addToCart, deleteFromCart} = cartSlice.actions

export default cartSlice.reducer