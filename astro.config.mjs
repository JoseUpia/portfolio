// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://joseupia.com/',
  integrations: [
    icon(),
    sitemap({
      filter: (page) => page !== 'https://joseupia.com/projects/',
      namespaces: {
        news: false,
        video: false,
        xhtml: false,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
