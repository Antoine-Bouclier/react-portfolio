# Portfolio — antoine-bouclier.fr

Site statique construit avec [Astro](https://astro.build), servi par Nginx dans un conteneur Docker derrière Traefik.

## Modifier le contenu

Tout le texte (profil, projets, parcours, compétences) est dans `src/data/contenu.ts`.

## Commandes

```bash
npm install
npm run dev      # serveur de développement → http://localhost:4321
npm run build    # génère le site dans dist/
```

## Déploiement

```bash
docker compose up -d --build
```
