//BookCard

<script lang="ts">
import { RouterLink } from "vue-router";
import type { PropType } from "vue";

export interface BookObject {
  _id: string;
  title: string;
  author: string;
  publishedDate: string;
  coverImage: string;
  tags: string[];
  initialQty: number;
  qty: number;
  publisher: string;
}

export default {
  name: "BookCard",
  components: {
    RouterLink,
  },
  props: {
    book: {
      type: Object as PropType<BookObject>,
      required: true,
    },
  },
  methods: {
    getReadMoreLink(id: string) {
      return `/detail/${id}`;
    },
  },
};
</script>

<template>
  <div
    class="border border-gray-300 rounded-xl p-6 bg-gradient-to-b from-white to-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <!-- Book Cover -->
    <img
      :src="book.coverImage"
      alt="Book Cover"
      class="rounded-lg mb-4 w-full h-48 object-cover shadow-md"
    />

    <!-- Book Title and Author -->
    <h3 class="text-lg font-extrabold text-gray-800 truncate">
      {{ book.title }}
      <span class="text-blue-500 font-medium">| {{ book.author }}</span>
    </h3>

    <!-- Divider -->
    <hr class="my-3 border-t border-gray-300" />

    <!-- Published Details -->
    <h5 class="text-sm text-gray-600">
      <span class="font-semibold">Published:</span> {{ book.publishedDate }} by
      <span class="font-semibold">{{ book.publisher }}</span>
    </h5>

    <!-- Category -->
    <h5 class="text-sm text-gray-600 mt-2">
      <span class="font-semibold">Category:</span> {{ book.tags.join(", ") }}
    </h5>

    <!-- Quantity -->
    <h5 class="text-sm text-gray-600 mt-2">
      <span class="font-semibold">Quantity:</span>
      {{ book.qty }} of {{ book.initialQty }} books
    </h5>

    <!-- Read More Button -->
    <RouterLink
      :to="getReadMoreLink(book._id)"
      class="block text-center mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
    >
      Read More
    </RouterLink>
  </div>
</template>
