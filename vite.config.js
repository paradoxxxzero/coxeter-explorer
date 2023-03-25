import glsl from 'vite-plugin-glsl'

export default {
  base: '',
  plugins: [glsl()],
  build: {
    outDir: 'docs',
  },
  server: {
    port: 29292,
  },
}
