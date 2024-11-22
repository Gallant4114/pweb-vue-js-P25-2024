<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Daftar Buku</h1>
    <!-- Spinner saat data sedang dimuat -->
    <div v-if="loading" class="text-center">
      <LoadingSpinner />
    </div>
    <!-- Pesan error -->
    <div v-else-if="error" class="text-red-500">
      {{ error }}
    </div>
    <!-- Daftar buku -->
    <div v-else class="grid gap-4">
      <div
        v-for="book in books"
        :key="book.id"
        class="p-4 border rounded shadow"
      >
        <h2 class="text-lg font-semibold">{{ book.title }}</h2>
        <p>Pengarang: {{ book.author }}</p>
        <p>Kategori: {{ book.category }}</p>
        <p>Status: {{ book.available ? "Tersedia" : "Dipinjam" }}</p>
        <router-link
          :to="`/books/${book.id}`"
          class="text-blue-500 underline"
        >
          Detail
        </router-link>
        <button
          @click="handleDelete(book.id)"
          class="text-red-500 ml-4"
        >
          Hapus
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useBooksStore } from "../store/books";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default defineComponent({
  components: { LoadingSpinner },
  setup() {
    const booksStore = useBooksStore();

    // Properti reaktif diambil dari store
    const books = booksStore.books;
    const loading = booksStore.loading;
    const error = booksStore.error;

    // Fungsi hapus buku
    const handleDelete = (id: string) => {
      booksStore.deleteBook(id);
    };

    return { books, loading, error, handleDelete };
  },
});
</script>
