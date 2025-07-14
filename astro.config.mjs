// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/reflexion',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    assets: 'assets'
  }
});