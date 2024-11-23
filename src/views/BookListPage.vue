<template>
  <div class="container mx-auto mt-8">
    <!--Header-->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold mb-6">Daftar Buku</h1>
      <p class="text-lg text-gray-600 mt-2">Temukan berbagai buku yang tersedia di Ngawi BookStore. Lihat koleksi buku eksklusif dari kami!.</p>
    </div>

    <BookList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookList from "../components/BookList.vue";

export default defineComponent({
  components: { BookList },
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
