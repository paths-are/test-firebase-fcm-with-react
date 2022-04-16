// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//   apiKey: "AIzaSyAjWIJe9AaL6fDZVn9tRajF-BUexEPFZyA",
//   authDomain: "react-notif-40228.firebaseapp.com",
//   projectId: "react-notif-40228",
//   storageBucket: "react-notif-40228.appspot.com",
//   messagingSenderId: "790644971731",
//   appId: "1:790644971731:web:dc0c5d007d2b961af3dc26"
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
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
