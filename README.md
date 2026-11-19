# Page B2C Odysseum

Les routes `/` et `/passwordreset` affichent le même composant React TypeScript défini dans `src/app/page.tsx`. Il conserve la structure du modèle de réinitialisation, les classes CSS, les panneaux de succès masqués et la zone `#api` vide destinée à B2C. Aucun formulaire de démonstration ni ancien fichier HTML n'est chargé.

Les anciennes routes HTML `/login` et `/registration` et leur chargeur ont été supprimés.

## Développement

```sh
npm install
npm run dev
npm test
npm run build
```

Les images et la feuille de style proviennent de `public`. En production, les ressources Next.js et les images utilisent `https://b2c-storage-poc.netlify.app`. En développement, les ressources de la page sont locales ; les URL dans la feuille de style publique restent absolues vers Netlify.

## Utilisation avec B2C

Le `LoadUri` peut conserver `https://b2c-storage-poc.netlify.app/passwordreset`. Cette route ne lit plus d'ancien fichier HTML. Les routes `/` et `/passwordreset` autorisent l'origine `https://klpretailerbeta.b2clogin.com`.

Déployer les modifications sur Netlify avant de tester le parcours. La présence de `#api` ne garantit pas à elle seule la compatibilité des scripts ajoutés par Next.js avec B2C : valider l'injection du formulaire après déploiement. Les scripts historiques ne sont pas exécutés par le composant React.
