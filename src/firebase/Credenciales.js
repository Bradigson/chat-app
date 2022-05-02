// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5H3K8rMaSznpBsjYPmydh5EiEqvCsUY0",
  authDomain: "chat-app-9b4a8.firebaseapp.com",
  projectId: "chat-app-9b4a8",
  storageBucket: "chat-app-9b4a8.appspot.com",
  messagingSenderId: "314382923224",
  appId: "1:314382923224:web:936845d285394c3bd06ead"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;