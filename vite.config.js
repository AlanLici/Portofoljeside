import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages project site base path:
// If your repository name is "PORTOFØLJESIDE", keep this as "/PORTOFØLJESIDE/".
// If you later switch to a custom domain (user/organization domain), change base to "/".
export default defineConfig({
  plugins: [vue()],
  base: '/PORTOFOLJESIDE/',
  // Keep Vite build output in the default /dist folder.
  build: {
    outDir: 'dist',
  },
})
