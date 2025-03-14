<template>
  <div
    class="navbar backdrop-blur-md border-b border-base-300 fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8"
    :class="{ 'shadow-sm bg-base-100/90': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <!-- Minimal Mobile Button -->
        <button
          tabindex="0"
          class="btn btn-ghost btn-circle lg:hidden transition-transform duration-300 hover:rotate-180"
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

        <!-- Minimal Mobile Menu -->
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-md rounded-xl w-52 p-3 shadow-lg mt-3 gap-1 border border-base-200"
          :class="{
            'scale-y-100 opacity-100': isDropdownOpen,
            'scale-y-0 opacity-0': !isDropdownOpen,
          }"
        >
          <li v-for="(item, index) in menuItems" :key="index">
            <RouterLink
              :to="{ hash: item.hash }"
              class="flex items-center gap-2 px-4 py-2 hover:bg-primary/10 rounded-lg transition-all duration-300"
              @click="closeDropdown"
            >
              <i :class="`remix-icon ${item.icon}`"></i>
              <span>{{ item.label }} </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Minimal Logo -->
      <RouterLink
        class="font-bold text-xl hover:scale-105 transition-transform duration-300"
        :to="{ path: '/' }"
      >
        <span class="inline-block mr-1">✌️</span>
        <span
          class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Wakim.
        </span>
      </RouterLink>
    </div>

    <!-- Minimal Desktop Menu -->
    <div class="navbar-center hidden lg:flex">
      <ul class="flex space-x-1">
        <li v-for="(item, index) in menuItems" :key="index">
          <RouterLink
            :to="{ hash: item.hash }"
            class="px-4 py-2 flex items-center gap-2 hover:bg-base-200 rounded-full transition-all duration-300"
            :class="{ 'bg-base-200': activeSection === item.hash.substring(1) }"
          >
            <i :class="`remix-icon ${item.icon} text-primary`"></i>
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Minimal Theme Switcher -->
    <div class="navbar-end">
      <label
        class="swap swap-rotate btn btn-circle btn-ghost transition-all duration-300"
      >
        <!-- this hidden checkbox controls the state -->
        <input
          type="checkbox"
          :checked="themeStore.currentTheme === 'forest'"
          @change="toggleTheme"
        />

        <!-- sun icon -->
        <svg
          class="swap-off h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          />
        </svg>

        <!-- moon icon -->
        <svg
          class="swap-on h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/stores/themeStore";
import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";

const isDropdownOpen = ref(false);
const isScrolled = ref(false);
const themeStore = useThemeStore();
const activeSection = ref("home");

// Menu Items Data
const menuItems = [
  { hash: "#home", icon: "ri-home-2-line", label: "Home" },
  { hash: "#resume", icon: "ri-profile-line", label: "Resume" },
  { hash: "#project", icon: "ri-briefcase-4-line", label: "Projects" },
  { hash: "#contact", icon: "ri-phone-line", label: "Contact" },
];

// Dropdown controls
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

// Simplified theme handling
const toggleTheme = () => {
  const newTheme = themeStore.currentTheme === "autumn" ? "forest" : "autumn";
  themeStore.currentTheme = newTheme;
  localStorage.setItem("theme", newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
};

// Detect active section
const detectActiveSection = () => {
  const sections = menuItems.map((item) => item.hash.substring(1));
  const scrollPosition = window.scrollY + 100;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const height = element.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
        activeSection.value = section;
        return;
      }
    }
  }
};

// Scroll handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
  detectActiveSection();
};

// Lifecycle hooks
onMounted(() => {
  themeStore.initializeTheme();
  window.addEventListener("scroll", handleScroll);
  detectActiveSection();

  // Use onClickOutside to close dropdowns when clicking outside
  onClickOutside(document.querySelector(".dropdown"), closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.dropdown-content {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

/* Minimal mobile menu animation */
.menu-sm {
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: top;
}

/* Smooth transition for navbar background */
.navbar {
  transition: all 0.3s ease;
  height: 4rem;
}

/* Minimal hover effects */
.navbar-center a {
  position: relative;
  overflow: hidden;
}

.navbar-center a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: theme("colors.primary");
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.navbar-center a:hover::after {
  width: 30%;
}

.navbar-center a.active::after {
  width: 60%;
}

/* Add smooth animation for theme switch */
.swap {
  animation-duration: 0.5s;
  transition: transform 0.5s ease;
}

.swap-rotate:hover {
  transform: scale(1.1);
}
</style>
