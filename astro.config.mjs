// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://Meg624.github.io',
    base: '/studying-astro-portfolio',
    integrations: [mdx(), sitemap(), icon(), react()],
});

