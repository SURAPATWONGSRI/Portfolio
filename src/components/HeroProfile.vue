<template>
  <div class="hero bg-base min-h-screen">
    <div class="hero-content flex-col lg:flex-row gap-8 px-4 lg:px-16">
      <!-- รูปภาพ -->
      <img
        src="https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/330866163_722243462736415_5773031836703429458_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHr5PMzv5WYfsZKcjFCAcE2bSfmpwlyzgFtJ-anCXLOAdLUBNY9e_GsnfRSVvkOqu28TfMZCFoHX_aOXseaR9ZH&_nc_ohc=IY9ooP2m6X0Q7kNvgEzAIjq&_nc_zt=23&_nc_ht=scontent.fbkk5-8.fna&_nc_gid=ASEYSKQtBXlAg0n9j4gcd9B&oh=00_AYBkhgGO5-08XB1Hc9FZq19fQgZudmOCCODUkxZl27sjQw&oe=67339A59"
        class="w-full max-w-sm rounded-lg shadow-2xl mx-auto lg:mx-0"
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
