// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqjRIvU6B-EvJp8mByEuZWIVzuWV_aDO0",
  authDomain: "floui-mypo.firebaseapp.com",
  projectId: "floui-mypo",
  storageBucket: "floui-mypo.appspot.com",
  messagingSenderId: "222918073750",
  appId: "1:222918073750:web:907d21978ec768265091b7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };
