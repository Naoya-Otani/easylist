import { initializeApp, getApps } from 'firebase/app';

// 必要な機能をインポート
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCck0439Iu81OEWhAEhr8ceut3JP_Zrt9w",
  authDomain: "keio-easylist.firebaseapp.com",
  projectId: "keio-easylist",
  storageBucket: "keio-easylist.appspot.com",
  messagingSenderId: "1080727221889",
  appId: "1:1080727221889:web:52ff1064f84d7a1dd4bf80",
  measurementId: "G-J1T2TBE0XW"
};

const app = initializeApp(firebaseConfig);

// 他ファイルで使うために機能をエクスポート
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth();
export const funcions = getFunctions();