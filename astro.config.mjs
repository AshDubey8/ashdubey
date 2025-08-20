import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ashdubey.is-a.dev',
  integrations: [tailwind()],
});