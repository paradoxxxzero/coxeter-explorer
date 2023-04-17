import glsl from 'vite-plugin-glsl'
import react from '@vitejs/plugin-react'

export default {
  base: '',
  plugins: [react(), glsl()],
  build: {
    outDir: 'docs',
  },
  server: {
    port: 29292,
  },
}
