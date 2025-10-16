// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        widths: [320, 640, 1024, 1280, 1920],
        formats: ['avif', 'webp', 'jpeg'],
      }
    }
  },
   adapter: netlify(),
});
