import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// During development, proxy /api to the NestJS backend so the frontend can
// call relative URLs without CORS concerns.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
