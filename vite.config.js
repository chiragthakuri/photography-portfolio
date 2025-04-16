// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/photography-portfolio/', // ← this is the key!
  plugins: [react()],
})
