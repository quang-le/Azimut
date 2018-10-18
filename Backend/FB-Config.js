import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCuBYfptDiHmwIcZHxqz0GdjEJ0Bg1Vh6Q",
    authDomain: "azimut-da707.firebaseapp.com",
    databaseURL: "https://azimut-da707.firebaseio.com",
    projectId: "azimut-da707",
    storageBucket: "azimut-da707.appspot.com",
    messagingSenderId: "352928633783"
  };
const fb=firebase.initializeApp(config);
export default fb;
