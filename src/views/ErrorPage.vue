<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-red-500 mb-4">
        Oops! Terjadi Kesalahan
      </h1>
      <p class="text-lg text-gray-700 mb-6">
        {{ errorMessage }}
      </p>
      <router-link
        to="/"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Kembali ke Beranda
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    errorMessage: {
      type: String,
      default:
        "Kami tidak dapat memproses permintaan Anda. Silakan coba lagi nanti.",
    },
  },
});
</script>
