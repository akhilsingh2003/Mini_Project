import firebase from "firebase"

const firebaseConfig = {
  
    apiKey: "AIzaSyAHGl_GtuXIIkZAqUvePfJe2ZjmUkZPJMs",
    authDomain: "filmy-74e2a.firebaseapp.com",
    projectId: "filmy-74e2a",
    storageBucket: "filmy-74e2a.appspot.com",
    messagingSenderId: "298719533754",
    appId: "1:298719533754:web:88b57ad649839f859a4083",
    measurementId: "G-PTY4M0FK9P"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
