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
              <div class="badge badge-secondary badge-outline p-4 mb-6">Projects</div>
              <h1
                class="text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                My projects
              </h1>
              <p class="text-xl text-base-content/60 max-w-xl leading-relaxed mx-auto">
                โปรเจกต์ทั้งหมด
              </p>
            </div>
          </div>
        </div>

        <!-- Technology Filter Section -->
        <!-- <div class="container mx-auto px-4 mb-10">
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="tech in technologies"
              :key="tech"
              @click="filterByTech(tech)"
              class="btn btn-sm transition-all duration-300"
              :class="selectedTech === tech ? 'btn-primary' : 'btn-outline'"
            >
              {{ tech }}
            </button>
          </div>
        </div> -->

        <!-- Projects Grid Section -->
        <div class="container mx-auto px-4">
          <!-- Projects Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div
              v-for="(project, index) in filteredProjects"
              :key="index"
              class="card border border-base-200 shadow-xl overflow-hidden mx-auto w-full transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2"
              :class="cardTheme"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <!-- Project Image with Overlay -->
              <figure class="relative h-52">
                <img
                  :src="project.image"
                  :alt="project.name"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-base-300/90 to-transparent"
                ></div>
                <!-- Project Status Badge -->
                <div class="absolute top-4 right-4">
                  <div class="badge badge-primary">
                    {{ project.status || "Completed" }}
                  </div>
                </div>
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
import Booking from "@/assets/Booking.png";
import ecommerce from "@/assets/e-commerce.jpg";
import MovieReview from "@/assets/MovieReview.jpg";
import NetZero from "@/assets/NetZero.png";
import weatherApp from "@/assets/Weather.png";
import { useThemeStore } from "@/stores/themeStore";
import { computed, ref } from "vue";

export default {
  setup() {
    const themeStore = useThemeStore();
    const selectedTech = ref("All");

    const projects = ref([
      {
        name: "เว็บไซต์รีวิวภาพยนตร์",
        description: "เว็บไซต์รีวิวภาพยนต์ เขียนด้วย PHP+MySQL",
        languages: ["PHP", "MySQL"],
        date: "2023-01-15",
        image: MovieReview,
      },
      {
        name: "E-commerce Web app",
        description: "เว็บไซต์ร้านค้าออนไลน์ E-Commerce",
        languages: ["Node.js", "JavaScript", "MySQL"],
        date: "2022-11-30",
        image: ecommerce,
      },
      {
        name: "The Local Weather Web App",
        description:
          "เว็บไซต์ดูอุณหภูมิสภาพอากาศโดย fecth API มา (openweatherAPI,mapboxAPI)",
        languages: ["Vue.js", "JavaScript", "fetch API"],
        date: "2023-05-10",
        image: weatherApp,
        link: "https://thelocalweather.vercel.app/",
      },
      {
        name: "ระบบดูข้อมูลการจองคิวนัดหมาย",
        description:
          "ดูข้อมูลประวัติการจองคิว จำนวนการจองคิวทั้งหมด และข้อมูลการรีวิวของร้านค้าในฝั่ง Customers",
        languages: ["Vue.js", "JavaScript", "Python", "MySQL"],
        image: Booking,
      },
      {
        name: "Net-Zero เว็บแอพการจัดการพลังงานสุทธิเป็นศูนย์",
        description:
          "เว็บไซต์ที่ช่วยให้สามารถจัดการการใช้พลังงาน เพื่อให้การปล่อยก๊าซเรือนกระจกเป็นศูนย์และใช้พลังงานหมุนเวียนอย่างมีประสิทธิภาพ",
        languages: ["Vue.js", "JavaScript", "Spring Boot", "PostgrestSQL", "Strapi.js"],
        image: NetZero,
        link: "https://test1netzero.netlify.app",
      },
    ]);

    // Get unique technologies
    const technologies = computed(() => {
      const techs = new Set(["All"]);
      projects.value.forEach((project) => {
        project.languages.forEach((lang) => techs.add(lang));
      });
      return Array.from(techs);
    });

    // Filter projects by technology
    const filteredProjects = computed(() => {
      if (selectedTech.value === "All") return projects.value;
      return projects.value.filter((project) =>
        project.languages.includes(selectedTech.value)
      );
    });

    const cardTheme = computed(() =>
      themeStore.currentTheme === "forest" ? "bg-base-100" : "bg-base-100"
    );

    const textTheme = computed(() =>
      themeStore.currentTheme === "forest" ? "text-gray-100" : "text-gray-900"
    );

    const textDescriptionTheme = computed(() =>
      themeStore.currentTheme === "forest" ? "text-gray-300" : "text-gray-600"
    );

    const filterByTech = (tech) => {
      selectedTech.value = tech;
    };

    const showDetails = (project) => {
      // Implement modal or navigation to project details
      console.log("Show details for:", project.name);
    };

    const getBadgeColor = (language) => {
      const colors = {
        JavaScript: "bg-yellow-400 text-black",
        "Vue.js": "bg-emerald-500 text-white",
        Python: "bg-blue-600 text-white",
        PHP: "bg-indigo-500 text-white",
        "Node.js": "bg-success text-white",
        MySQL: "bg-blue-400 text-white",
        "fetch API": "bg-red-400 text-white",
        "Spring Boot": "bg-green-600 text-white",
        PostgrestSQL: "bg-blue-700 text-white",
        "Strapi.js": "bg-purple-500 text-white",
      };
      return colors[language] || "bg-gray-400 text-white";
    };

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
    };
  },
};
</script>

<style scoped>
/* Modern card hover effects */
.card {
  backdrop-filter: blur(5px);
  transition: all 0.4s ease-in-out;
}

.card:hover {
  box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.15);
}

/* Badge animations */
.badge {
  transition: all 0.3s ease;
}

.badge:hover {
  transform: scale(1.05);
}

/* Technology filter buttons */
.btn {
  letter-spacing: 0.5px;
}
</style>
