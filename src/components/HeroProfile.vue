<template>
  <div class="hero bg-base-200 min-h-screen relative overflow-hidden">
    <!-- Custom Background Pattern -->
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

    <!-- Hero Content -->
    <div class="hero-content flex-col lg:flex-row gap-10 lg:gap-16 px-6 lg:px-20 relative">
      <!-- Image -->
      <img
        src="@/assets/picHero.jpg"
        class="w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl mx-auto lg:mx-0 transform hover:scale-110 transition-transform duration-300 ease-in-out"
        alt="Surapath Wongsri - Student at Rajamangala University of Technology Thanyaburi"
        title="Surapath Wongsri"
        role="img"
      />

      <!-- Text Content -->
      <div class="text-center lg:text-left">
        <h2
          class="text-3xl lg:text-4xl font-extrabold text-primary mb-4 animate__animated animate__fadeInDown"
        >
          👋 สวัสดีครับ, ผม สุรพัศ วงศรี
        </h2>
        <div class="p-4">
          <p class="typing-animation text-lg text-gray-500">
            ปัจจุบันเป็นนักศึกษาจาก มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี คณะวิทยาศาสตร์และเทคโนโลยี
            สาขาเทคโนโลยีคอมพิวเตอร์ ชั้นปีที่ 4 มีประสบการณ์ในการทำระบบจองคิวในช่วงฝึกงาน
            โดยใช้เทคโนโลยี (Vue.js, Python, Node.js, MySQL, PHP)
            ผมชอบศึกษาความรู้นอกห้องเรียนอยู่ตลอดเพื่อให้ตัวเองตามทันเทคโนโลยีปัจจุบัน
          </p>
        </div>

        <RouterLink
          class="btn ml-2 btn-neutral text-white font-light rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          :to="{ hash: '#contact' }"
        >
          <i class="ri-id-card-fill"></i> Contact
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
