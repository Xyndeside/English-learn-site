import {onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';
import {auth} from "./firebase/firebaseauth.js";

const avatarImg = document.querySelector('.profile__main-avatar');
const changeButton = document.querySelector('.profile__main-button');
const fileInput = document.getElementById('avatarInput');

changeButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            avatarImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

const logOutButton = document.getElementById('logOut_btn');

logOutButton.addEventListener('click', async () => {
    try {
        // Выходим из аккаунта
        await signOut(auth);
        console.log('Пользователь вышел из аккаунта');

        // Перенаправляем на страницу логина
        window.location.href = '/login';
    } catch (error) {
        console.error('Ошибка при выходе из аккаунта:', error);
    }
});

const userNameElement = document.getElementById('userName');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Если пользователь авторизован, отображаем его имя
        userNameElement.textContent = user.displayName || 'Пользователь';
    } else {
        // Если пользователь не авторизован, перенаправляем на страницу логина
        window.location.href = '/login';
    }
});