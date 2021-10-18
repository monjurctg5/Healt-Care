
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDgRX3fDI1RNqnzE88mkeuskTGYS_xjJg",
  authDomain: "helthcare-b289a.firebaseapp.com",
  projectId: "helthcare-b289a",
  storageBucket: "helthcare-b289a.appspot.com",
  messagingSenderId: "919145538801",
  appId: "1:919145538801:web:c6a571ec5f6e2eb8ddb550"
};

// Initialize Firebase

const initializeAuthentication = ()=>{
    initializeApp(firebaseConfig);

}
export default initializeAuthentication