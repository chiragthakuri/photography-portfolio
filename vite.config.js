// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use environment variable to set base path
const base = process.env.BASE_PATH || '/photography-portfolio/'

export default defineConfig({
  base,
  plugins: [react()],
})
