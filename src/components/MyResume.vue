<template>
  <div class="relative p-10 bg-base-200 text-base-content">
    <div class="text-center py-10 relative">
      <h1 class="text-5xl font-bold">Resume</h1>
      <p class="text-xl text-gray-500 mt-4">ประวัติโดยย่อ</p>
    </div>

    <!-- Main Content Section -->
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative">
      <!-- Sidebar -->
      <aside
        :class="[
          themeClass,
          'lg:w-1/3 p-6 shadow-lg text-center transition-all duration-300 rounded-lg',
        ]"
      >
        <header class="mb-6">
          <img
            class="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-primary"
            src="@/assets/Profile.jpg"
            alt="Profile"
          />
          <h1 class="text-3xl font-bold mt-4 text-primary">สุรพัศ วงศรี</h1>
          <p :class="textClass" class="text-lg font-medium text-gray-600">นักศึกษา</p>
        </header>
        <!-- Contact Info -->
        <section class="mt-6 text-left text-lg">
          <p class="flex items-center gap-2 p-2">
            <i class="ri-mail-fill text-primary"></i> devkim1910@gmail.com
          </p>
          <p class="flex items-center gap-2 p-2">
            <i class="ri-phone-fill text-primary"></i> (+66) 94-371-8956
          </p>
          <p class="flex items-center gap-2 p-2">
            <i class="ri-map-pin-fill text-primary"></i> Bangkok, Thailand
          </p>
        </section>
      </aside>

      <!-- Main Content -->
      <main :class="[themeClass, 'lg:w-2/3 shadow-lg transition-all duration-300 rounded-lg p-8']">
        <!-- About Me Section -->
        <section class="mb-8">
          <h2 class="text-3xl font-bold mb-3 text-primary flex items-center">
            <i class="ri-user-line mr-2"></i>About Me
          </h2>
          <p :class="textClass" class="text-lg text-gray-700">
            ปัจจุบันเป็นนักศึกษาจาก มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี คณะวิทยาศาสตร์และเทคโนโลยี
            สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล ชั้นปีที่ 4
          </p>
        </section>

        <!-- Education Section -->
        <section class="mb-8">
          <h2 class="text-3xl font-bold mb-3 text-primary flex items-center">
            <i class="ri-book-line mr-2"></i>Education
          </h2>
          <div
            v-for="(education, index) in educationHistory"
            :key="index"
            class="border-b pb-4 mb-4"
          >
            <h3 class="text-2xl font-semibold">{{ education.degree }}</h3>
            <p class="text-gray-500 text-lg">{{ education.institution }} | {{ education.year }}</p>
            <p class="mt-2 text-gray-600">{{ education.details }}</p>
          </div>
        </section>

        <!-- Experience Section -->
        <section class="mb-8">
          <h2 class="text-3xl font-bold mb-3 text-primary flex items-center">
            <i class="ri-briefcase-line mr-2"></i>Experience
          </h2>
          <div v-for="(job, index) in experiences" :key="index" class="border-b pb-4 mb-4">
            <h3 class="text-2xl font-semibold">{{ job.position }}</h3>
            <p class="text-gray-500 text-lg">{{ job.company }} | {{ job.duration }}</p>
            <p class="mt-2 text-gray-600">{{ job.description }}</p>
          </div>
        </section>

        <!-- Skills Section -->
        <section>
          <h2 class="text-3xl font-bold mb-3 text-primary flex items-center">
            <i class="ri-code-s-slash-fill mr-2"></i>Skills
          </h2>
          <div class="flex flex-wrap gap-4 mt-2">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="flex items-center gap-2 rounded-lg p-4 shadow-md bg-base-200 hover:bg-primary hover:text-white"
            >
              <img :src="skill.image" alt="skill icon" class="w-8 h-8" />
              <span :class="textClassSkill" class="font-medium text-lg">{{ skill.name }}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

import vueIcon from '@/assets/icon/vue.svg'
import jsIcon from '@/assets/icon/javascript.svg'
import cssIcon from '@/assets/icon/css.svg'
import htmlIcon from '@/assets/icon/html.svg'
import nodeJS from '@/assets/icon/nodejs.svg'
import python from '@/assets/icon/python.svg'
import mySQL from '@/assets/icon/MySQL.svg'
import php from '@/assets/icon/php.svg'

export default defineComponent({
  setup() {
    const themeStore = useThemeStore()

    const themeClass = computed(() => {
      return themeStore.currentTheme === 'cupcake' ? 'bg-white' : 'bg-base-100'
    })
    const textClass = computed(() => {
      return themeStore.currentTheme === 'cupcake' ? 'text-gray-600' : 'text-gray-200'
    })
    const textClassSkill = computed(() => {
      return themeStore.currentTheme === 'cupcake' ? 'text-gray-600' : 'text-gray-200'
    })
    const educationHistory = ref([
      {
        degree: 'ประกาศนียบัตรวิชาชีพ (สาขาเทคโนโลยีสารสนเทศและการสื่อสาร)',
        institution: 'วิทยาลัยเทคนิคสัตหีบ',
        year: '5 พฤกษภาคม 2561 - 15 มีนาคม 2564',
        details: 'เทคโนโลยีสารสนเทศและการสื่อสาร',
      },
      {
        degree: 'วิทยาศาสตร์บัณฑิต (สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล)',
        institution: 'มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี',
        year: '5 กรกฎาคม 2564 - ปัจจุบัน',
        details: 'คณะวิทยาศาสตร์และเทคโนโลยี',
      },
    ])

    const experiences = ref([
      {
        position: 'IT-Support (Intern)',
        company: 'Thai-Austrain Technical College',
        duration: '1 กรกฎาคม 2563 - 19 ตุลาคม 2563',
        description:
          'ดูแลรับผิดชอบ จัดการ แก้ไข ซ่อมแซม บำรุงรักษาเครื่องใช้อุปกรณ์คอมพิวเตอร์ ตลอดจน Software และ Hardware ขององค์กรให้อยู่ในสภาพที่ดี และพร้อมใช้งานอยู่ตลอดเวลา',
      },
      {
        position: 'Developer (Intern)',
        company: 'BeTask Consulting Co., Ltd.',
        duration: '2 กรกฎาคม 2567 - 28 ตุลาคม 2567',
        description: 'ทำงานด้านการพัฒนาและทดสอบซอฟต์แวร์ทั้งฝั่ง Front-End และ Back-End',
      },
    ])

    const skills = ref([
      { name: 'HTML', image: htmlIcon },
      { name: 'CSS', image: cssIcon },
      { name: 'JavaScript', image: jsIcon },
      { name: 'Node.js', image: nodeJS },
      { name: 'Vue.js', image: vueIcon },
      { name: 'Python', image: python },
      { name: 'MySQL', image: mySQL },
      { name: 'PHP', image: php },
    ])

    return {
      educationHistory,
      experiences,
      skills,
      themeClass,
      textClass,
      textClassSkill,
    }
  },
})
</script>
