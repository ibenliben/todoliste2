// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqwk8ZlRr_azw7h4lUeTFVZ3s-ghHYf1Y",
  authDomain: "todo-liste-73ff2.firebaseapp.com",
  projectId: "todo-liste-73ff2",
  storageBucket: "todo-liste-73ff2.appspot.com",
  messagingSenderId: "1022197264241",
  appId: "1:1022197264241:web:dbbe378e9f404c1179d0d0"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

import {
    getFirestore,
    collection,
    doc,
    query,
    where,
    getDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const db = getFirestore(app)
const docRef = doc(db, "todoItems", "1");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}


// const q = query(collection(db, "todoItems"), where("erFerdig", "==", false));
// const querySnapshot = await getDocs(q);
const querySnapshot = await getDocs(collection(db, "todoItems"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
