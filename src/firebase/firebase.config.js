import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYJpmdaBet0LaHT2iijM56s-A_vWTqg1A",
  authDomain: "coffee-store-71.firebaseapp.com",
  projectId: "coffee-store-71",
  storageBucket: "coffee-store-71.appspot.com",
  messagingSenderId: "790503665290",
  appId: "1:790503665290:web:a52e58be08989a3239c773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
