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
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Enable analytics if available
if (firebase.analytics) {
  firebase.analytics();
}

// Export for use in other scripts
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseStorage = storage;
