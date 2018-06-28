import Rebase from 're-base'
import Firebase from 'firebase/app' 
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
  const init = {
    apiKey: 'AIzaSyDk7clHpTIgyGUbY7OPso-e4EgFyN8jJpI',
    authDomain: 'hidroconbr.firebaseapp.com',
    databaseURL: 'https://hidroconbr.firebaseio.com',
    projectId: 'hidroconbr',
    storageBucket: 'hidroconbr.appspot.com',
    messagingSenderId: '393287623309'
  };
  
  const app = Firebase.initializeApp(init);
  const Base = Rebase.createClass(app.database())
 
  export const auth = Firebase.auth()
  export const storage = app.storage()
  export default Base
