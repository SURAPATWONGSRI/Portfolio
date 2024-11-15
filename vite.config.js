import { fileURLToPath, URL } from 'node:url'
import path from 'path' // ใช้ path module
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// จำลอง __dirname โดยใช้ import.meta.url
const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Debugging: ดูค่า __dirname
console.log('__dirname:', __dirname)

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // แก้ไขให้เป็น path ที่ต้องการ
      vue: 'vue/dist/vue.esm-bundler.js',
      '@vueuse/core': path.resolve(__dirname, 'node_modules', '@vueuse/core'), // ใช้ path.resolve() แทน __dirname
    },
    extensions: ['.js', '.ts', '.vue', '.json'], // ตรวจสอบว่า Vite รองรับไฟล์ทุกชนิด
  },
  // เพิ่มการ debug การ resolve paths
  optimizeDeps: {
    include: ['@vueuse/core'], // ให้ Vite รวม @vueuse/core ในตอนเริ่มต้น
  },
})
