import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ashdubey.is-a.dev',
  integrations: [tailwind(), mdx()],
});