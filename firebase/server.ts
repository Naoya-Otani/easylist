import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';


const app = initializeApp({
  credential: cert(
    // 環境変数から認証情報を取得
    JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)
  ),
  databaseURL: "keio-easylist.asia-northeast1.firebasedatabase.app"
});


export const adminDB = getFirestore(app);