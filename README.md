# Modèles B2C Odysseum

Projet Next.js qui expose les modèles HTML existants pour les parcours Azure AD B2C :

| Parcours | Route | Modèle source |
| --- | --- | --- |
| Connexion | `/login` | `odysseum/odysseum/login/custom-ui.html` |
| Inscription | `/registration` | `odysseum/odysseum/registration/selfasserted.html` |
| Réinitialisation du mot de passe | `/passwordreset` | `odysseum/odysseum/passwordreset/passwordreset.html` |

Les routes renvoient le HTML source sans hydratation React et autorisent les requêtes CORS. B2C charge le modèle et injecte le formulaire dans `#api` ; les routes ouvertes directement dans un navigateur ne constituent donc pas une authentification autonome.

## Développement

```sh
npm install
npm run dev
```

Ouvrir `http://localhost:3000` pour voir l'aperçu Next.js de la page de réinitialisation. Le formulaire de cet aperçu est désactivé : seul B2C peut envoyer et vérifier le code. Les routes de modèles ci-dessus restent accessibles directement. Exécuter `npm test` puis `npm run build` pour les vérifier. Les modèles sont intégrés au build : reconstruire après leur modification.

## Utilisation avec B2C

Déployer le projet sur une URL HTTPS accessible publiquement, puis configurer chaque URL de modèle dans le parcours ou la stratégie B2C correspondant. Le serveur ou le proxy doit préserver l'en-tête `Access-Control-Allow-Origin` ; si les modèles sont publiés sur un autre hébergement, y configurer CORS également. Activer JavaScript dans les parcours lorsque les scripts des modèles sont nécessaires.

Les modèles conservent leurs liens, scripts, feuilles de style et ressources distants d'origine, y compris les liens d'authentification existants. Leur disponibilité et leur configuration restent à vérifier avant toute mise en production. La variante imbriquée `passwordreset/passwordreset/passwordreset.html` n'est pas utilisée : la route de réinitialisation expose la variante située directement dans `passwordreset`.
