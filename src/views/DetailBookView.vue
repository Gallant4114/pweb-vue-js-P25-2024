//DetailBookView

<script lang="ts">
import { defineComponent } from "vue";

interface Rating {
  average: number;
  count: number;
}

interface BookDetail {
  rating: Rating;
  _id: string;
  title: string;
  author: string;
  publishedDate: string;
  publisher: string;
  description: string;
  coverImage: string;
  tags: string[];
  initialQty: number;
  qty: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default defineComponent({
  name: "DetailBookView",
  data: () => ({
    bookDetail: {} as BookDetail,
    fetchError: false,
  }),
  async mounted() {
    try {
      const response = await fetch(
        `http://localhost:4000/book/${this.$route.params.id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch book data");
      }
      const data = await response.json();
      this.bookDetail = { ...data.data };
    } catch (error) {
      console.error(error);
      this.fetchError = true;
    }
  },
  methods: {
    async deleteBook() {
      const response = await fetch(
        `http://localhost:4000/book/${this.$route.params.id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
      alert("Book has been removed!");
      this.$router.push("/");
    },
  },
  computed: {
    starRating(): string {
      const stars = Math.floor(this.bookDetail.rating.average);
      return "⭐".repeat(stars);
    },
  },
});
</script>

<template>
  <main class="mt-14 mx-auto pb-16 max-w-6xl">
    <!-- Back to Home Button -->
    <RouterLink
      to="/"
      class="px-4 text-white py-2 bg-blue-500 font-semibold rounded-full inline-block shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
    >
      ⬅️ Back to Home
    </RouterLink>

    <!-- Error Message -->
    <div v-if="fetchError" class="mt-10">
      <h1 class="font-extrabold text-3xl text-center text-red-500">
        Failed to load book data 😔
      </h1>
    </div>

    <!-- Book Details -->
    <div v-else-if="bookDetail.title" class="mt-10">
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
      >
        <!-- Book Cover -->
        <div class="w-full md:w-5/6 lg:w-[400px] lg:flex-shrink-0">
          <img
            :src="bookDetail.coverImage"
            class="rounded-lg shadow-lg w-full hover:scale-105 transform transition duration-300 ease-in-out"
            alt="Book Cover"
          />
        </div>

        <!-- Book Information -->
        <div class="text-left lg:pr-12">
          <h1
            class="font-extrabold text-2xl md:text-3xl lg:text-4xl text-gray-800"
          >
            {{ bookDetail.title }}
          </h1>
          <h2 class="text-lg text-gray-500 font-medium mt-1">
            by {{ bookDetail.author }}
          </h2>

          <h5
            class="text-sm text-yellow-500 font-semibold mt-3 flex items-center"
          >
            ⭐ {{ bookDetail.rating.average }} / 5
            <span class="ml-2 text-gray-500"
              >({{ bookDetail.rating.count }} ratings)</span
            >
          </h5>

          <hr class="border-t border-gray-300 my-4" />

          <!-- Book Details -->
          <h3 class="text-lg text-gray-700 mt-2">
            <span class="font-semibold">About:</span>
            {{ bookDetail.description }}
          </h3>
          <h3 class="text-lg text-gray-700 mt-2">
            <span class="font-semibold">Published:</span>
            {{ bookDetail.publishedDate }} by {{ bookDetail.publisher }}
          </h3>
          <h3 class="text-lg text-gray-700 mt-2">
            <span class="font-semibold">Category:</span>
            {{ bookDetail.tags.join(", ") }}
          </h3>
          <h3 class="text-lg text-gray-700 mt-2">
            <span class="font-semibold">Stock:</span>
            {{ bookDetail.qty }} of {{ bookDetail.initialQty }} books
          </h3>
        </div>
      </div>

      <!-- Remove Button -->
      <div class="mt-10 flex justify-center">
        <button
          @click="deleteBook"
          class="px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
        >
          🗑️ Remove Book
        </button>
      </div>
    </div>

    <!-- Loading Message -->
    <div v-else class="mt-10">
      <h1
        class="font-extrabold text-3xl text-center text-gray-500 animate-pulse"
      >
        Loading Book Details...
      </h1>
    </div>
  </main>
</template>
