import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://martingetscreative.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
