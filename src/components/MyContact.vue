<script setup>
const contacts = [
  {
    name: 'Email',
    icon: 'ri-mail-line',
    detail: 'devkim1910@gmaill.com',
    description: 'ติดต่อที่อีเมล',
  },
  {
    name: 'Phone',
    icon: 'ri-phone-fill',
    detail: '+66 94 371 8956',
    description: 'เบอร์โทรศัพท์',
  },
  {
    name: 'Facebook',
    icon: 'ri-facebook-circle-fill',
    link: 'https://www.facebook.com/surapat.wongsri.1/',
    detail: 'Surapat Wongsri',
    description: 'ช่องทางติดต่อ Facebook',
    target: '_blank',
  },
  {
    name: 'Instagram',
    icon: 'ri-instagram-line',
    link: 'https://www.instagram.com/w4kims/?hl=th',
    detail: 'w4kims',
    description: 'ช่องทางติดต่อ Instragram',
    target: '_blank',
  },
  {
    name: 'GitHub',
    icon: 'ri-github-fill',
    link: 'https://github.com/Whakimz',
    detail: 'Whakimz',
    description: 'โปรเจกต์และผลงานต่างๆ',
    target: '_blank',
  },
]
</script>

<template>
  <!-- Hero Section with Background Pattern -->
  <div class="min-h-screen bg-base-200 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full"></div>
      <div
        class="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary via-secondary to-accent opacity-70 rounded-full"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-tl from-success via-warning to-neutral opacity-80 rounded-full"
      ></div>
    </div>
    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16 relative">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="badge badge-secondary mb-4">Contact Us</div>
        <h1 class="text-5xl font-bold mb-4">GET IN TOUCH</h1>
        <p class="text-xl text-base-content/60 max-w-xl mx-auto">ช่องทางการติดต่อ</p>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <template v-for="(contact, index) in contacts" :key="index">
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body items-center text-center">
              <!-- Icon -->
              <div
                class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
              >
                <i :class="[contact.icon, 'text-3xl text-primary']"></i>
              </div>

              <!-- Contact Details -->
              <h2 class="card-title text-2xl mb-2">{{ contact.name }}</h2>
              <p class="text-base-content/60 mb-4">{{ contact.description }}</p>

              <!-- Contact Button -->
              <div class="card-actions">
                <a
                  :href="contact.link || '#'"
                  :target="contact.target || '_self'"
                  class="btn btn-primary btn-wide"
                >
                  <i :class="[contact.icon, 'mr-2']"></i>
                  {{ contact.detail }}
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- Bottom CTA Section -->
      <div class="text-center mt-16">
        <div class="stats shadow inline-flex">
          <div class="stat place-items-center">
            <div class="stat-title">ประสบการณ์</div>
            <div class="stat-value">1 ปี</div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">โปรเจกต์</div>
            <div class="stat-value text-primary">4</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
