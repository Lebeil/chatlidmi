import firebase from 'firebase/app'
import 'firebase/firestore'
import * as Rebase from "re-base";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBH53pNY2kLaY3e20mgcs8-PuJe_VhyZqs",
    authDomain: "chat-lidmi.firebaseapp.com",
    databaseURL: "https://chat-lidmi.firebaseio.com",
    projectId: "chat-lidmi",
    storageBucket: "chat-lidmi.appspot.com",
    messagingSenderId: "17873806160"
})

const db = app.firestore()
const base = Rebase.createClass(db);

export {db, base}
