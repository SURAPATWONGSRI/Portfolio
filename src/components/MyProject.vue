<template>
  <div class="min-h-screen bg-base-200 relative overflow-hidden">
    <div class="absolute inset-0 opacity-15">
      <!-- Geometric Circles -->
      <div
        class="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary via-secondary to-accent opacity-70 rounded-full"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-tl from-success via-warning to-neutral opacity-80 rounded-full"
      ></div>
      <!-- Triangular Overlay with Gradient -->
      <div
        class="absolute -top-16 -left-24 w-96 h-96 bg-gradient-to-b from-primary to-transparent rotate-45 opacity-40"
      ></div>
      <!-- Diagonal Stripes -->
      <div
        class="absolute top-10 right-10 w-80 h-80 bg-transparent border-t-8 border-l-8 border-dashed border-success rotate-45"
      ></div>
      <!-- Soft Blur Layer -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-base-200 via-base-300 opacity-50 blur-lg"
      ></div>
    </div>
    <div class="p-10 bg-base-200">
      <!-- Hero Section -->
      <section class="min-h-screen bg-base-200">
        <div class="hero py-20 bg-base-200">
          <div class="hero-content text-center">
            <div class="text-center">
              <div class="badge badge-secondary mb-4">Projects</div>
              <h1 class="text-5xl font-bold mb-4">My projects</h1>
              <p class="text-xl text-base-content/60 max-w-xl mx-auto">โปรเจกต์ทั้งหมด</p>
            </div>
          </div>
        </div>

        <!-- Projects Grid Section -->
        <div class="container mx-auto px-4">
          <!-- Projects Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div
              v-for="(project, index) in filteredProjects"
              :key="index"
              class="card card-compact max-w-sm shadow-xl mx-auto w-full transition-all duration-300 hover:scale-105"
              :class="cardTheme"
            >
              <!-- Project Image with Overlay -->
              <figure class="relative h-48">
                <img :src="project.image" :alt="project.name" class="w-full h-full object-cover" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-base-300/70 to-transparent"
                ></div>
              </figure>

              <div class="card-body p-6">
                <!-- Project Title -->
                <h2 class="card-title text-lg text-primary font-bold" :class="textTheme">
                  {{ project.name }}
                </h2>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 my-3">
                  <span
                    v-for="(lang, idx) in project.languages"
                    :key="idx"
                    :class="['badge badge-sm', getBadgeColor(lang)]"
                  >
                    {{ lang }}
                  </span>
                </div>

                <!-- Description -->
                <p class="text-sm line-clamp-3" :class="textDescriptionTheme">
                  {{ project.description }}
                </p>

                <!-- Action Buttons -->
                <div class="card-actions justify-end mt-4">
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    class="text-secondary"
                  >
                    <i class="ri-link mr-1"></i>
                    <span>{{ project.link }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import ecommerce from '@/assets/e-commerce.jpg'
import MovieReview from '@/assets/MovieReview.jpg'
import weatherApp from '@/assets/Weather.png'
import Booking from '@/assets/Booking.png'

export default {
  setup() {
    const themeStore = useThemeStore()
    const selectedTech = ref('All')

    const projects = ref([
      {
        name: 'เว็บไซต์รีวิวภาพยนตร์',
        description: 'เว็บไซต์รีวิวภาพยนต์ เขียนด้วย PHP+MySQL',
        languages: ['PHP', 'MySQL'],
        date: '2023-01-15',
        image: MovieReview,
      },
      {
        name: 'E-commerce Web app',
        description: 'เว็บไซต์ร้านค้าออนไลน์ E-Commerce',
        languages: ['Node.js', 'JavaScript', 'MySQL'],
        date: '2022-11-30',
        image: ecommerce,
      },
      {
        name: 'The Local Weather Web App',
        description: 'เว็บไซต์ดูอุณหภูมิสภาพอากาศโดย fecth API มา (openweatherAPI,mapboxAPI)',
        languages: ['Vue.js', 'JavaScript', 'fetch API'],
        date: '2023-05-10',
        image: weatherApp,
        link: 'https://thelocalweather.vercel.app/',
      },
      {
        name: 'ระบบดูข้อมูลการจองคิวนัดหมาย',
        description:
          'ดูข้อมูลประวัติการจองคิว จำนวนการจองคิวทั้งหมด และข้อมูลการรีวิวของร้านค้าในฝั่ง Customers',
        languages: ['Vue.js', 'JavaScript', 'Python', 'MySQL'],
        image: Booking,
      },
    ])

    // Get unique technologies
    const technologies = computed(() => {
      const techs = new Set(['All'])
      projects.value.forEach((project) => {
        project.languages.forEach((lang) => techs.add(lang))
      })
      return Array.from(techs)
    })

    // Filter projects by technology
    const filteredProjects = computed(() => {
      if (selectedTech.value === 'All') return projects.value
      return projects.value.filter((project) => project.languages.includes(selectedTech.value))
    })

    const cardTheme = computed(() =>
      themeStore.currentTheme === 'forest' ? 'bg-base-100' : 'bg-white',
    )

    const textTheme = computed(() =>
      themeStore.currentTheme === 'forest' ? 'text-gray-100' : 'text-gray-900',
    )

    const textDescriptionTheme = computed(() =>
      themeStore.currentTheme === 'forest' ? 'text-gray-300' : 'text-gray-600',
    )

    const filterByTech = (tech) => {
      selectedTech.value = tech
    }

    const showDetails = (project) => {
      // Implement modal or navigation to project details
      console.log('Show details for:', project.name)
    }

    const getBadgeColor = (language) => {
      const colors = {
        JavaScript: 'bg-yellow-500 text-white',
        'Vue.js': 'bg-green-500 text-white',
        Python: 'bg-blue-500 text-white',
        PHP: 'bg-[#777BB3] text-white',
        'Node.js': 'bg-success text-white',
        MySQL: 'bg-info text-white',
        'fetch API': 'bg-error text-white',
      }
      return colors[language] || 'bg-gray-400 text-white'
    }

    return {
      projects,
      technologies,
      selectedTech,
      filteredProjects,
      cardTheme,
      textTheme,
      textDescriptionTheme,
      filterByTech,
      showDetails,
      getBadgeColor,
    }
  },
}
</script>

<style scoped>
/* Add any additional styling here */
</style>
