import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getAuth,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {

apiKey: "AIzaSyBFJH3LRuaS8yc6iDsXXcwACzpddA8lr5c",
authDomain: "habilidadx1cafe.firebaseapp.com",
projectId: "habilidadx1cafe",
storageBucket: "habilidadx1cafe.firebasestorage.app",
messagingSenderId: "113035104487",
appId: "1:113035104487:web:1427b58f5263136d321242",
measurementId: "G-KTCF00V3VC"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth,(user)=>{

if(!user){

window.location.href="login.html"

}

});
