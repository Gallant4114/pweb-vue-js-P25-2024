// HomeView

<script lang="ts">
import BookCard from "../components/BookCard.vue";

interface BookObject {
  _id: string;
  title: string;
  author: string;
  tags: string[];
  publishedDate: string;
  initialQty: number;
  qty: number;
  publisher: string;
}

export default {
  name: "HomeView",
  data: () => ({
    bookData: [] as BookObject[],
    fetchError: false,
  }),
  async mounted() {
    try {
      const response = await fetch("http://localhost:4000/book");
      if (!response.ok) {
        throw new Error("Failed to fetch book data");
      }
      const data = await response.json();
      this.bookData = [...data.data];
    } catch (error) {
      console.error(error);
      this.fetchError = true;
    }
  },
  components: {
    BookCard,
  },
};
</script>

<template>
  <main class="mt-10 mx-auto pb-24 max-w-7xl">
    <h1
      class="font-bold text-4xl text-center text-gray-800 border-b-4 border-blue-500 inline-block pb-2"
    >
      Welcome to Ngawi Bookstore Dashboard
    </h1>
    <div class="flex flex-wrap justify-center gap-6 mt-12">
      <!-- Book Cards -->
      <BookCard
        v-if="bookData.length"
        v-for="book in bookData"
        :key="book._id"
        :book="book"
        class="w-full sm:w-5/12 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
      />

      <!-- Error Message -->
      <h1
        class="font-bold text-2xl text-center text-red-500 w-full mt-12"
        v-else-if="fetchError"
      >
        Failed to load book data 😔
      </h1>

      <!-- Loading Message -->
      <h1
        class="font-semibold text-2xl text-center text-gray-600 w-full mt-12 animate-pulse"
        v-else
      >
        Loading book data... 📚
      </h1>
    </div>
  </main>
</template>
