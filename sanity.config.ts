import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID ??
  process.env.SANITY_STUDIO_PROJECT_ID ??
  process.env.PUBLIC_SANITY_PROJECT_ID ??
  'jxllxpyw';
const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET ??
  process.env.SANITY_STUDIO_DATASET ??
  process.env.PUBLIC_SANITY_DATASET ??
  'production';

if (!projectId) {
  throw new Error('Set PUBLIC_SANITY_PROJECT_ID (or SANITY_STUDIO_PROJECT_ID) before starting Sanity Studio.');
}

export default defineConfig({
  name: 'growchild',
  title: 'GROWCHILD Newsroom',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
});
