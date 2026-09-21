import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rosterixWork: resolve(__dirname, 'rosterix.html'),
        rosterix: resolve(__dirname, 'rosterix_casestudy.html'),
        theLastPortal: resolve(__dirname, 'sidequest/the-last-portal.html'),
      },
    },
  },
});
