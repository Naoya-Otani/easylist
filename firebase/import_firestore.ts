import admin from "firebase-admin";
import importer from "firestore-export-import";
import fs from "fs";

// Firebase秘密鍵JSONファイルを読み込み認証情報としてセットする
const serviceAccount = JSON.parse(fs.readFileSync('./secret/secret-key.json', 'utf8'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
// data下のディレクトリ以下のファイルを全部対象にする
fs.readdir('./data/', async function (err, files) {
  if (err) {
    throw err;
  }
  for (const file of files) {
    try {
      // インポート
      await importer.restore('./data/' + file);
    } catch (e) {
      // 1つのファイルが失敗しても処理を止めない
      console.log(e);
    }
  }
});