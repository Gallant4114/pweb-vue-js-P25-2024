//AddBookView

<script lang="ts">
import { defineComponent } from "vue";
import { format } from "date-fns";

export default defineComponent({
  name: "AddBookView",
  data() {
    return {
      title: "",
      author: "",
      publishedDate: "",
      publisher: "",
      description: "",
      coverImage: "",
      ratingAverage: 0,
      ratingCount: 0,
      tags: "",
      initialQty: 0,
      qty: 0,
      error: false,
      errorMsg: "",
    };
  },
  methods: {
    formatDate(date: string): string {
      return format(new Date(date), "dd MMMM yyyy");
    },
    async addBook() {
      const newBook = {
        title: this.title,
        author: this.author,
        publishedDate: this.formatDate(this.publishedDate),
        publisher: this.publisher,
        description: this.description,
        coverImage: this.coverImage,
        rating: {
          average: this.ratingAverage,
          count: this.ratingCount,
        },
        tags: this.tags.split(",").map((tag) => tag.trim()),
        initialQty: this.initialQty,
        qty: this.qty,
      };

      const response = await fetch("http://localhost:4000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        alert("Book added successfully!");
        this.error = false;
        this.$router.push("/");
      } else {
        this.error = true;
        const data = await response.json();
        if (data.message.includes("duplicate")) {
          this.errorMsg = "Book already exists!";
        } else {
          this.errorMsg = data.message;
        }
      }
    },
  },
});
</script>

<template>
  <main class="mt-16 mx-auto pb-24 max-w-4xl">
    <h1 class="font-extrabold text-4xl text-center text-gray-800 mb-8">
      📚 Add a New Book
    </h1>
    <form
      @submit.prevent="addBook"
      class="max-w-3xl rounded-2xl mx-auto bg-gradient-to-r from-blue-100 to-blue-50 p-10 shadow-2xl"
    >
      <!-- Title -->
      <div class="mb-6">
        <label for="title" class="block text-lg font-bold text-gray-700 mb-2">
          Title
        </label>
        <input
          v-model="title"
          id="title"
          type="text"
          placeholder="Kisah Agus Resing"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <!-- Author -->
      <div class="mb-6">
        <label for="author" class="block text-lg font-bold text-gray-700 mb-2">
          Author
        </label>
        <input
          v-model="author"
          id="author"
          type="text"
          placeholder="Yanto Balap"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <!-- Published Date -->
      <div class="mb-6">
        <label
          for="publishedDate"
          class="block text-lg font-bold text-gray-700 mb-2"
        >
          Published Date
        </label>
        <input
          v-model="publishedDate"
          id="publishedDate"
          type="date"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <!-- Publisher -->
      <div class="mb-6">
        <label
          for="publisher"
          class="block text-lg font-bold text-gray-700 mb-2"
        >
          Publisher
        </label>
        <input
          v-model="publisher"
          id="publisher"
          type="text"
          placeholder="Amazon"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <!-- Description -->
      <div class="mb-6">
        <label
          for="description"
          class="block text-lg font-bold text-gray-700 mb-2"
        >
          Description
        </label>
        <textarea
          v-model="description"
          id="description"
          placeholder="Sejarah Agus Resing"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 resize-none"
          required
        ></textarea>
      </div>

      <!-- Cover Image -->
      <div class="mb-6">
        <label
          for="coverImage"
          class="block text-lg font-bold text-gray-700 mb-2"
        >
          Cover Image URL
        </label>
        <input
          v-model="coverImage"
          id="coverImage"
          type="url"
          placeholder="https://placehold.co/300x200"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <!-- Rating Average -->
      <div class="grid grid-cols-2 gap-6">
        <div class="mb-6">
          <label
            for="ratingAverage"
            class="block text-lg font-bold text-gray-700 mb-2"
          >
            Rating Average
          </label>
          <input
            v-model="ratingAverage"
            id="ratingAverage"
            type="number"
            step="0.1"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <!-- Rating Count -->
        <div class="mb-6">
          <label
            for="ratingCount"
            class="block text-lg font-bold text-gray-700 mb-2"
          >
            Rating Count
          </label>
          <input
            v-model="ratingCount"
            id="ratingCount"
            type="number"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
      </div>

      <!-- Tags -->
      <div class="mb-6">
        <label for="tags" class="block text-lg font-bold text-gray-700 mb-2">
          Tags (comma separated)
        </label>
        <input
          v-model="tags"
          id="tags"
          type="text"
          placeholder="Masakan, Balapan, Petualangan"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <!-- Initial Quantity -->
      <div class="grid grid-cols-2 gap-6">
        <div class="mb-6">
          <label
            for="initialQty"
            class="block text-lg font-bold text-gray-700 mb-2"
          >
            Initial Quantity
          </label>
          <input
            v-model="initialQty"
            id="initialQty"
            type="number"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <!-- Quantity -->
        <div class="mb-6">
          <label for="qty" class="block text-lg font-bold text-gray-700 mb-2">
            Quantity
          </label>
          <input
            v-model="qty"
            id="qty"
            type="number"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
      </div>

      <!-- Error Message -->
      <h5
        class="font-semibold text-xl text-red-500 mb-8 text-center"
        v-show="error"
      >
        {{ errorMsg }}
      </h5>

      <!-- Submit Button -->
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:bg-blue-800 hover:scale-110 hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Book
        </button>
      </div>
    </form>
  </main>
</template>
