import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    // Esta línea toma la variable GEMINI_API_KEY del entorno de Vercel
    // y la entrega al código cuando este pide process.env.API_KEY
    'process.env.API_KEY': JSON.stringify(process.env.GEMINI_API_KEY)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
