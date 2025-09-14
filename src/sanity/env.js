// Debug: Log environment variables
console.log('Environment variables:', {
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION
});

const config = {
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-14',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3noqbyk4').trim(),
};

// Validate configuration
console.log('Sanity Config:', config);

if (!config.projectId) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables');}

if (!config.dataset) {
  console.error('Missing NEXT_PUBLIC_SANITY_DATASET in environment variables');
}

export const { apiVersion, dataset, projectId } = config;
