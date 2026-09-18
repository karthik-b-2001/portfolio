import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://karthik-b-2001.github.io/portfolio/ (a project site),
  // so assets live under /portfolio/, not the domain root.
  // If the repo is ever renamed to karthik-b-2001.github.io, change this to "/".
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
