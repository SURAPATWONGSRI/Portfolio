<script setup>
const contacts = [
  {
    name: 'Email',
    icon: 'ri-mail-line',
    detail: 'Email : devkim1910@gmaill.com',
  },
  { name: 'Phone', icon: 'ri-phone-fill', detail: 'Tel : +66 94 371 8956' },
  {
    name: 'Facebook',
    icon: 'ri-facebook-circle-fill',
    link: 'https://www.facebook.com/surapat.wongsri.1/',
    detail: 'Facebook : Surapat Wongsri',
    target: '_blank',
  },
  {
    name: 'Instagram',
    icon: 'ri-instagram-line',
    link: 'https://www.instagram.com/w4kims/?hl=th',
    detail: 'Instagram : w4kims',
    target: '_blank',
  },
  {
    name: 'GitHub',
    icon: 'ri-github-fill',
    link: 'https://github.com/Whakimz',
    detail: 'GitHub : Whakimz',
    target: '_blank',
  },
]
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="text-center py-10">
      <h1 class="text-5xl font-bold text-primary">CONTACT</h1>
      <p class="text-lg text-gray-500 mt-4">ช่องทางการติดต่อ</p>
    </div>

    <!-- Flexbox layout for different screen sizes -->
    <div class="flex flex-wrap justify-center gap-6 py-8">
      <template v-for="(contact, index) in contacts" :key="index">
        <a
          :href="contact.link"
          :target="contact.target || '_self'"
          class="btn btn-primary flex items-center justify-center space-x-3 font-medium"
        >
          <i :class="contact.icon + ' text-xl md:text-2xl'"></i>
          <span class="text-xs md:text-sm">{{ contact.detail }}</span>
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 768px;
}

/* ปรับให้ในโหมดมือถือและ Desktop มีความกะทัดรัดและกระชับ */
@media (max-width: 768px) {
  .btn {
    width: 80%; /* ให้ปุ่มไม่กว้างเกินไป */
    padding: 8px 16px; /* ปรับ padding เล็กน้อย */
    font-size: 0.75rem; /* ลดขนาดตัวอักษร */
  }
  .text-xl {
    font-size: 1rem; /* ขนาดไอคอนเล็กลง */
  }
  .text-xs {
    font-size: 0.75rem; /* ขนาดข้อความเล็กลง */
  }
}

/* สำหรับ desktop ให้มีขนาดปกติ */
@media (min-width: 768px) {
  .btn {
    padding: 12px 24px; /* เพิ่มขนาด padding สำหรับ desktop */
    font-size: 1rem; /* ขนาดตัวอักษรปกติ */
  }
  .text-xl {
    font-size: 1.5rem; /* ขนาดไอคอนใน desktop */
  }
  .text-sm {
    font-size: 1rem; /* ขนาดข้อความปกติ */
  }
}
</style>
