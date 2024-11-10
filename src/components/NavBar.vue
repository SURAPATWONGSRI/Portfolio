<template>
  <div class="navbar bg-base-100/85 shadow-sm backdrop-blur fixed top-0 left-0 w-full z-10">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden" @click="toggleDropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <!-- ใช้ :class เพื่อเปิด/ปิด dropdown โดยใช้ Vue.js state -->
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          :class="{ 'dropdown-open': isDropdownOpen }"
        >
          <li @click="closeDropdown"><RouterLink :to="{ hash: '#home' }">Home</RouterLink></li>
          <li @click="closeDropdown"><RouterLink :to="{ hash: '#resume' }">Resume</RouterLink></li>
          <li @click="closeDropdown">
            <RouterLink :to="{ hash: '#project' }">Project</RouterLink>
          </li>
          <li @click="closeDropdown">
            <RouterLink :to="{ hash: '#contact' }">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <a class="btn btn-ghost text-xl text-success">MyPORTFOLIO</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink :to="{ hash: '#home' }">Home</RouterLink></li>
        <li><RouterLink :to="{ hash: '#resume' }">Resume</RouterLink></li>
        <li><RouterLink :to="{ hash: '#project' }">Project</RouterLink></li>
        <li><RouterLink :to="{ hash: '#contact' }">Contact</RouterLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <!-- ปุ่มเปิด dropdown -->
        <label tabindex="0" class="btn btn-ghost" @click="toggleDropdown">
          <i v-if="themeStore.currentTheme === 'cupcake'" class="remix-icon ri-sun-fill"></i>
          <i v-else class="remix-icon ri-moon-fill"></i>
          <i class="remix-icon ri-arrow-down-s-line"></i>
        </label>

        <!-- เมนู dropdown -->
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
          :class="{ 'dropdown-open': isDropdownOpen }"
        >
          <li
            @click="
              () => {
                changeTheme('cupcake')
                closeDropdown()
              }
            "
            :class="{ 'opacity-50': themeStore.currentTheme === 'cupcake' }"
          >
            <a :disabled="themeStore.currentTheme === 'cupcake'">
              <i class="remix-icon ri-sun-line"></i>
              Light
            </a>
          </li>
          <li
            @click="
              () => {
                changeTheme('forest')
                closeDropdown()
              }
            "
            :class="{ 'opacity-50': themeStore.currentTheme === 'forest' }"
          >
            <a :disabled="themeStore.currentTheme === 'forest'">
              <i class="remix-icon ri-moon-line"></i>
              Dark
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const isDropdownOpen = ref(false) // ตัวแปรเพื่อจัดการสถานะของ dropdown
const themeStore = useThemeStore()

// ฟังก์ชันเปลี่ยนธีม
const changeTheme = (theme) => {
  themeStore.currentTheme = theme
  localStorage.setItem('theme', theme) // เก็บค่าใหม่ลงใน localStorage
  document.documentElement.setAttribute('data-theme', theme) // ตั้งค่าธีมในเอกสาร
}

// ฟังก์ชัน toggle การแสดงผล dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// ฟังก์ชันปิด dropdown เมื่อคลิกที่เมนู
const closeDropdown = () => {
  isDropdownOpen.value = false
}

onMounted(() => {
  themeStore.initializeTheme()
})
</script>

<style scoped>
/* Custom styling for dropdown */
.dropdown-content li a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
