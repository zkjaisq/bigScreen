import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
// 使用defineConfig来获的类型提示
export default defineConfig({
  plugins: [reactRefresh()]
})
