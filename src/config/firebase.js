import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAQs1pT3G-mTjDq8CPnoJlCgMrNUT8WKhI",
  authDomain: "otp-checking-51274.firebaseapp.com",
  projectId: "otp-checking-51274",
  storageBucket: "otp-checking-51274.appspot.com",
  messagingSenderId: "192127017545",
  appId: "1:192127017545:web:2a8d701662fce61f211598",
  measurementId: "G-WGQ67SCLKZ"
};


export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export const auth = getAuth();