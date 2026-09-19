import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://karthik-b-2001.github.io/ — a user site (repo is named
  // karthik-b-2001.github.io), so assets live at the domain root.
  // A project-site repo would need base: '/<repo-name>/' instead.
  base: '/',
  plugins: [react(), tailwindcss()],
})
