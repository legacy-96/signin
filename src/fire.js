import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAhVEIW8JuD75iwxz4xam671nLfdwmh96Y",
    authDomain: "singin-page.firebaseapp.com",
    projectId: "singin-page",
    storageBucket: "singin-page.appspot.com",
    messagingSenderId: "1048139805900",
    appId: "1:1048139805900:web:d4f152ab9f7245d769fe69"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;