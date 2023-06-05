import { db } from "./client.js";
import { writeBatch, getDocs, collection, doc, query, where } from "firebase/firestore";

const updateDocID = async () => {
  const q = query(collection(db, "courses"), where("FLDNM", "==", "総合教育科目選択必修（Ⅲ系）Ⅲ系　総合・関連系（自由研究セミナー）"))
  const querySnapshot = await getDocs(q)

  const batch = writeBatch(db);

  for (const document of querySnapshot.docs) {
    const key = "ENTNO";
    const value = document.data()[key];
  
    const newDocRef = doc(collection(db, ("courses")),value.toString());
  
    batch.set(newDocRef, document.data());
    batch.delete(document.ref);
  }
  
  await batch.commit();
}
updateDocID();