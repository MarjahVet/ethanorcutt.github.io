import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ethanorcutt.github.io/',  // Set the base path for the project
  build: {
    outDir: 'docs', // Specify the output directory as 'docs', instead of the default 'dist'
  },
})
