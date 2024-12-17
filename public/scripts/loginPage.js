import {signIn, signUp} from "./firebase/firebaseauth.js";

window.switchToRegister = function() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.add('active');
}

window.switchToLogin = function() {
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

window.handleLogin = async function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const user = await signIn(email, password);
        alert(`Добро пожаловать, ${user.email}!`);
        window.location.href = '/profile'; // Перенаправление на профиль
    } catch (error) {
        alert(`Ошибка входа: ${error.message}`);
    }
}

window.handleRegister = async function() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const login = document.getElementById('register-nickname').value;

    try {
        const user = await signUp(login, email, password);
        alert(`Регистрация успешна! Добро пожаловать, ${user.email}!`);
        window.location.href = '/profile'; // Перенаправление на профиль
    } catch (error) {
        alert(`Ошибка регистрации: ${error.message}`);
    }
}

window.comeBack = async function() {
    window.location.href = '/';
}