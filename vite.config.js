import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/', //inicio de github pages
    plugins: [react()],
})