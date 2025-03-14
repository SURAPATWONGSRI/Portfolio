<template>
  <div class="relative min-h-screen bg-base-200 py-20">
    <div class="container mx-auto px-4">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold mb-6 text-primary">My Technology Stack</h1>
        <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
          เครื่องมือและเทคโนโลยีที่ใช้ในการพัฒนา
        </p>
      </div>

      <!-- Carousel Section -->
      <div class="relative">
        <!-- Carousel Container -->
        <div
          ref="carouselRef"
          class="carousel carousel-center w-full p-4 space-x-8 rounded-box"
        >
          <div v-for="stack in stacksList" :key="stack.title" class="carousel-item">
            <div
              class="card w-[320px] bg-base-100 border border-base-300 transition-all duration-300 hover:border-primary"
            >
              <div class="card-body">
                <h2 class="card-title justify-center text-2xl mb-4 text-primary">
                  {{ stack.title }}
                </h2>
                <div class="grid grid-cols-3 gap-6">
                  <div
                    v-for="tech in stack.items"
                    :key="tech.name"
                    class="flex flex-col items-center p-2 rounded-lg transition-all duration-200 hover:scale-110"
                  >
                    <div class="w-14 h-14 flex items-center justify-center mb-2">
                      <img
                        :src="tech.icon"
                        :alt="tech.name"
                        class="w-12 h-12 object-contain"
                      />
                    </div>
                    <span class="text-sm font-medium text-center">{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Minimalist Navigation Buttons -->
        <div
          class="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between items-center pointer-events-none"
        >
          <button
            @click="scroll('left')"
            class="btn btn-circle btn-sm btn-ghost bg-base-100/80 pointer-events-auto"
            aria-label="Previous"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            @click="scroll('right')"
            class="btn btn-circle btn-sm btn-ghost bg-base-100/80 pointer-events-auto"
            aria-label="Next"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Minimal Progress Indicators -->
      <div class="flex justify-center mt-8 gap-3">
        <div
          v-for="(stack, index) in stacksList"
          :key="index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="[currentSlide === index ? 'bg-primary w-6' : 'bg-base-300']"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import Bootstrap from "@/assets/icon/bootstrap-5.svg";
import Cplusplus from "@/assets/icon/Cplusplus.svg";
import cssIcon from "@/assets/icon/css.svg";
import diasy from "@/assets/icon/diasy.png";
import docker from "@/assets/icon/docker.svg";
import express from "@/assets/icon/e1.png";
import figma from "@/assets/icon/figma.svg";
import firebase from "@/assets/icon/firebase.svg";
import flask from "@/assets/icon/flask.svg";
import git from "@/assets/icon/git.svg";
import github from "@/assets/icon/github.svg";
import gitlab from "@/assets/icon/gitlab.svg";
import htmlIcon from "@/assets/icon/html.svg";
import jsIcon from "@/assets/icon/javascript.svg";
import mySQL from "@/assets/icon/MySQL.svg";
import nodeJS from "@/assets/icon/nodejs.svg";
import npm from "@/assets/icon/npm.svg";
import php from "@/assets/icon/php.svg";
import postman from "@/assets/icon/postman.svg";
import python from "@/assets/icon/python.svg";
import sourcetree from "@/assets/icon/sourcetree-1.svg";
import Tailwind from "@/assets/icon/Tailwind.svg";
import Vercel from "@/assets/icon/Vercel.svg";
import vscode from "@/assets/icon/vscode.svg";
import vueIcon from "@/assets/icon/vue.svg";
import vuetify from "@/assets/icon/vuetify.svg";

const carouselRef = ref(null);
const currentSlide = ref(0);
const autoScrollInterval = ref(null);

const stacksList = [
  {
    title: "Languages",
    items: [
      { name: "C++", icon: Cplusplus },
      { name: "JavaScript", icon: jsIcon },
      { name: "PHP", icon: php },
      { name: "Python", icon: python },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "VueJS", icon: vueIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "NodeJS", icon: nodeJS },
      { name: "ExpressJS", icon: express },
      { name: "Flask", icon: flask },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "Firebase", icon: firebase },
      { name: "MySQL", icon: mySQL },
    ],
  },
  {
    title: "UI",
    items: [
      { name: "Bootstrap", icon: Bootstrap },
      { name: "Tailwind", icon: Tailwind },
      { name: "daisyUI", icon: diasy },
      { name: "Vuetify", icon: vuetify },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "npm", icon: npm },
      { name: "VSCode", icon: vscode },
      { name: "Postman", icon: postman },
      { name: "Sourcetree", icon: sourcetree },
      { name: "Figma", icon: figma },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: docker },
      { name: "Gitlab", icon: gitlab },
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Vercel", icon: Vercel },
    ],
  },
];

const scroll = (direction) => {
  if (!carouselRef.value) return;

  const scrollAmount = 320 + 24; // Card width + gap
  const currentScroll = carouselRef.value.scrollLeft;
  const maxScroll = carouselRef.value.scrollWidth - carouselRef.value.clientWidth;

  let newScroll =
    direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount;

  // Update current slide
  currentSlide.value = Math.round(newScroll / scrollAmount);

  // Ensure bounds
  if (newScroll < 0) newScroll = 0;
  if (newScroll > maxScroll) newScroll = maxScroll;

  carouselRef.value.scrollTo({
    left: newScroll,
    behavior: "smooth",
  });
};

// Auto scroll functionality
const startAutoScroll = () => {
  autoScrollInterval.value = setInterval(() => {
    const isAtEnd =
      carouselRef.value.scrollLeft >=
      carouselRef.value.scrollWidth - carouselRef.value.clientWidth - 10;

    if (isAtEnd) {
      carouselRef.value.scrollTo({ left: 0, behavior: "smooth" });
      currentSlide.value = 0;
    } else {
      scroll("right");
    }
  }, 5000);
};

const stopAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value);
  }
};

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  stopAutoScroll();
});
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

/* Subtle gradient mask for carousel edges */
.carousel::before,
.carousel::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.6;
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
