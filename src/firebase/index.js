import firebase from "firebase/app";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyDvORCmva3zdNm1Vsof9c4SGtGNofGfWOs",
  authDomain: "firegram-f7e0a.firebaseapp.com",
  databaseURL: "https://firegram-f7e0a.firebaseio.com",
  projectId: "firegram-f7e0a",
  storageBucket: "firegram-f7e0a.appspot.com",
  messagingSenderId: "904176640235",
  appId: "1:904176640235:web:6997361918b63fb6819eae",
};
export default firebase.initializeApp(firebaseConfig);
