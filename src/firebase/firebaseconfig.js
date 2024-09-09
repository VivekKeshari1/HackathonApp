// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoGWGQRQDbOCx_XRuXQg5BGx9nrZ8KGL8",
  authDomain: "hackathonapp-eab05.firebaseapp.com",
  databaseURL: "https://hackathonapp-eab05-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hackathonapp-eab05",
  storageBucket: "hackathonapp-eab05.appspot.com",
  messagingSenderId: "326891831922",
  appId: "1:326891831922:web:ec63eb4f3d3c0a3f0878eb",
  measurementId: "G-ZBBNRQ37DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;