/* ============================
   HelloCarter V2 — script.js
   ============================ */

/* --- Identifiants de connexion --- */
const CREDENTIALS = {
  email: "mathieubrussard431@gmail.com",
  password: "chapellemanon5"
};

/* --- Banque de défis CAPTCHA --- */
const CAPTCHAS = [
  { question: "Recopiez exactement : « HelloCarter Sécurité »",   answer: "HelloCarter Sécurité" },
  { question: "Combien font 50 + 50 ?",                           answer: "100" },
  { question: "Quel est le prénom du titulaire du compte ?",       answer: "Antoine" },
  { question: "Tapez le nom de votre banque en majuscules.",       answer: "HELLOCARTER" },
  { question: "Combien font 7 × 8 ?",                             answer: "56" },
  { question: "Quelle est la première lettre de « Sécurité » ?",  answer: "S" }
];

/* --- État interne --- */
let currentCaptcha = null;

/* ============================
   Utilitaires
   ============================ */

/** Affiche uniquement l'écran demandé. */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/** Affiche ou cache un message d'erreur. */
function setError(elementId, visible) {
  const el = document.getElementById(elementId);
  if (el) el.classList.toggle("visible", visible);
}

/** Affiche ou cache un message de succès. */
function setSuccess(elementId, visible) {
  const el = document.getElementById(elementId);
  if (el) el.classList.toggle("visible", visible);
}

/** Formate un nombre en monnaie française (ex : 1 250,00). */
function formatEuros(amount) {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

/* ============================
   Connexion
   ============================ */

function handleLogin() {
  const email    = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
    setError("login-error", false);
    launchCaptcha();
  } else {
    setError("login-error", true);
  }
}

/* ============================
   Captcha
   ============================ */

function launchCaptcha() {
  currentCaptcha = CAPTCHAS[Math.floor(Math.random() * CAPTCHAS.length)];
  document.getElementById("captcha-question").textContent = currentCaptcha.question;
  document.getElementById("captcha-answer").value = "";
  setError("captcha-error", false);
  showScreen("screen-captcha");
}

function handleCaptcha() {
  const answer = document.getElementById("captcha-answer").value.trim();

  if (answer.toLowerCase() === currentCaptcha.answer.toLowerCase()) {
    setError("captcha-error", false);
    showScreen("screen-dashboard");
  } else {
    setError("captcha-error", true);
  }
}

/* ============================
   Dashboard
   ============================ */

function handleUpdateBalance() {
  const raw = parseFloat(document.getElementById("new-balance").value);

  if (isNaN(raw)) return;

  document.getElementById("balance-amount").textContent = formatEuros(raw);
  document.getElementById("new-balance").value = "";

  setSuccess("balance-success", true);
  setTimeout(() => setSuccess("balance-success", false), 3000);
}

function handleLogout() {
  document.getElementById("email").value    = "";
  document.getElementById("password").value = "";
  setError("login-error", false);
  showScreen("screen-login");
}

/* ============================
   Initialisation des listeners
   ============================ */

document.addEventListener("DOMContentLoaded", () => {

  /* Connexion */
  document.getElementById("btn-login")
    .addEventListener("click", handleLogin);

  document.getElementById("password")
    .addEventListener("keydown", e => { if (e.key === "Enter") handleLogin(); });

  /* Captcha */
  document.getElementById("btn-captcha")
    .addEventListener("click", handleCaptcha);

  document.getElementById("captcha-answer")
    .addEventListener("keydown", e => { if (e.key === "Enter") handleCaptcha(); });

  /* Dashboard */
  document.getElementById("btn-update")
    .addEventListener("click", handleUpdateBalance);

  document.getElementById("new-balance")
    .addEventListener("keydown", e => { if (e.key === "Enter") handleUpdateBalance(); });

  document.getElementById("btn-logout")
    .addEventListener("click", handleLogout);
});
