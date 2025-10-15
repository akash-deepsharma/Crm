import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFqJiqs1ONpsf_9EqOisRU2yUd2XiT_KM",
  authDomain: "alphonic-crm.firebaseapp.com",
  projectId: "alphonic-crm",
  storageBucket: "alphonic-crm.firebasestorage.apps",
  messagingSenderId: "1021459249309",
  appId: "1:1021459249309:web:f87ef14c8c0183f3d0bc74",  
  measurementId: "G-YH92N4DKEJ"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
    alert(`Welcome ${result.user.displayName}!`);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    alert("Failed to sign in with Google.");
  }
};
