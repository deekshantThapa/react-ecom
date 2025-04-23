import { createSlice } from "@reduxjs/toolkit";
import { saveCartItem, deleteCartItem } from "../firebase/FirebaseCart";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    // NOTE: reducers is a type of function.
    // -- we can create other different functions inside reducers

    reducers: {

        addToCart(state, action){
            const existingItem = state.find(item => item.id === action.payload.id);
            let updatedItem;

            if (existingItem) {
                // Increase quantity
                existingItem.quantity += action.payload.quantity || 1;
                updatedItem = existingItem;
            } 
            else {
                // Add new item with quantity 1
                const newItem = { ...action.payload, quantity: action.payload.quantity || 1 };
                state.push(newItem);
                updatedItem = newItem;
            }

            const user = JSON.parse(localStorage.getItem("user"));
            const userId = user?.user?.uid;
            if (userId) {
                saveCartItem(userId, updatedItem);
            }

        },

        // -- so whatever products we add in cart, it gets pushed
        // -- 'payload' comes inside action. 'payload' can be anything

        deleteFromCart(state, action) {
            const newState = state.filter(item => item.id !== action.payload.id);
      
            const user = JSON.parse(localStorage.getItem("user"));
            const userId = user?.user?.uid;
            if (userId) {
              deleteCartItem(userId, action.payload.id);
            }
      
            return newState;
        },

        setCartFromFirebase(state, action) {
            return action.payload;
        }
    }
})

export const {addToCart, deleteFromCart, setCartFromFirebase} = cartSlice.actions

export default cartSlice.reducer