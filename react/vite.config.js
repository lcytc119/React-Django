import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base : '../task_manager/static/',
  build : {
    outDir : '../task_manager/static',
    emptyOutDir: true,
    sourcemap: true,
    // rollupOptions: {
    //   external: ['axios'],
    // },
  },
  plugins: [react()],
})

