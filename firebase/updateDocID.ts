import { db } from "./client.js";
import { writeBatch, getDocs, collection, doc, query } from "firebase/firestore";

const updateDocID = async () => {
  const q = query(collection(db, "courses"));
  const querySnapshot = await getDocs(q);
  const filteredDocs = querySnapshot.docs.filter(document => document.id.length >= 6);

  console.log(filteredDocs[1].id.length);

  const batch = writeBatch(db);

  for (const filteredDoc of filteredDocs) {
    if (filteredDoc.id.length == 36) {
      const key = "ENTNO";
      const value: string = filteredDoc.data()[key];
  
      const newDocRef = doc(collection(db, "courses"), value.toString());
  
      batch.set(newDocRef, filteredDoc.data());
      batch.delete(filteredDoc.ref);
    } else {
      console.log(`${filteredDoc.id}のバッチ処理に失敗しました。`);
    }
  }

  await batch.commit();
}

updateDocID();
