import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',   // static output → perfect for Cloudflare Pages
  build: {
    assets: '_assets',
  },
});
