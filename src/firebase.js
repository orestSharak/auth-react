import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = app.auth();
export default app;


// local data :

// REACT_APP_FIREBASE_API_KEY=AIzaSyACVqMD6osjp2c9-n2YUUW9bFfbeLo9qNs
// REACT_APP_FIREBASE_AUTH_DOMAIN=auth-development-cf8e3.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=auth-development-cf8e3
// REACT_APP_FIREBASE_STORAGE_BUCKET=auth-development-cf8e3.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=821250853747
// REACT_APP_FIREBASE_APP_ID=1:821250853747:web:43d1ee432a701802cd1306