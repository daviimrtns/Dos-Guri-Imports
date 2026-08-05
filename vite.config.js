import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O site é HTML estático (index.html, produto.html, …) servido pelo Live Server.
// Aqui compilamos APENAS a "ilha" React do hero num único arquivo self-contained
// (React + ReactDOM + Embla já embutidos), gerado em dist/hero.js. O index.html
// carrega esse arquivo com <script type="module" src="dist/hero.js">.
export default defineConfig({
  plugins: [react()],
  // Em lib mode o Vite não injeta process.env; sem isso o React quebra no
  // navegador com "process is not defined" e a ilha não monta.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Sem cssCodeSplit: o CSS do carrossel é injetado via <style> pelo próprio
    // componente, então não geramos arquivo .css separado.
    cssCodeSplit: false,
    lib: {
      entry: 'src/hero.jsx',
      formats: ['es'],
      fileName: () => 'hero.js',
    },
    rollupOptions: {
      output: { assetFileNames: 'hero.[ext]' },
    },
  },
});
