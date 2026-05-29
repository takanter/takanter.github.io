importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOx8X6gN-9AzW5FLNIMw7_VsDpnto609w",
  authDomain: "takanter-com.firebaseapp.com",
  projectId: "takanter-com",
  storageBucket: "takanter-com.firebasestorage.app",
  messagingSenderId: "807188456084",
  appId: "1:807188456084:web:175174812f13c0dc064a81",
  measurementId: "G-698G6ERRM3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = firebase.messaging();

// Optional: Custom background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Menerima notifikasi di background: ', payload);
  
  // Title dan Body dari pesan Firebase
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/Icon-192.png' // Icon aplikasi lo
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
