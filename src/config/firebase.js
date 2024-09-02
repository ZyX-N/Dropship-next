import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyAQs1pT3G-mTjDq8CPnoJlCgMrNUT8WKhI",
//   authDomain: "otp-checking-51274.firebaseapp.com",
//   projectId: "otp-checking-51274",
//   storageBucket: "otp-checking-51274.appspot.com",
//   messagingSenderId: "192127017545",
//   appId: "1:192127017545:web:2a8d701662fce61f211598",
//   measurementId: "G-WGQ67SCLKZ"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCNVz2qTSKk_zJzGiI1YiD62DynOtWA4UA",
//   authDomain: "mobile-otp-tnv-mis.firebaseapp.com",
//   projectId: "mobile-otp-tnv-mis",
//   storageBucket: "mobile-otp-tnv-mis.appspot.com",
//   messagingSenderId: "321900795407",
//   appId: "1:321900795407:web:6505e7d693b75921cc357a",
//   measurementId: "G-GK093YPSML"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyChao5rSygIHNVS8o_faT3eu8isKCK6aos",
//   authDomain: "tnv-mis.firebaseapp.com",
//   projectId: "tnv-mis",
//   storageBucket: "tnv-mis.appspot.com",
//   messagingSenderId: "856540032296",
//   appId: "1:856540032296:web:76fc2bd60c8649051bb41d",
//   measurementId: "G-4Z0N1JKQNT"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCnxrfAgLv54buAN_VvRKXRFG2BhFVzWTI",
//   authDomain: "test-2-38999.firebaseapp.com",
//   projectId: "test-2-38999",
//   storageBucket: "test-2-38999.appspot.com",
//   messagingSenderId: "769679344108",
//   appId: "1:769679344108:web:16f4cc3a7c822e007ac0c9",
//   measurementId: "G-7DB8XXJ51F"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyAqvPM2v73Z5dtmc6T1nAvyptHo3DgrO4E",
//   authDomain: "tnv-mis-f99d8.firebaseapp.com",
//   projectId: "tnv-mis-f99d8",
//   storageBucket: "tnv-mis-f99d8.appspot.com",
//   messagingSenderId: "1066413805132",
//   appId: "1:1066413805132:web:5da473a643b6a827dc2ee9",
//   measurementId: "G-KRZRZK25RZ"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDTw3uGWHqszMpn2sXBL9_pgm9-v32IRgI",
  authDomain: "quickbid-e4ff2.firebaseapp.com",
  projectId: "quickbid-e4ff2",
  storageBucket: "quickbid-e4ff2.appspot.com",
  messagingSenderId: "913856757859",
  appId: "1:913856757859:web:1fe652d8ee74125fde7856",
  measurementId: "G-WTS3PKZLZD",
};

console.log(firebaseConfig);

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export const auth = getAuth();