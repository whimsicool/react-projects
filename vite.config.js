// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/to-do-list-react/', // <- GANTI dengan nama repo kamu!
  plugins: [react()],
})
