# Odysseum - React statique pour B2C

Projet React et TypeScript sans Next.js ni JavaScript exécuté dans le navigateur. Le composant `src/PasswordReset.tsx` est rendu en HTML statique par `scripts/build-static.tsx` avec `react-dom/server`.

## Commandes

```sh
npm install
npm run build
npm run typecheck
npm test
npm run preview
```

`npm run dev` génère les pages puis démarre un serveur local. Après une modification, relancer le build et rafraîchir le navigateur ; il n'y a pas de rechargement automatique.

## Publication Netlify

`netlify.toml` publie `out`. Les URL `/` et `/passwordreset/` renvoient le même HTML statique, avec le conteneur vide `#api` présent dès la réponse, sans hydratation ni runtime React.

Les images, icônes, polices et CSS proviennent de `public` et sont référencés par des URL absolues vers `https://b2c-storage-poc.netlify.app`. L'aperçu local utilise également ce domaine pour ses ressources. Déployer les modifications pour les rendre disponibles.

Le design et les stratégies XML du dossier `odysseum` sont conservés. B2C injecte son propre formulaire dans `#api` et gère la réinitialisation. Aucun formulaire simulé ni script historique n'est exécuté par le composant.

La configuration CORS autorise la lecture des fichiers publics. Désactiver les injections de scripts Netlify (toolbar, snippets) et retirer tout plugin Next.js configuré explicitement dans l'interface Netlify. L'indicateur de désactivation du plugin est conservé dans `netlify.toml` pour les sites existants.
