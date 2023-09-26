import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Output configurations
    rollupOptions: {
      output: {
        // Set the fixed file names for JS and CSS
        entryFileNames: 'main.js',
        chunkFileNames: 'main.js',
        assetFileNames: 'main.[ext]',
      },
    },
  },
})




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })