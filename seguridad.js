import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
onAuthStateChanged,
signOut
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


const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSYad30WQfN8Pwp1y2Squcylhy08sPEvqFinOeI58JPm1q3mQh3dSh6ezzWqfUai5ohdCAoEgTn5gJi/pub?gid=0&single=true&output=csv";


onAuthStateChanged(auth, async (user) => {

if(!user){

window.location.href = "login.html";
return;

}

const emailUsuario = user.email.toLowerCase();


try{

const respuesta = await fetch(sheetURL);
const datos = await respuesta.text();

const filas = datos.split("\n").slice(1);

let accesoPermitido = false;

filas.forEach(fila => {

const columnas = fila.split(",");

const email = columnas[0]?.trim().toLowerCase();
const estado = columnas[3]?.trim().toLowerCase();

if(email === emailUsuario && estado === "activo"){

accesoPermitido = true;

}

});


if(!accesoPermitido){

alert("Tu membresía no está activa o ya venció.");

signOut(auth);

window.location.href = "login.html";

}

}catch(error){

alert("Error verificando tu acceso.");

signOut(auth);

window.location.href = "login.html";

}

});
