import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1wGDRMJTFDxnE2P_4L7V5u9S9wZtEl8Y",
  authDomain: "zootheme-7b501.firebaseapp.com",
  projectId: "zootheme-7b501",
  storageBucket: "zootheme-7b501.appspot.com",
  messagingSenderId: "453390047022",
  appId: "1:453390047022:web:45903da2fdeebe3269ccbf"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
