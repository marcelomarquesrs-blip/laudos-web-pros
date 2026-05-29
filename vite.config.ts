import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // ou o plugin que você usa

export default defineConfig({
  plugins: [react()],
  base: '/laudos-web-pros/', // Adicione exatamente esta linha
})
