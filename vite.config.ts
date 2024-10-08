import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/2/', // 设置基础路径为仓库名
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
