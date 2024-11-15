<template>
  <div
    class="navbar bg-base-200/95 backdrop-blur-md fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="{ ' bg-base-200/98': isScrolled }"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <!-- Enhanced Mobile Button -->
        <button
          tabindex="0"
          class="btn btn-ghost btn-sm lg:hidden transition-colors duration-300"
          @click="toggleDropdown"
          aria-label="Menu"
        >
          <div class="w-5 h-5 relative">
            <span
              class="absolute h-0.5 w-full bg-current transform transition-all duration-300"
              :class="{ 'rotate-45 top-2': isDropdownOpen, 'top-0': !isDropdownOpen }"
            ></span>
            <span
              class="absolute h-0.5 w-full bg-current top-2 transition-all duration-300"
              :class="{ 'opacity-0': isDropdownOpen }"
            ></span>
            <span
              class="absolute h-0.5 w-full bg-current transform transition-all duration-300"
              :class="{ '-rotate-45 top-2': isDropdownOpen, 'top-4': !isDropdownOpen }"
            ></span>
          </div>
        </button>

        <!-- Enhanced Mobile Menu -->
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box w-52 p-2 shadow-xl mt-2 origin-top-left"
          :class="{
            'scale-y-100 opacity-100': isDropdownOpen,
            'scale-y-0 opacity-0': !isDropdownOpen,
          }"
        >
          <li v-for="(item, index) in menuItems" :key="index">
            <RouterLink
              :to="{ hash: item.hash }"
              class="flex items-center gap-2 px-4 py-2 hover:bg-primary hover:text-white rounded-lg transition-all duration-300"
              @click="closeDropdown"
            >
              <i :class="`remix-icon ${item.icon}`"></i>
              <span>{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Enhanced Logo -->
      <RouterLink
        class="btn btn-ghost text-xl font-bold text-primary hover:scale-105 transition-transform duration-300"
        :to="{ path: '/' }"
      >
        <span class="animate-wave inline-block">✌️</span>
        <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Wakim.
        </span>
      </RouterLink>
    </div>

    <!-- Enhanced Desktop Menu -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-1 space-x-2">
        <li v-for="(item, index) in menuItems" :key="index">
          <RouterLink
            :to="{ hash: item.hash }"
            class="flex items-center gap-2 px-4 hover:bg-primary hover:text-white rounded-xl transition-all duration-300"
          >
            <i :class="`remix-icon ${item.icon}`"></i>
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Enhanced Theme Switcher -->
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <button
          tabindex="0"
          class="btn btn-ghost rounded-full hover:bg-primary/10 transition-all duration-300"
          @click="toggleThemeDropdown"
        >
          <i
            v-if="themeStore.currentTheme === 'autumn'"
            class="remix-icon ri-sun-fill text-2xl text-yellow-500 animate-spin-slow"
          ></i>
          <i v-else class="remix-icon ri-moon-fill text-2xl text-gray-500 animate-pulse"></i>
          <i class="ri-arrow-down-s-line"></i>
        </button>

        <!-- Enhanced Theme Menu -->
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-60 mt-2 origin-top-right"
          :class="{
            'scale-100 opacity-100': isThemeDropdownOpen,
            'scale-0 opacity-0': !isThemeDropdownOpen,
          }"
        >
          <li class="px-4 py-2 text-sm font-medium text-base-content/70 border-b border-base-300">
            Change Themes
          </li>
          <li v-for="theme in themes" :key="theme.value">
            <button
              class="flex items-center gap-2 p-3 hover:bg-primary hover:text-white rounded-lg transition-all duration-300"
              :class="{ 'opacity-50': themeStore.currentTheme === theme.value }"
              @click="
                () => {
                  changeTheme(theme.value)
                  closeThemeDropdown()
                }
              "
            >
              <i :class="`remix-icon ${theme.icon}`"></i>
              {{ theme.label }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { onClickOutside } from '@vueuse/core'

const isDropdownOpen = ref(false)
const isThemeDropdownOpen = ref(false)
const isScrolled = ref(false)
const themeStore = useThemeStore()

// Menu Items Data
const menuItems = [
  { hash: '#home', icon: 'ri-home-2-line', label: 'Home' },
  { hash: '#resume', icon: 'ri-profile-line', label: 'Resume' },
  { hash: '#project', icon: 'ri-briefcase-4-line', label: 'Projects' },
  { hash: '#contact', icon: 'ri-phone-line', label: 'Contact' },
]

// Theme Options
const themes = [
  { value: 'autumn', label: 'Light', icon: 'ri-sun-line' },
  { value: 'forest', label: 'Dark', icon: 'ri-moon-line' },
]

// Dropdown controls
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
  isThemeDropdownOpen.value = false
}

const toggleThemeDropdown = () => {
  isThemeDropdownOpen.value = !isThemeDropdownOpen.value
  isDropdownOpen.value = false
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const closeThemeDropdown = () => {
  isThemeDropdownOpen.value = false
}

// Theme handling
const changeTheme = (theme) => {
  themeStore.currentTheme = theme
  localStorage.setItem('theme', theme)
  document.documentElement.setAttribute('data-theme', theme)
}

// Scroll handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Lifecycle hooks
onMounted(() => {
  themeStore.initializeTheme()
  window.addEventListener('scroll', handleScroll)

  // Use onClickOutside to close dropdowns when clicking outside
  onClickOutside(isDropdownOpen, closeDropdown)
  onClickOutside(isThemeDropdownOpen, closeThemeDropdown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.dropdown-content {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-wave {
  animation: wave 2s infinite;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* Enhanced mobile menu animation */
.menu-sm {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  transform-origin: top;
}

/* Smooth transition for navbar background */
.navbar {
  transition: all 0.3s ease;
}

/* Enhanced hover effects */
.btn-ghost:hover {
  transform: translateY(-1px);
}

.menu li a:active {
  transform: scale(0.98);
}
</style>
