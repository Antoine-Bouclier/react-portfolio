import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://antoine-bouclier.fr',
  // Génère /sitemap-index.xml (+ sitemap-0.xml) à chaque build : la liste des pages pour les moteurs de recherche.
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
