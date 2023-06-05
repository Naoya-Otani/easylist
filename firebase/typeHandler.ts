import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "./client.js";

const typeHandler = async () => {
  const collectionRef = collection(db, "courses");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach(async (queryDocumentSnapshot) => {
  const documentRef = doc(db, "courses", queryDocumentSnapshot.id);
  const key = "ESTB";
  const value = queryDocumentSnapshot.data()[key];
  const newData = {
    "ESTB": [ value ]
  };
  try {
    await updateDoc(documentRef, newData);
    console.log(`${queryDocumentSnapshot.id}のドキュメントが正常に更新されました。`);
  } catch (error) {
    console.error(`${queryDocumentSnapshot.id}のドキュメントの更新に失敗しました。`, error);
  }
});
}
typeHandler();