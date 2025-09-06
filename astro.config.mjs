import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ashdubey8.github.io',
  base: '/ashdubey',
  integrations: [tailwind(), mdx()],
});