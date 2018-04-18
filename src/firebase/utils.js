import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBBngH5y1nnVBApZjrr76bSeamNNl8rgnA",
  authDomain: "janus-se.firebaseapp.com",
  databaseURL: "https://janus-se.firebaseio.com",
  projectId: "janus-se",
  storageBucket: "janus-se.appspot.com",
  messagingSenderId: "137613593993"
});

function connect(path) {
  return app.database().ref(path);
}

function auth() {
  return app.auth();
}

export default {connect, auth};