// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const sanityProjectId = env.PUBLIC_SANITY_PROJECT_ID || 'jxllxpyw';
const sanityDataset = env.PUBLIC_SANITY_DATASET || 'production';

const integrations = [
  sanity({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: '2026-09-21',
    useCdn: false,
    studioBasePath: '/studio',
  }),
  react(),
];

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations,
  vite: {
    plugins: [tailwindcss()],
  },
});
