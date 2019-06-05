import { firebase } from '@firebase/app'
import '@firebase/firestore'
import '@firebase/storage'

firebase.initializeApp({
  apiKey: 'AIzaSyD227eMSevPC6dXCNqrHS1y8QQCief0uWo',
  authDomain: 'zoran-d18d9.firebaseapp.com',
  databaseURL: 'https://zoran-d18d9.firebaseio.com',
  projectId: 'zoran-d18d9',
  storageBucket: 'zoran-d18d9.appspot.com',
  messagingSenderId: '456973914883',
  appId: '1:456973914883:web:109044fd89b32265'
})

export const db = firebase.firestore()
export const storage = firebase.storage().ref()
