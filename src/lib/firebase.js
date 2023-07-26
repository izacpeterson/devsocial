// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { writable } from "svelte/store";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1lX9EuHNB4WDnGqmU-PBJJ_zt74K9wg0",
  authDomain: "devsocial-6e3d0.firebaseapp.com",
  projectId: "devsocial-6e3d0",
  storageBucket: "devsocial-6e3d0.appspot.com",
  messagingSenderId: "503567264687",
  appId: "1:503567264687:web:1bde36b84de718459e9d5a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();

export const currentUser = writable(auth.currentUser);

onAuthStateChanged(auth, async (user) => {
  console.log("Auth state changed");
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();
    user = { ...user, ...userData };

    currentUser.set(user);
  } else {
    currentUser.set(null);
  }
});
