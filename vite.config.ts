import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Enables better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true, // Remove debugger statements
      },
      mangle:true
    },
  },
  base: '/portfolio',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
