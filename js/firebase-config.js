// Firebase Console → プロジェクトの設定 → マイアプリ で表示される
// firebaseConfig の中身をそのまま下に貼り付けてください。
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "ここに貼り付け",
  authDomain: "ここに貼り付け",
  projectId: "ここに貼り付け",
  storageBucket: "ここに貼り付け",
  messagingSenderId: "ここに貼り付け",
  appId: "ここに貼り付け",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
