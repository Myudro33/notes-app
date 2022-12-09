import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://myudro33.github.io/notes-app',
  plugins: [react()],
})
