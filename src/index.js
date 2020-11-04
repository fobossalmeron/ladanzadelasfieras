import React from "react";
import ReactDOM from 'react-dom';
import App from 'components/container/app';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyDJgDu32_cbJgIX21BdRkaJrJxS0bvjjK8",
  authDomain: "ladanzadelasfieras-pelicula.firebaseapp.com",
  databaseURL: "https://ladanzadelasfieras-pelicula.firebaseio.com",
  projectId: "ladanzadelasfieras-pelicula",
  storageBucket: "ladanzadelasfieras-pelicula.appspot.com",
  messagingSenderId: "362167050272",
  appId: "1:362167050272:web:5c7ad7a2caa3c665"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Performance Monitoring and get a reference to the service
const perf = firebase.performance();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
