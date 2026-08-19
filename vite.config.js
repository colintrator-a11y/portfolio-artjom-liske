import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    target: 'es2018',
    cssCodeSplit: false,
    // Small assets are inlined as before, but the capability-example
    // photographs are always emitted as files: base64 does not gzip, and
    // inlining them pushed the render-blocking JS bundle up by ~40 kB gzipped
    // for images the browser can fetch in parallel and cache on their own.
    assetsInlineLimit: (filePath, content) =>
      /[\\/]assets[\\/]examples[\\/]/.test(filePath) ? false : content.length < 8192,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
