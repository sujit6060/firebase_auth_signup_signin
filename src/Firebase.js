import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaeConfig = {
  apiKey: "AIzaSyDwpwRuO3l5u4cL8NpKXri1oqoF1Yq_wpM",
  authDomain: "react-firebase-auth-564d4.firebaseapp.com",
  projectId: "react-firebase-auth-564d4",
  storageBucket: "react-firebase-auth-564d4.appspot.com",
  messagingSenderId: "80410438924",
  appId: "1:80410438924:web:42a1ea14827e4ebba62d29",
};

const app = initializeApp(firebaeConfig);
export const auth = getAuth(app);
