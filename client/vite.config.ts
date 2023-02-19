// import { defineConfig } from 'vite'
import vite from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default vite.defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    }
  }
})

console.log(vite)
