<template>
  <form @submit.prevent="addBook">
    <div class="mb-4">
      <label class="block mb-2">Judul Buku</label>
      <input v-model="title" type="text" class="border p-2 w-full" required />
    </div>
    <div class="mb-4">
      <label class="block mb-2">Pengarang</label>
      <input v-model="author" type="text" class="border p-2 w-full" required />
    </div>
    <div class="mb-4">
      <label class="block mb-2">Kategori</label>
      <input
        v-model="category"
        type="text"
        class="border p-2 w-full"
        required
      />
    </div>
    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">
      Tambah Buku
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useBooksStore } from "@/store/books";

export default defineComponent({
  setup() {
    const booksStore = useBooksStore();
    const title = ref("");
    const author = ref("");
    const category = ref("");

    const addBook = () => {
      booksStore.addBook({
        id: Date.now().toString(),
        title: title.value,
        author: author.value,
        category: category.value,
        available: true,
      });
      title.value = "";
      author.value = "";
      category.value = "";
    };

    return { title, author, category, addBook };
  },
});
</script>
