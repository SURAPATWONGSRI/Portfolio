<template>
  <div class="hero bg-base min-h-screen">
    <div class="hero-content flex-col lg:flex-row gap-8 px-4 lg:px-16">
      <!-- รูปภาพ -->
      <img
        src="@/assets/picHero.jpg"
        class="w-full max-w-sm rounded-lg shadow-2xl mx-auto lg:mx-0"
        alt="Surapath Wongsri - Student at Rajamangala University of Technology Thanyaburi"
        title="Surapath Wongsri"
        role="img"
      />
      <!-- ข้อความ -->
      <div class="text-center lg:text-left">
        <h2 class="text-3xl lg:text-5xl font-bold text-success mb-4">สวัสดีครับ,ผม สุรพัศ วงศรี</h2>
        <p class="py-4 text-lg">
          ปัจจุบันเป็นนักศึกษาจาก มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี คณะวิทยาศาสตร์และเทคโนโลยี
          สาขาเทคโนโลยีคอมพิวเตอร์ ชั้นปีที่ 4
        </p>

        <RouterLink class="btn btn-neutral text-white font-light" :to="{ hash: '#contact' }">
          <i class="ri-id-card-fill"></i> Contact
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hero-content {
  max-width: 1200px; /* ทำให้ขนาด content ไม่เกินนี้ */
}
</style>
