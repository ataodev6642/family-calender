// Firebase Console → プロジェクトの設定 → マイアプリ で表示される
// firebaseConfig の中身をそのまま下に貼り付けてください。
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDa4wZS2BhWviEQ-pMX9Fxkq5uXoNgVMZk",
  authDomain: "family-calender-e5eec.firebaseapp.com",
  projectId: "family-calender-e5eec",
  storageBucket: "family-calender-e5eec.firebasestorage.app",
  messagingSenderId: "1079640161123",
  appId: "1:1079640161123:web:e389b56fe7c418458cf156",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
