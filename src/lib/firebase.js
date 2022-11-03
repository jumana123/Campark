import { initializeApp, getApps, getApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// import { browser } from "$app/env";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth"
//import { firestore } from "firebase-admin";
//require("firebase/firestore");

// const firebase = require("firebase");
// // Required for side-effects
//require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDcvUboYOdBdXyjZizf0gIZFkpXkvJZq7o",
  authDomain: "campark7-54cfc.firebaseapp.com",
  databaseURL: "https://campark7-54cfc-default-rtdb.firebaseio.com",
  projectId: "campark7-54cfc",
  storageBucket: "campark7-54cfc.appspot.com",
  messagingSenderId: "892684328727",
  appId: "1:892684328727:web:9304503fdfc099af01e152",
  measurementId: "G-7CPN5ZVFPV"
};

const app = initializeApp(firebaseConfig, "CLIENT");
export const auth = getAuth(app);
export const db = getFirestore(app);
//db.settings({ timestampsInSnapshots: true});


setPersistence(auth, inMemoryPersistence)
