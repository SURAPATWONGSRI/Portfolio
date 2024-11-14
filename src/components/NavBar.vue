<template>
  <div class="navbar bg-base-200/95 shadow-sm backdrop-blur fixed top-0 left-0 w-full z-10">
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
            <RouterLink :to="{ hash: '#project' }">Projects</RouterLink>
          </li>
          <li @click="closeDropdown">
            <RouterLink :to="{ hash: '#contact' }">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <a class="btn btn-ghost text-xl text-success">✌️Wakim.</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink :to="{ hash: '#home' }">
            <i class="remix-icon ri-home-2-line"></i> Home
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ hash: '#resume' }">
            <i class="remix-icon ri-profile-line"></i> Resume
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ hash: '#project' }">
            <i class="remix-icon ri-briefcase-4-line"></i> Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ hash: '#contact' }">
            <i class="remix-icon ri-phone-line"></i> Contact
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <!-- ปุ่มเปิด dropdown -->
        <label
          tabindex="0"
          class="btn btn-ghost flex items-center gap-2 text-lg"
          @click="toggleDropdown"
        >
          <!-- ใช้ไอคอนจาก Remix Icon สำหรับธีม -->
          <i
            v-if="themeStore.currentTheme === 'cupcake'"
            class="remix-icon ri-sun-fill text-yellow-500"
          ></i>
          <i v-else class="remix-icon ri-moon-fill text-gray-500"></i>
          <i class="remix-icon ri-arrow-down-s-line"></i>
        </label>

        <!-- เมนู dropdown -->
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-60 text-base"
          :class="{ 'dropdown-open': isDropdownOpen }"
        >
          <!-- ข้อความ "Change theme style" -->
          <li class="px-4 py-2 text-sm text-gray-500 font-medium">Change Theme Style</li>

          <li
            @click="
              () => {
                changeTheme('cupcake')
                closeDropdown()
              }
            "
            :class="{
              'opacity-50': themeStore.currentTheme === 'cupcake',
              'hover:bg-primary hover:text-white': themeStore.currentTheme !== 'cupcake',
            }"
          >
            <a
              :disabled="themeStore.currentTheme === 'cupcake'"
              class="flex items-center gap-2 p-2"
            >
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
            :class="{
              'opacity-50': themeStore.currentTheme === 'forest',
              'hover:bg-primary hover:text-white': themeStore.currentTheme !== 'forest',
            }"
          >
            <a :disabled="themeStore.currentTheme === 'forest'" class="flex items-center gap-2 p-2">
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
/* Styling for dropdown menu */
.dropdown-content {
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* Custom hover effect */
.dropdown-content li:hover {
  background-color: var(--primary); /* Change to your desired color */
}

.dropdown-content li a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
}

.dropdown-content li:hover a {
  color: white; /* Change text color when hovered */
}

/* Disable opacity effect when the theme is selected */
.dropdown-content li[disabled] {
  opacity: 0.5;
}

/* Custom styling for the "Change theme style" text */
.dropdown-content li.text-sm {
  font-weight: 500;
  font-size: 0.875rem; /* Smaller font size for the label */
  color: #6b7280; /* Gray color */
  border-bottom: 1px solid #ddd; /* Border line for separation */
  padding-bottom: 0.5rem; /* Padding to space out the label */
  margin-bottom: 0.5rem; /* Margin for spacing */
}

.text-yellow-500 {
  color: #fbbf24; /* Yellow color for sun icon */
}

.text-gray-500 {
  color: #6b7280; /* Gray color for moon icon */
}

/* Custom dropdown arrow styling */
.btn .ri-arrow-down-s-line {
  font-size: 1.25rem;
}
</style>
