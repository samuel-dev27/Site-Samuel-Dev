import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    // CAMBIA AQUÍ al nombre de tu NUEVO repositorio en GitHub
    base: '/Site-Samuel-Dev/', 
    
    plugins: [react()],
    
    resolve: {
      alias: {
        // Asegúrate de que esta línea es correcta para tu proyecto (puede ser solo '.')
        '@': path.resolve(__dirname, '.'), 
      }
    }
  };
});