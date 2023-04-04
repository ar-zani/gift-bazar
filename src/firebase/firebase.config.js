// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIjTBGiD46V8hiblXeZAVzHJKq02veTPM",
  authDomain: "gift-bazar.firebaseapp.com",
  projectId: "gift-bazar",
  storageBucket: "gift-bazar.appspot.com",
  messagingSenderId: "203328650523",
  appId: "1:203328650523:web:bc32a7c1c11d2deb6aa7be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;