import firebase from 'firebase/app'
import 'firebase/firestore'
import * as Rebase from "re-base";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
})

const db = app.firestore()
const base = Rebase.createClass(db);

export {db, base}
