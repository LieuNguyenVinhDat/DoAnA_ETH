import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyDl52FDehluN_pDvBqXHIaXm972qDeP04M",
  authDomain: "project-certificate-eth.firebaseapp.com",
  projectId: "project-certificate-eth",
  storageBucket: "project-certificate-eth.appspot.com",
  messagingSenderId: "314293881939",
  appId: "1:314293881939:web:ea76ef84c43b0987a2caa6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
