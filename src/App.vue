<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="bg-gray-100 p-4 border-b">
    <div class="flex items-center justify-between">
      <HelloWorld msg="You did it!" />

      <nav class="flex space-x-4 text-sm">
        <RouterLink
          to="/"
          class="text-gray-700 hover:text-blue-500"
          active-class="text-blue-500 font-bold"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="text-gray-700 hover:text-blue-500"
          active-class="text-blue-500 font-bold"
        >
          About
        </RouterLink>
      </nav>
    </div>
  </header>

  <main class="p-6">
    <RouterView />
  </main>
</template>
