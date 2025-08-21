import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ashdubey8.github.io',
  base: '/ashdubey',
  integrations: [tailwind()],
});