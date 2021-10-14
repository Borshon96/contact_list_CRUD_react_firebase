import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCZaMstMP0v965NuZkjGDbSaSPL8JK3yEE",
  authDomain: "react-contact-5124d.firebaseapp.com",
  projectId: "react-contact-5124d",
  storageBucket: "react-contact-5124d.appspot.com",
  messagingSenderId: "497090950847",
  appId: "1:497090950847:web:d7d59bc690279f68d6f80a",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();