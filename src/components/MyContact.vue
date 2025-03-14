<script setup>
const contacts = [
  {
    name: "Email",
    icon: "ri-mail-line",
    detail: "khimk635@gmaill.com",
    description: "อีเมล",
  },
  {
    name: "Phone",
    icon: "ri-phone-fill",
    detail: "+66 94 371 8956",
    description: "เบอร์โทรศัพท์",
  },
  {
    name: "Facebook",
    icon: "ri-facebook-circle-fill",
    link: "https://www.facebook.com/surapat.wongsri.1/",
    detail: "Surapat Wongsri",
    description: "ช่องทางติดต่อ Facebook",
    target: "_blank",
  },
  {
    name: "Instagram",
    icon: "ri-instagram-line",
    link: "https://www.instagram.com/w4kims/?hl=th",
    detail: "w4kims",
    description: "ช่องทางติดต่อ Instragram",
    target: "_blank",
  },
  {
    name: "GitHub",
    icon: "ri-github-fill",
    link: "https://github.com/SURAPATWONGSRI",
    detail: "Whakimz",
    description: "โปรเจกต์และผลงานต่างๆ",
    target: "_blank",
  },
];
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
    <div class="container mx-auto px-4 py-20 relative">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="badge badge-secondary badge-outline p-4 mb-4">Contact</div>
        <h1
          class="text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          My Contacts
        </h1>
        <p class="text-xl text-base-content/60 max-w-xl mx-auto">ช่องทางการติดต่อ</p>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <template v-for="(contact, index) in contacts" :key="index">
          <div
            class="card bg-base-100 hover:bg-primary/5 border border-base-300 hover:border-primary transition-all duration-300 overflow-hidden"
          >
            <div class="card-body flex flex-col justify-between">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4"
                >
                  <i :class="[contact.icon, 'text-2xl text-primary']"></i>
                </div>
                <div class="text-left">
                  <h2 class="card-title text-xl">{{ contact.name }}</h2>
                  <p class="text-sm text-base-content/60">{{ contact.description }}</p>
                </div>
              </div>

              <!-- Contact Button -->
              <div class="card-actions justify-end mt-2">
                <a
                  :href="contact.link || '#'"
                  :target="contact.target || '_self'"
                  class="btn btn-primary btn-sm px-6 rounded-full hover:scale-105 transition-transform"
                >
                  {{ contact.detail }}
                  <i :class="[contact.icon, 'ml-2 text-sm']"></i>
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
