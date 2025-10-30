// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqupQgQwXmiaKj1OVuEpuisfHxIt2x2Vs",
  authDomain: "msmthethwa-31b63.firebaseapp.com",
  projectId: "msmthethwa-31b63",
  storageBucket: "msmthethwa-31b63.firebasestorage.app",
  messagingSenderId: "808931516001",
  appId: "1:808931516001:web:50e4a984c8f8869a1b9420",
  measurementId: "G-T8WQNVV9DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Initialize Analytics if supported
let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.log("Analytics not supported in this environment");
}

// Make Firebase services globally available
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseStorage = storage;
window.firebaseAnalytics = analytics;

console.log("Firebase initialized successfully");
