# HelloCarter V2

> Interface bancaire fictive — Design Cyber-Banking · Authentification · Défis de sécurité

---

## Aperçu

**HelloCarter** est une simulation d'interface bancaire en front-end pur (HTML / CSS / JS vanilla).  
Elle intègre un système de connexion, un défi de sécurité (CAPTCHA maison) et un tableau de bord personnel.

Aucune dépendance externe, aucun framework. Deux polices Google Fonts chargées via CDN.

---

## Structure du projet

```
HelloCarter/
├── index.html   — Structure HTML des 3 écrans
├── style.css    — Design cyber-banking (dark, Space Mono + Syne)
├── script.js    — Logique : login, captcha, solde, déconnexion
└── README.md    — Ce fichier
```

---

## Fonctionnalités

### Connexion
- Vérification de l'email et du mot de passe (comparaison côté client)
- Message d'erreur si les identifiants sont incorrects
- Validation via la touche `Entrée`

### Défi de sécurité (CAPTCHA)
- 6 défis aléatoires tirés à la volée à chaque connexion
- Types de défis : recopie de texte, calcul mental, question personnelle
- La réponse est comparée sans tenir compte de la casse
- Message d'erreur si la réponse est fausse

### Tableau de bord
- Affichage du solde formaté en notation française (`1 250,00 €`)
- Modification du solde via un champ numérique
- Message de confirmation visible 3 secondes après la mise à jour
- Bouton de déconnexion qui réinitialise la session

---

## Identifiants de test

| Champ         | Valeur                          |
|---------------|---------------------------------|
| Email         | `mathieubrussard431@gmail.com`    |
| Mot de passe  | `chapellemanon5`                  |

> ⚠️ Ces identifiants sont visibles dans `script.js`. Il s'agit d'un projet fictif — ne jamais stocker de vrais mots de passe en clair dans du JavaScript côté client.

---

## Lancement

Ouvrir `index.html` directement dans un navigateur. Aucun serveur requis.

```bash
# Ou via un serveur local léger (optionnel)
npx serve .
python3 -m http.server 8080
```

---

## Design

| Élément         | Choix                        |
|-----------------|------------------------------|
| Palette         | `#060a10` fond · `#00ffb4` accent · `#ff4d6d` danger |
| Typographie     | **Syne** (titres) + **Space Mono** (données, labels) |
| Ambiance        | Cyber-banking · grille matricielle · terminal vert   |
| Responsive      | Adapté mobile (`max-width: 480px`)                   |

---

## Nouveautés vs V1

- Architecture multi-écrans (login → captcha → dashboard) au lieu d'un bloc unique
- CAPTCHA avec validation réelle de la réponse (fini le `alert()` qui passe toujours)
- Formatage automatique du solde avec `Intl.NumberFormat`
- Zéro `onclick=""` inline — tous les listeners dans `script.js`
- CSS propre sans valeurs magiques ni règles dupliquées

---

*HelloCarter Financial SA · Projet fictif à usage éducatif uniquement.*
