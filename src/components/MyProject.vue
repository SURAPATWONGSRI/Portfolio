<template>
  <div class="container mx-auto px-4">
    <!-- Heading -->
    <div class="text-center py-10">
      <h1 class="text-5xl font-bold text-primary">MY PROJECTS</h1>
    </div>

    <!-- Card Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        :class="[
          'card card-bordered shadow-md transition-transform duration-300 transform hover:scale-105',
          cardTheme,
        ]"
      >
        <!-- Project Image -->
        <figure>
          <img
            :src="project.image"
            alt="Project Image"
            class="w-full h-52 object-cover rounded-t-lg"
          />
        </figure>

        <!-- Card Body -->
        <div class="card-body p-6">
          <h2 :class="['card-title text-2xl font-semibold', textTheme]">
            <a :href="project.link" target="_blank">{{ project.name }}</a>
          </h2>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(lang, idx) in project.languages"
              :key="idx"
              :class="['badge', getBadgeColor(lang)]"
            >
              {{ lang }}
            </span>
          </div>
          <p :class="['mt-2', textDescriptionTheme]">
            {{ project.description }}
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              {{ project.link }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import ecommerce from '@/assets/e-commerce.jpg'
import MovieReview from '@/assets/MovieReview.jpg'
import weatherApp from '@/assets/Weather.png'
import Booking from '@/assets/Booking.png'

export default {
  setup() {
    const themeStore = useThemeStore()

    const projects = reactive([
      {
        name: 'เว็บไซต์รีวิวภาพยนต์',
        description: 'เว็บไซต์รีวิวภาพยนต์ เขียนด้วย PHP+MySQL',
        languages: ['PHP', 'MySQL'],
        date: '2023-01-15',
        image: MovieReview,
        // link: 'https://example.com/movie-review', // เพิ่มลิงก์ของโปรเจค
      },
      {
        name: 'E-commerce',
        description: 'เว็บไซต์ร้านค้าออนไลน์ E-Commerce',
        languages: ['Node.js', 'JavaScript', 'MySQL'],
        date: '2022-11-30',
        image: ecommerce,
        // link: 'https://example.com/e-commerce', // เพิ่มลิงก์ของโปรเจค
      },
      {
        name: 'The Local Weather Web App',
        description: 'เว็บไซต์ดูอุณหภูมิสภาพอากาศโดย fecth API มา (openweatherAPI,mapboxAPI) ',
        languages: ['Vue.js', 'JavaScript', 'fetch API'],
        date: '2023-05-10',
        image: weatherApp,
        link: 'https://thelocalweather.vercel.app/', // ลิงก์โปรเจคนี้
      },
      {
        name: 'ระบบดูข้อมูลการจองคิวนัดหมาย',
        description:
          'ดูข้อมูลประวัติการจองคิว จำนวนการจองคิวทั้งหมด และข้อมูลการรีวิวของร้านค้าในฝั่ง Customers',
        languages: ['Vue.js', 'JavaScript', 'Python', 'MySQL'],
        image: Booking,
        // link: 'https://example.com/booking-system', // เพิ่มลิงก์ของโปรเจค
      },
    ])

    const cardTheme = computed(() =>
      themeStore.currentTheme === 'forest' ? 'bg-forest-card' : 'bg-white',
    )
    const textTheme = computed(() =>
      themeStore.currentTheme === 'forest' ? 'text-gray-100' : 'text-black',
    )
    const textDescriptionTheme = computed(() =>
      themeStore.currentTheme === 'forest' ? 'text-gray-300' : 'text-gray-600',
    )

    const getBadgeColor = (language) => {
      switch (language) {
        case 'JavaScript':
          return 'bg-yellow-500 text-white'
        case 'Vue.js':
          return 'bg-green-500 text-white'
        case 'Python':
          return 'bg-blue-500 text-white'
        case 'PHP':
          return 'bg-[#777BB3] text-white'
        case 'Java':
          return 'bg-red-500 text-white'
        case 'Spring Boot':
          return 'bg-green-700 text-white'
        case 'Node.js':
          return 'bg-success text-white'
        case 'MySQL':
          return 'bg-info text-white'
        case 'fetch API':
          return 'bg-error text-white'
        default:
          return 'bg-gray-400 text-white'
      }
    }

    return {
      projects,
      cardTheme,
      textTheme,
      textDescriptionTheme,
      getBadgeColor,
    }
  },
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.card {
  border-radius: 0.75rem;
}
.card-title {
  margin-bottom: 0.5rem;
}
.bg-forest-card {
  background-color: #211a1a;
}
.bg-cupcake-card {
  background-color: #fff;
}
.badge {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
}
</style>
