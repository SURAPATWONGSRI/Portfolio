<script setup>
import HeroProfile from '@/components/HeroProfile.vue'
import ResumeView from '@/components/MyResume.vue'
import Project from '@/components/MyProject.vue'
import Contact from '@/components/MyContact.vue'
// import Mystackskill from '@/components/Mystackskill.vue'
</script>

<template>
  <main>
    <section id="home">
      <HeroProfile />
    </section>
    <!-- <section>
      <Mystackskill />
    </section> -->
    <section id="resume">
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
