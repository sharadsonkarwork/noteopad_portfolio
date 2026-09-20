import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rosterix: resolve(__dirname, 'rosterix.html'),
        theLastPortal: resolve(__dirname, 'sidequest/the-last-portal.html'),
      },
    },
  },
});
