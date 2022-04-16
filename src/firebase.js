import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// var firebaseConfig = {
//   apiKey: "AIzaSyAjWIJe9AaL6fDZVn9tRajF-BUexEPFZyA",
//   authDomain: "react-notif-40228.firebaseapp.com",
//   projectId: "react-notif-40228",
//   storageBucket: "react-notif-40228.appspot.com",
//   messagingSenderId: "790644971731",
//   appId: "1:790644971731:web:dc0c5d007d2b961af3dc26",
// };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH6r-5P47nSAMF2e5MX9mG_jlP_GJijS0",
  authDomain: "nextjsprojecttemplate.firebaseapp.com",
  // databaseURL: "https://nextjsprojecttemplate-default-rtdb.firebaseio.com",
  projectId: "nextjsprojecttemplate",
  storageBucket: "nextjsprojecttemplate.appspot.com",
  messagingSenderId: "797170251988",
  appId: "1:797170251988:web:8ce84d6ce93f62efbd2341",
  // measurementId: "G-CMCNRE5YYG"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

const VAPID_KEY =
  "BCV_vRBnJ11osR-x85XXcpXCfgPEpsXqTQJWd3xfKa2vZ1jTbywsS5VaqnETzhWh2pPPm3xjgKRLyiXzsepZZhc";

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey: VAPID_KEY,
    // "BHGPr3pJQSflJAJtTIVXbmcEXlPV_HP29TZQRcqrGCN10gKIa-ojIJmtvM9kQGcsNKsWIA6ezKFG8Bd6LTjaVc0",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
