import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    const items = [];
    const itemsRef = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(itemsRef);
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  };

  export const addItem = async (userId, item) => {
    const itemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  };