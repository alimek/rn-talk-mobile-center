import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBltMtmXk_UPHc8gfphHDkJABdIaLN_Jzk",
  authDomain: "fb-pgs-lt.firebaseapp.com",
  databaseURL: "https://fb-pgs-lt.firebaseio.com",
  projectId: "fb-pgs-lt",
  storageBucket: "fb-pgs-lt.appspot.com",
  messagingSenderId: "370503643438"
};

export default firebase.initializeApp(config);
