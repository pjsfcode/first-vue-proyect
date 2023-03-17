import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAkcoVOTcppwH0RUtGvoztBcF_aH2Ohsdo",
	authDomain: "first-vue3-proyect.firebaseapp.com",
	projectId: "first-vue3-proyect",
	storageBucket: "first-vue3-proyect.appspot.com",
	messagingSenderId: "214602850638",
	appId: "1:214602850638:web:56d531c1c20e4ac8b73e1f",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
