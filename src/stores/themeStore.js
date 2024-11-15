import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: localStorage.getItem('theme') || 'autumn', // ถ้ามีข้อมูลใน localStorage จะใช้ค่านั้น
  }),
  actions: {
    // ฟังก์ชันสลับธีม
    toggleTheme() {
      const newTheme = this.currentTheme === 'autumn' ? 'forest' : 'autumn'
      this.currentTheme = newTheme
      localStorage.setItem('theme', newTheme) // เก็บธีมใน localStorage
      document.documentElement.setAttribute('data-theme', newTheme) // เปลี่ยนธีมที่หน้าเว็บไซต์
    },
    // ฟังก์ชันสำหรับตั้งค่าธีมเริ่มต้นเมื่อโหลดหน้าเว็บ
    initializeTheme() {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        this.currentTheme = savedTheme
        document.documentElement.setAttribute('data-theme', savedTheme)
      }
    },
  },
})
