import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB8509fif-9SHxgvVIXzCbiCSodWBFLKCY",
  authDomain: "vuex4-57dc1.firebaseapp.com",
  projectId: "vuex4-57dc1",
  storageBucket: "vuex4-57dc1.appspot.com",
  messagingSenderId: "595110057541",
  appId: "1:595110057541:web:8725f3a80186ff1af2f52c"
};

//initialize firebase
initializeApp(firebaseConfig)

//initialize firebase auth
const auth = getAuth()

export { auth }
