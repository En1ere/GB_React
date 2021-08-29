import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCD7QtIlFp2Anb1CDzWHunglCaA-D7p9pA",
  authDomain: "social-network-gb.firebaseapp.com",
  databaseURL:
    "https://social-network-gb-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "social-network-gb",
  storageBucket: "social-network-gb.appspot.com",
  messagingSenderId: "432415658300",
  appId: "1:432415658300:web:bd6113bdb4159f4d330e39",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();
