let currentTask = "";

function checkLogin() {
    if(document.getElementById('email').value === "antoinecarter431@gmail.com" && 
       document.getElementById('password').value === "Cacaobanane2") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
        showCaptcha();
    }
}

function showCaptcha() {
    const tasks = [
        "Réécris rapidement : 'HelloCarter Sécurité'",
        "Chante la Reine des Neiges devant la caméra (Vérification visuelle)",
        "Combien font 50 + 50 ?"
    ];
    currentTask = tasks[Math.floor(Math.random() * tasks.length)];
    document.getElementById('captcha-text').textContent = "Défi : " + currentTask;
}

function verifyCaptcha() {
    alert("Défi soumis ! Si la caméra est active, je valide.");
    document.getElementById('captcha-zone').style.display = 'none';
}

function updateBalance() {
    const newSum = document.getElementById('new-balance').value;
    if(newSum) document.getElementById('balance').textContent = newSum;
}

function logout() { location.reload(); }
