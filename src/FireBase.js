import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCseTXXLiCLrP-Bf6JtdVR5ilGDs80WX78",
  authDomain: "fir-cs-66492.firebaseapp.com",
  projectId: "fir-cs-66492",
  storageBucket: "fir-cs-66492.appspot.com",
  messagingSenderId: "334250939293",
  appId: "1:334250939293:web:433cc4aef41c1aff625574",
  measurementId: "G-EB9SYMXHEK",
  databaseURL: "https://fir-cs-66492-default-rtdb.firebaseio.com"
};

// Initialize Firebase app and export it
export const app = initializeApp(firebaseConfig);
