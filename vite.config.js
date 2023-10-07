import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: true, // Habilita CSS Modules
    // Opcional: Cambia el formato de los nombres de clase generados
    localsConvention: 'camelCase', // Utiliza camelCase en lugar de kebab-case
  },
})





