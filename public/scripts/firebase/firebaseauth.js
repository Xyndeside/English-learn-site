// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {onAuthStateChanged, updateProfile} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5au4DJEEnyV22f1NfhPLypbCv9MkVmeg",
    authDomain: "pesdaboliki-app.firebaseapp.com",
    projectId: "pesdaboliki-app",
    storageBucket: "pesdaboliki-app.firebasestorage.app",
    messagingSenderId: "44445144521",
    appId: "1:44445144521:web:7fae8e78ddc476c1c8c418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Вы успешно вошли в аккаунт!");
        window.location.href = "/profile"; // Переход на страницу профиля
    } catch (error) {
        alert(`Ошибка входа: ${error.message}`);
    }
}

export async function signUp(login, email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Регистрация прошла успешно!");

        updateProfile(userCredential.user, {
            displayName: login, // Указываем имя пользователя
        });

        window.location.href = "/profile"; // Переход на страницу профиля
    } catch (error) {
        alert(`Ошибка регистрации: ${error.message}`);
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Пользователь вошел:", user.email);
    } else {
        console.log("Пользователь не авторизован.");
    }
});