import { db } from "$lib/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const load = async ({ params }) => {
  //write a firebase query to get the product with the id of params.productId
  const q = query(collection(db, "products"));
  const productSnapshot = await getDocs(q);
  const products = productSnapshot.docs.map((doc) => {
    return doc.data().Imageurl == params.imageURL ? doc.data() : null;
  });
  return {
    body: {
      products,
    },
  };
};
