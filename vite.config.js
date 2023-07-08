import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default {
  base: '',
  plugins: [react()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        diagram: resolve(__dirname, 'diagram.html'),
      },
    },
  },
  server: {
    port: 29292,
  },
}
