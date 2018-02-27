import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
    apiKey: "AIzaSyBs7VM1SUqWyLZVDSuFazk3LcSfIerp8GM",
    authDomain: "sharetaxi-78289.firebaseapp.com",
    databaseURL: "https://sharetaxi-78289.firebaseio.com",
    projectId: "sharetaxi-78289",
    storageBucket: "sharetaxi-78289.appspot.com",
    messagingSenderId: "599684388499"
});

export var db = firebase.firestore(app);
var base = Rebase.createClass(db);

export default base;