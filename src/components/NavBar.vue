<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a>Home</a></li>
          <li><a>Resume</a></li>
          <li><a>Project</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl text-success">PORTFOLIO</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Resume</a></li>
        <li><a>Project</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <!-- ปุ่มสลับธีมแบบ Toggle Switch -->
      <label class="switch">
        <input
          type="checkbox"
          @click="themeStore.toggleTheme"
          :checked="themeStore.currentTheme === 'forest'"
        />
        <span class="slider">
          <!-- แสดงไอคอน Sun หรือ Moon ตามธีม -->
          <i v-if="themeStore.currentTheme === 'forest'" class="remix-icon ri-sun-line"></i>
          <i v-else class="remix-icon ri-moon-line"></i>
        </span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

// เข้าถึง store สำหรับธีม
const themeStore = useThemeStore()

// ตั้งค่า theme เมื่อคอมโพเนนต์โหลด
onMounted(() => {
  themeStore.initializeTheme() // เรียกใช้ฟังก์ชัน initializeTheme เมื่อคอมโพเนนต์โหลด
})
</script>

<style scoped>
/* สไตล์ของ Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 50px; /* ปรับขนาดเล็กลง */
  height: 28px; /* ปรับขนาดเล็กลง */
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  border-radius: 50%;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

/* สลับสีเมื่อเลือกธีม 'forest' (Dark Mode) */
input:checked + .slider {
  background-color: #1eb854;
}

input:checked + .slider:before {
  transform: translateX(22px); /* ปรับตำแหน่งของลูกกลม */
}

/* การจัดตำแหน่งของไอคอน */
.slider i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}

.slider i.ri-sun-line {
  left: 8px;
}

.slider i.ri-moon-line {
  right: 8px;
}
</style>
