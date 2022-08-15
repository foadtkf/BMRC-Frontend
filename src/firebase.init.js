import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB3gT3Vbina_b0kAHSrAT2SsPVmvCHXaz8",
  authDomain: "bmrc-chat.firebaseapp.com",
  databaseURL: "https://bmrc-chat.firebaseio.com",
  projectId: "bmrc-chat",
  storageBucket: "bmrc-chat.appspot.com",
  messagingSenderId: "356624821473",
  appId: "1:356624821473:web:5c145a55f20a47f5691ba0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth