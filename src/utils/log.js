import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCEv0iQakocuv-8W4RjMPgS25f8peM8-0Q",
  authDomain: "portfolio-ee70a.firebaseapp.com",
  projectId: "portfolio-ee70a",
  storageBucket: "portfolio-ee70a.appspot.com",
  messagingSenderId: "601125799994",
  appId: "1:601125799994:web:2583bc213118aa799f4d03",
  measurementId: "G-SLFF626J3M"
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
