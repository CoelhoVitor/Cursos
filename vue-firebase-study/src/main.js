import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBTahGrsvO36UZ26fz-PV6VADi0efZIHFE',
  authDomain: 'vue-firebase-study-69535.firebaseapp.com',
  databaseURL: 'https://vue-firebase-study-69535.firebaseio.com',
  projectId: 'vue-firebase-study-69535',
  storageBucket: 'vue-firebase-study-69535.appspot.com',
  messagingSenderId: '334857355736',
  appId: '1:334857355736:web:97d954034a81b0da2ab2ad',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
