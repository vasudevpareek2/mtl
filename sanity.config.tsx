import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';
import { projectId, dataset } from './src/sanity/env';

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables');
}

if (!dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET in environment variables');
}

export default defineConfig({
  name: 'modern-tech-blog',
  title: 'Modern Tech Blog',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure,
    }),
    visionTool({
      defaultApiVersion: '2024-09-14',
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  // Enable the new document list with improved performance
  document: {
    actions: (prev) => prev,
  },
});
