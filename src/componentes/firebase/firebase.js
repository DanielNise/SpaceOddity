import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBX34NaK0_ejQNOX5_o3o-25vO8a7NiCdo",
    authDomain: "spaceoddity-8d804.firebaseapp.com",
    databaseURL: "https://spaceoddity-8d804.firebaseio.com",
    projectId: "spaceoddity-8d804",
    messagingSenderId: "1022811023857",
    appId: "1:1022811023857:web:99456595d76292e3e07c50",
    measurementId: "G-H4RFNJBZ99",
    storageBucket:"gs://spaceoddity-8d804.appspot.com",
  };

firebase.initializeApp(firebaseConfig);
export default firebase;