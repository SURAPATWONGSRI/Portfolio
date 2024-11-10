<script setup>
const contacts = [
  {
    name: 'Email',
    icon: 'ri-mail-line',
    link: 'devkim1910@gmaill.com',
    detail: 'devkim1910@gmaill.com',
  },
  { name: 'Phone', icon: 'ri-phone-fill', link: 'tel:+66943718956', detail: '+66 94 371 8956' },
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

    <div class="flex justify-center space-x-8 py-8">
      <template v-for="(contact, index) in contacts" :key="index">
        <a
          :href="contact.link"
          :target="contact.target || '_self'"
          class="btn btn-neutral btn-primary flex items-center space-x-2"
        >
          <i :class="contact.icon + ' text-2xl'"></i>
          <span>{{ contact.detail }}</span>
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 768px;
}
</style>
