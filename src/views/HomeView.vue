<script setup>
import HeroProfile from '@/components/HeroProfile.vue'
import ResumeView from './ResumeView.vue'
import Project from '@/components/MyProject.vue'
import Contact from '@/components/MyContact.vue'
</script>

<template>
  <main>
    <HeroProfile />
    <section id="about">
      <ResumeView />
    </section>
    <section id="project">
      <Project />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </main>
</template>
