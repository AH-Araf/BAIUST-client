// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxOgRjIIIvNPvKdK0wqqMmkrIbjEeXONg",
  authDomain: "baiust-bangladesh.firebaseapp.com",
  projectId: "baiust-bangladesh",
  storageBucket: "baiust-bangladesh.appspot.com",
  messagingSenderId: "808288488964",
  appId: "1:808288488964:web:6c534dac7b0277be6bef51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;