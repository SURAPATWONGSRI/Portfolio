<template>
  <div class="relative min-h-screen bg-base-200 py-20">
    <div class="container mx-auto px-4">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="badge badge-primary badge-outline p-4 mb-6">Stacks</div>
        <h1
          class="text-6xl font-bold mb-9 py-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          My Technology Stack
        </h1>
        <p class="text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
          เครื่องมือและเทคโนโลยีที่ใช้ในการพัฒนา
        </p>
      </div>

      <!-- Carousel Section -->
      <div class="relative">
        <!-- Carousel Container -->
        <div ref="carouselRef" class="carousel carousel-center w-full p-4 space-x-6 rounded-box">
          <div v-for="stack in stacksList" :key="stack.title" class="carousel-item">
            <div
              class="card w-[320px] bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div class="card-body">
                <div class="badge badge-secondary mb-4">{{ stack.title }}</div>
                <h2 class="card-title justify-center text-2xl mb-6">{{ stack.title }}</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div
                    v-for="tech in stack.items"
                    :key="tech.name"
                    class="flex flex-col items-center p-3 rounded-lg hover:bg-base-200 transition-colors duration-200"
                  >
                    <div class="w-12 h-12 flex items-center justify-center mb-2">
                      <img :src="tech.icon" :alt="tech.name" class="w-10 h-10 object-contain" />
                    </div>
                    <span class="text-sm font-medium text-center">{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div
          class="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center pointer-events-none p-auto"
        >
          <button
            @click="scroll('left')"
            class="btn btn-circle btn-primary btn-md glass shadow-lg pointer-events-auto transform transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            @click="scroll('right')"
            class="btn btn-circle btn-primary glass shadow-lg pointer-events-auto transform transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Progress Indicators -->
      <div class="flex justify-center mt-8 gap-2">
        <div
          v-for="(stack, index) in stacksList"
          :key="index"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="[currentSlide === index ? 'bg-primary scale-125' : 'bg-base-300']"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import vueIcon from '@/assets/icon/vue.svg'
import jsIcon from '@/assets/icon/javascript.svg'
import cssIcon from '@/assets/icon/css.svg'
import htmlIcon from '@/assets/icon/html.svg'
import nodeJS from '@/assets/icon/nodejs.svg'
import python from '@/assets/icon/python.svg'
import mySQL from '@/assets/icon/MySQL.svg'
import php from '@/assets/icon/php.svg'
import express from '@/assets/icon/e1.png'
import diasy from '@/assets/icon/diasy.png'
import flask from '@/assets/icon/flask.svg'
import firebase from '@/assets/icon/firebase.svg'
import Bootstrap from '@/assets/icon/bootstrap-5.svg'
import Tailwind from '@/assets/icon/Tailwind.svg'
import vuetify from '@/assets/icon/vuetify.svg'
import npm from '@/assets/icon/npm.svg'
import vscode from '@/assets/icon/vscode.svg'
import sourcetree from '@/assets/icon/sourcetree-1.svg'
import postman from '@/assets/icon/postman.svg'
import figma from '@/assets/icon/figma.svg'
import git from '@/assets/icon/git.svg'
import gitlab from '@/assets/icon/gitlab.svg'
import github from '@/assets/icon/github.svg'
import vercel from '@/assets/icon/vercel.svg'
import docker from '@/assets/icon/docker.svg'
import Cplusplus from '@/assets/icon/Cplusplus.svg'

const carouselRef = ref(null)
const currentSlide = ref(0)
const autoScrollInterval = ref(null)

const stacksList = [
  {
    title: 'Languages',
    items: [
      { name: 'C++', icon: Cplusplus },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'PHP', icon: php },
      { name: 'Python', icon: python },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'VueJS', icon: vueIcon },
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'NodeJS', icon: nodeJS },
      { name: 'ExpressJS', icon: express },
      { name: 'Flask', icon: flask },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'Firebase', icon: firebase },
      { name: 'MySQL', icon: mySQL },
    ],
  },
  {
    title: 'UI',
    items: [
      { name: 'Bootstrap', icon: Bootstrap },
      { name: 'Tailwind', icon: Tailwind },
      { name: 'daisyUI', icon: diasy },
      { name: 'Vuetify', icon: vuetify },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'npm', icon: npm },
      { name: 'VSCode', icon: vscode },
      { name: 'Postman', icon: postman },
      { name: 'Sourcetree', icon: sourcetree },
      { name: 'Figma', icon: figma },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker', icon: docker },
      { name: 'Gitlab', icon: gitlab },
      { name: 'Git', icon: git },
      { name: 'GitHub', icon: github },
      { name: 'Vercel', icon: vercel },
    ],
  },
]

const scroll = (direction) => {
  if (!carouselRef.value) return

  const scrollAmount = 320 + 24 // Card width + gap
  const currentScroll = carouselRef.value.scrollLeft
  const maxScroll = carouselRef.value.scrollWidth - carouselRef.value.clientWidth

  let newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount

  // Update current slide
  currentSlide.value = Math.round(newScroll / scrollAmount)

  // Ensure bounds
  if (newScroll < 0) newScroll = 0
  if (newScroll > maxScroll) newScroll = maxScroll

  carouselRef.value.scrollTo({
    left: newScroll,
    behavior: 'smooth',
  })
}

// Auto scroll functionality
const startAutoScroll = () => {
  autoScrollInterval.value = setInterval(() => {
    const isAtEnd =
      carouselRef.value.scrollLeft >=
      carouselRef.value.scrollWidth - carouselRef.value.clientWidth - 10

    if (isAtEnd) {
      carouselRef.value.scrollTo({ left: 0, behavior: 'smooth' })
      currentSlide.value = 0
    } else {
      scroll('right')
    }
  }, 5000)
}

const stopAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value)
  }
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>

<style scoped>
.carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}

.carousel::-webkit-scrollbar {
  display: none;
}

/* Gradient mask for carousel edges */
.carousel::before,
.carousel::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  pointer-events: none;
  z-index: 1;
}

.carousel::before {
  left: 0;
  background: linear-gradient(to right, var(--b2) 0%, transparent 100%);
}

.carousel::after {
  right: 0;
  background: linear-gradient(to left, var(--b2) 0%, transparent 100%);
}
</style>
