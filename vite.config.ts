import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/', // Critical for Vercel
  plugins: [react()],
  build: {
    outDir: 'out', // Changed from 'dist' to 'out'
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'static/[name].[hash][extname]',
        chunkFileNames: 'static/[name].[hash].js',
        entryFileNames: 'static/[name].[hash].js'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})