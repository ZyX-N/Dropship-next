import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTw3uGWHqszMpn2sXBL9_pgm9-v32IRgI",
  authDomain: "quickbid-e4ff2.firebaseapp.com",
  projectId: "quickbid-e4ff2",
  storageBucket: "quickbid-e4ff2.appspot.com",
  messagingSenderId: "913856757859",
  appId: "1:913856757859:web:1fe652d8ee74125fde7856",
  measurementId: "G-WTS3PKZLZD",
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth();