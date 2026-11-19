# Modèles B2C Odysseum

Projet Next.js qui expose les modèles HTML existants pour les parcours Azure AD B2C :

| Parcours | Route | Modèle source |
| --- | --- | --- |
| Connexion | `/login` | `odysseum/login/custom-ui.html` |
| Inscription | `/registration` | `odysseum/registration/selfasserted.html` |
| Réinitialisation du mot de passe | `/passwordreset` | `odysseum/passwordreset/passwordreset.html` |

Les routes renvoient le HTML source sans hydratation React et autorisent les requêtes CORS. B2C charge le modèle et injecte le formulaire dans `#api` ; les routes ouvertes directement dans un navigateur ne constituent donc pas une authentification autonome.

## Développement

```sh
npm install
npm run dev
```

Ouvrir `http://localhost:3000` pour voir la démonstration Next.js en TypeScript. Le code `123456` permet de parcourir les étapes simulées : aucun e-mail n'est envoyé et aucun mot de passe n'est enregistré ou modifié. N'utilisez pas de vraies informations. La validation et l'affichage du mot de passe sont recréés en React à partir des scripts historiques ; seul B2C effectue réellement la réinitialisation. Les routes de modèles ci-dessus restent inchangées. Exécuter `npm test` puis `npm run build` pour les vérifier. Les modèles sont intégrés au build : reconstruire après leur modification.

## Utilisation avec B2C

Déployer le projet sur une URL HTTPS accessible publiquement, puis configurer chaque URL de modèle dans le parcours ou la stratégie B2C correspondant. La route `/passwordreset` sert le modèle B2C avec son élément `#api` et autorise les origines via `Access-Control-Allow-Origin: *`. La racine `/` autorise spécifiquement `https://klpretailerbeta.b2clogin.com` et `https://qlf-uniform.klepierre.fr`, mais sert uniquement la démonstration Next.js : elle ne peut pas remplacer le modèle B2C. Si les modèles sont publiés sur un autre hébergement, y configurer CORS également. Activer JavaScript dans les parcours lorsque les scripts des modèles sont nécessaires.

Les modèles conservent leurs liens, scripts, feuilles de style et ressources distants d'origine, y compris les liens d'authentification existants. Leur disponibilité et leur configuration restent à vérifier avant toute mise en production. La variante imbriquée `passwordreset/passwordreset/passwordreset.html` n'est pas utilisée : la route de réinitialisation expose la variante située directement dans `passwordreset`.

En production, les ressources Next.js de l'accueil (`/_next/static/`) et ses images sont chargées depuis `https://b2c-storage-poc.netlify.app`, même lorsque le HTML est consulté depuis une autre origine. La police Roboto est locale. En développement, elles restent servies localement. Un déploiement est nécessaire pour publier les nouveaux fichiers ; le préfixe de production est volontairement lié au domaine Netlify et doit être adapté si celui-ci change.
