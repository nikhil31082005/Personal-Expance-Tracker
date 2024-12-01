import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from any IP on the network
    // port: 3000, // Optional: specify a port (default is 5173)
  },
});
