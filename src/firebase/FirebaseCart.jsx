import { fireDB } from "./FirebaseConfig";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";

// ----- Storing and deleting cart items for each user using firebase -----

// save or update a cart item
export const saveCartItem = async (userId, item) => {
    const itemRef = doc(fireDB, 'userSpecificCart', userId, 'cartItems', item.id);
    await setDoc(itemRef, item, {merge: true});
}

// Delete a cart item
export const deleteCartItem = async (userId, itemId) => {
    const itemRef = doc(fireDB, 'userSpecificCart', userId, 'cartItems', itemId);
    await deleteDoc(itemRef);
};
  
// Get all cart items for a user
export const getCartItems = async (userId) => {
    const itemsCol = collection(fireDB, 'userSpecificCart', userId, 'cartItems');
    const snapshot = await getDocs(itemsCol);
    return snapshot.docs.map(doc => doc.data());
};