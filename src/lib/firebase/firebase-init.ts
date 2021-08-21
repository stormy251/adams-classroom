import firebase from 'firebase/app';
import 'firebase/firestore';

// We only want to enable firebase performance tracking for production
if (process.env.performanceMonitoringEnabled) {
  require('firebase/performance');
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // Initialize Performance Monitoring and get a reference to the service
  if (process.browser && process.env.performanceMonitoringEnabled) {
    firebase.performance();
  }
}

export default firebase;
