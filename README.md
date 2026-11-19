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

Ouvrir `http://localhost:3000` pour voir la traduction React TypeScript de la structure HTML de réinitialisation. Le composant est rendu côté serveur, sans état React ni formulaire simulé. Il conserve les classes, les panneaux de succès masqués et la zone `#api` vide destinée à B2C. Les images et la feuille de style proviennent de `public`. Les scripts historiques ne sont pas exécutés par ce composant. Les routes de modèles ci-dessus restent inchangées. Exécuter `npm test` puis `npm run build` pour les vérifier. Les modèles sont intégrés au build : reconstruire après leur modification.

## Utilisation avec B2C

Déployer le projet sur une URL HTTPS accessible publiquement, puis configurer chaque URL de modèle dans le parcours ou la stratégie B2C correspondant. La route `/passwordreset` sert toujours le modèle HTML historique et autorise les origines via `Access-Control-Allow-Origin: *`. La racine `/` sert le nouveau composant React avec `#api` ; son intégration au parcours B2C doit être validée après déploiement, notamment parce que Next.js ajoute ses propres scripts. La présence de `#api` ne garantit pas à elle seule la compatibilité du runtime Next.js avec B2C. Activer JavaScript dans les parcours lorsque les scripts des modèles sont nécessaires.

Les modèles conservent leurs liens, scripts, feuilles de style et ressources distants d'origine, y compris les liens d'authentification existants. Leur disponibilité et leur configuration restent à vérifier avant toute mise en production. La variante imbriquée `passwordreset/passwordreset/passwordreset.html` n'est pas utilisée : la route de réinitialisation expose la variante située directement dans `passwordreset`.

En production, les ressources Next.js de l'accueil (`/_next/static/`) et ses images sont chargées depuis `https://b2c-storage-poc.netlify.app`, même lorsque le HTML est consulté depuis une autre origine. La police Roboto est locale. En développement, elles restent servies localement. Un déploiement est nécessaire pour publier les nouveaux fichiers ; le préfixe de production est volontairement lié au domaine Netlify et doit être adapté si celui-ci change.
