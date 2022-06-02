import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import svgrPlugin from 'vite-plugin-svgr'
import envCompatible from 'vite-plugin-env-compatible'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    },
  },
  plugins: [
    react(),
    envCompatible(),
    macrosPlugin(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
})
