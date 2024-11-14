<template>
  <div class="relative">
    <div class="stacks-container flex gap-6 bg-base-200 px-6 py-4">
      <!-- Stacks Card -->
      <div class="stack-card shadow-lg p-4 bg-base-100 rounded-lg">
        <h2 class="text-xl font-semibold mb-4 text-center">Languages</h2>
        <ul class="list-disc pl-5">
          <li>JavaScript</li>
          <li>Python</li>
          <li>TypeScript</li>
          <li>Java</li>
        </ul>
      </div>

      <div class="stack-card shadow-lg p-4 bg-base-100 rounded-lg">
        <h2 class="text-xl font-semibold mb-4 text-center">Front End</h2>
        <ul class="list-disc pl-5">
          <li>Vue.js</li>
          <li>React</li>
          <li>Angular</li>
        </ul>
      </div>

      <div class="stack-card shadow-lg p-4 bg-base-100 rounded-lg">
        <h2 class="text-xl font-semibold mb-4 text-center">Back End</h2>
        <ul class="list-disc pl-5">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Django</li>
          <li>Spring Boot</li>
        </ul>
      </div>
    </div>

    <!-- Prev and Next Buttons -->
    <button
      class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-neutral text-white p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none z-10"
      @click="scrollLeft"
    >
      <i class="ri-arrow-left-line text-xl"></i>
    </button>
    <button
      class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-neutral text-white p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none z-10"
      @click="scrollRight"
    >
      <i class="ri-arrow-right-line text-xl"></i>
    </button>
  </div>
</template>

<script setup>
// Function to scroll the stacks-container left or right
const scrollLeft = () => {
  const container = document.querySelector('.stacks-container')
  const cardWidth = container.querySelector('.stack-card').offsetWidth // Width of each card
  container.scrollBy({
    left: -cardWidth * 3, // Scroll by 3 cards at once
    behavior: 'smooth',
  })
}

const scrollRight = () => {
  const container = document.querySelector('.stacks-container')
  const cardWidth = container.querySelector('.stack-card').offsetWidth // Width of each card
  container.scrollBy({
    left: cardWidth * 3, // Scroll by 3 cards at once
    behavior: 'smooth',
  })
}
</script>

<style scoped>
/* Basic Styling */
.stacks-container {
  display: flex;
  overflow-x: auto; /* Allow horizontal scrolling */
  gap: 1rem;
  scroll-behavior: smooth;
}

.stack-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 250px; /* Ensure the card has a fixed minimum width */
}

.stack-card h2 {
  color: #333;
  font-size: 1.25rem;
}

.stack-card ul {
  color: #555;
  margin-top: 0.5rem;
}

.stack-card ul li {
  margin-bottom: 0.5rem;
}

.stack-card ul li:last-child {
  margin-bottom: 0;
}

/* Buttons Styling */
button {
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

button i {
  font-size: 1.5rem;
}
</style>
