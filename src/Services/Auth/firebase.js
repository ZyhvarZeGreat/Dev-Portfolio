import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'



const app =  firebase.initializeApp({
    apiKey: "AIzaSyBaCUGxesThIpN0LRO-maQNzYoXp9ByMxE",

    authDomain: "urcrypto-388db.firebaseapp.com",
  
    databaseURL: "https://urcrypto-388db-default-rtdb.firebaseio.com",
  
    projectId: "urcrypto-388db",
  
    storageBucket: "urcrypto-388db.appspot.com",
  
    messagingSenderId: "21532865952",
  
    appId: "1:21532865952:web:27186e3f110cec7e4220c5",
  
    measurementId: "G-TJ1XZBF2BB"
  
})

export const auth  =   app.auth()
export default app
