<template>
  <div>
    <h1 class="text-2xl font-bold">{{ book?.title }}</h1>
    <p>Pengarang: {{ book?.author }}</p>
    <p>Kategori: {{ book?.category }}</p>
    <p>Status: {{ book?.available ? "Tersedia" : "Dipinjam" }}</p>
    <router-link to="/" class="text-blue-500 underline">
      Kembali ke Daftar
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useBooksStore } from "@/store/books";

export default defineComponent({
  setup() {
    const route = useRoute();
    const booksStore = useBooksStore();
    const book = booksStore.getBookById(route.params.id as string);
    return { book };
  },
});
</script>
