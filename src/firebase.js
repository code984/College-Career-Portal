import firebase from "firebase";
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: "college-career-portal.firebaseapp.com",
  databaseURL: "https://college-career-portal-default-rtdb.firebaseio.com",
  projectId: "college-career-portal",
  storageBucket: "college-career-portal.appspot.com",
  messagingSenderId: "997662793928",
  appId: "1:997662793928:web:c3e6bf11af9b6f45fb45fd"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default database;