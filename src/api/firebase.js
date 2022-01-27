import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
let app;
const firebaseConfig = {
  apiKey: "AIzaSyBQa1YvzIGovz_sKztZWIiaVrEAm14dJhc",
  authDomain: "hulu-clone-5b910.firebaseapp.com",
  databaseURL:
    "https://hulu-clone-5b910-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "hulu-clone-5b910",
  storageBucket: "hulu-clone-5b910.appspot.com",
  messagingSenderId: "617079325377",
  appId: "1:617079325377:web:14ca97ec3a2cc5717b4a40",
  measurementId: "G-1ZMNXJ48D2",
};

// console.log("con",firebaseConfig)

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export const analytics = getAnalytics(app);

export default app;
