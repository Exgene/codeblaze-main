import { db } from "$lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const load = async () => {
    const productSnapshot = await getDocs(collection(db, "products"));
    const products = productSnapshot.docs.map((doc) => doc.data());
    return {
        body: {
            products,
        },
    };
}