import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig: FirebaseOptions = JSON.parse(
  process.env.REACT_APP_FIREBASE as string
);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (process.env.REACT_APP_ENV === "develop") {
  analytics.app.automaticDataCollectionEnabled = false;
}

export { analytics };
