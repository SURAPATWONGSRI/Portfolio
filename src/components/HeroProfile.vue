<template>
  <div class="hero bg-base-200 min-h-screen relative overflow-hidden">
    <!-- Previous content remains the same... -->
    <div class="hero-content flex-col lg:flex-row gap-10 lg:gap-16 px-6 lg:px-20 relative">
      <img
        src="@/assets/picHero.jpg"
        class="w-full max-w-sm mt-20 lg:max-w-sm rounded-lg shadow-md mx-auto lg:mx-0 transition-all duration-700 animate-fade-in"
        alt="Surapath Wongsri - Student at Rajamangala University of Technology Thanyaburi"
        title="Surapath Wongsri"
        role="img"
      />

      <div class="text-center lg:text-left">
        <h2 class="text-3xl lg:text-4xl font-extrabold text-primary mb-4 animate-slide-in">
          👋 สวัสดีครับ, ผม สุรพัศ วงศรี
        </h2>
        <div class="p-4">
          <TypeWriter :text="introduction" :delay="50" class="text-lg text-gray-500" />
        </div>

        <RouterLink
          class="btn ml-2 btn-primary text-white font-light rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-in"
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
import { ref, defineComponent, onMounted } from 'vue'

const TypeWriter = defineComponent({
  name: 'TypeWriter',
  props: {
    text: {
      type: String,
      required: true,
    },
    delay: {
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    const displayText = ref('')
    const currentIndex = ref(0)
    const isTypingComplete = ref(false)

    onMounted(() => {
      const typeText = () => {
        if (currentIndex.value < props.text.length) {
          displayText.value += props.text[currentIndex.value]
          currentIndex.value++
          setTimeout(typeText, props.delay)
        } else {
          isTypingComplete.value = true
        }
      }
      typeText()
    })

    return {
      displayText,
      isTypingComplete,
    }
  },
  template: `
    <div class="typewriter-container">
      <span>{{ displayText }}</span><span :class="['cursor', { 'cursor-blink': isTypingComplete }]">|</span>
    </div>
  `,
})

const introduction = ref(
  `ปัจจุบันเป็นนักศึกษาจาก มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีคอมพิวเตอร์ ชั้นปีที่ 4 มีประสบการณ์ในการทำระบบจองคิวในช่วงฝึกงาน โดยใช้เทคโนโลยี (Vue.js, Python, Node.js, MySQL, PHP) ผมชอบศึกษาความรู้นอกห้องเรียนอยู่ตลอดเพื่อให้ตัวเองตามทันเทคโนโลยีปัจจุบัน`,
)
</script>

<style>
/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-in {
  animation: slideIn 0.8s ease-out;
}

.animate-bounce-in {
  animation: bounceIn 1s cubic-bezier(0.36, 0, 0.66, 1);
  animation-fill-mode: both;
}
.typewriter-container {
  display: inline-block;
  position: relative;
}

.cursor {
  display: inline-block;
  color: currentColor;
  margin-left: 2px;
  opacity: 1;
}

.cursor-blink {
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
/* Optional: Add hover effects */
.btn:hover {
  transform: translateY(-2px);
}

img:hover {
  transform: scale(1.02);
}
</style>
