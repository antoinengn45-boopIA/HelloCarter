document.addEventListener('DOMContentLoaded', () => {
    console.log("HelloCarter Initialisé");
    
    // Exemple d'action : Animation au clic sur le solde
    const balance = document.getElementById('balance');
    balance.addEventListener('click', () => {
        alert("Détails de vos dernières transactions...");
    });
});
