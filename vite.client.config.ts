import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist/static',
    rollupOptions: {
      input: 'client/index.tsx',
      output: {
        entryFileNames: 'client.js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]'
      }
    },
    emptyOutDir: false
  }
})
