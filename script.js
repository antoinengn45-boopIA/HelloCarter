const EMAIL_VALIDE = "antoinecarter431@gmail.com";
const PASS_VALIDE = "Cacaobanane2";

function checkLogin() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (email === EMAIL_VALIDE && pass === PASS_VALIDE) {
        localStorage.setItem('isLoggedIn', 'true');
        showApp();
    } else {
        errorMsg.textContent = "Email ou mot de passe incorrect.";
    }
}

function showApp() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    location.reload(); // Recharge la page pour revenir à l'état initial
}

// Vérification automatique au chargement
window.onload = () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showApp();
    }
};
