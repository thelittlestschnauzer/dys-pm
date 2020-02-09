import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBmg7EWC0W7I_ZjxM_ue-yRD1YtD00SreU",
  authDomain: "dys-pm.firebaseapp.com",
  databaseURL: "https://dys-pm.firebaseio.com",
  projectId: "dys-pm",
  storageBucket: "dys-pm.appspot.com",
  messagingSenderId: "465248405222",
  appId: "1:465248405222:web:6b285001c3bc8c7c1fdd27"
});

export { firebaseConfig as firebase };