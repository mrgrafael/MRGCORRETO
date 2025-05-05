import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // ← GARANTE que o root é a pasta atual
  build: {
    outDir: 'dist',
  }
})
