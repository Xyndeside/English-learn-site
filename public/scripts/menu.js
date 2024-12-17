import {auth} from "./firebase/firebaseauth.js";
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';

onAuthStateChanged(auth, (user) => {
    const profileLink = document.getElementById('header__profile');

    if (user) {
        // Если пользователь авторизован
        profileLink.href = '/profile';
    } else {
        // Если пользователь не авторизован
        profileLink.href = '/login';
    }
});

