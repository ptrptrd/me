// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://ptrptrd.github.io',
    base: "/me",
    integrations: [mdx(), sitemap(), icon()],
    vite: {
        plugins: [tailwindcss()],
    },
});