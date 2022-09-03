// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCr1aMfHKbBHLhU9aLhxFpMbQ-bYbKFCXc',
  authDomain: 'stdmanagement23.firebaseapp.com',
  projectId: 'stdmanagement23',
  storageBucket: 'stdmanagement23.appspot.com',
  messagingSenderId: '411665386259',
  appId: '1:411665386259:web:4a9b786c6d51224d01a8e6',
  measurementId: 'G-13JM5P2S57',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
