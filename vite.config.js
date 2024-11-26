import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows the server to be accessible on the network (0.0.0.0)
    port: process.env.PORT || 5173, // Use the PORT environment variable, or default to 5173 for local development
  },
  preview: {
    port: process.env.PORT || 4173, // Use the PORT environment variable for preview, or default to 4173
    host: true, // Ensures the preview server is accessible on 0.0.0.0
  },
});
