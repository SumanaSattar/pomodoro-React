import firebase from 'firebase/app'
import 'firebase/firestore';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBlME9yOFRGXorvvSjEb6s8OPkGWxJy7dY",
    authDomain: "pomodoro-web-app.firebaseapp.com",
    databaseURL: "https://pomodoro-web-app-default-rtdb.firebaseio.com",
    projectId: "pomodoro-web-app",
    storageBucket: "pomodoro-web-app.appspot.com",
    messagingSenderId: "969214221761",
    appId: "1:969214221761:web:56c5895da61f2100bb2340"
});
export {firebaseConfig as firebase}