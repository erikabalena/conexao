import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
    apiKey: "AIzaSyDaOp2Qih1-40PN3TsHJyhbLnVcLCGvEzQ",
    authDomain: "task-3e16f.firebaseapp.com",
    projectId: "task-3e16f",
    storageBucket: "task-3e16f.appspot.com",
    messagingSenderId: "360993153635",
    appId: "1:360993153635:web:4698cd033277de125a4e56"
  };
  const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
