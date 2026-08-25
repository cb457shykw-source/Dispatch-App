import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://<user>.github.io/Dispatch-App/ by the GitHub Pages
// workflow, so asset URLs need the repo name as a base path. Local dev
// (npm run dev) is unaffected — Vite only applies `base` to built output.
export default defineConfig({
  base: '/Dispatch-App/',
  plugins: [react()],
});
