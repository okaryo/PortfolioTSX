import firebase from 'firebase'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAw9z5IX2M5z8jiyePW8vcbGumAAH-VJsY',
  authDomain: 'okaryo-portfolio.firebaseapp.com',
  databaseURL: 'https://okaryo-portfolio.firebaseio.com',
  projectId: 'okaryo-portfolio',
  storageBucket: 'okaryo-portfolio.appspot.com',
  messagingSenderId: '450460982770',
}

firebase.initializeApp(config)
export const functions = firebase.functions()