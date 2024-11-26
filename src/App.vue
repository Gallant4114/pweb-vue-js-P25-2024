<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  name: "App",
  data() {
    return {
      isMenuOpen: false,
      testimonials: [
        {
          name: "Mas Narji",
          role: "CEO, Example Co.",
          testimonial:
            "This is an amazing platform! Highly recommend it to everyone.",
          image: "https://via.placeholder.com/50",
        },
        {
          name: "Mas Amba",
          role: "CTO, Another Co.",
          testimonial:
            "The features are incredibly well-designed. Great experience overall.",
          image: "https://via.placeholder.com/50",
        },
      ],
      features: [
        {
          title: "Book List",
          description:
            "Lihat daftar buku lengkap dan akses detail setiap buku yang ada di perpustakaan.",
          icon: "📚",
        },
        {
          title: "Book Management",
          description:
            "Kelola buku dengan mudah, tambahkan atau hapus buku dari daftar perpustakaan kami.",
          icon: "⚙️",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  components: {
    RouterLink,
    RouterView,
  },
});
</script>

<template>
  <!-- Header dengan Navbar -->
  <nav class="bg-blue-600 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <h3 class="text-xl font-bold">Ngawi BookStore</h3>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/add-book" class="hover:underline"
          >Add New Book</RouterLink
        >
        <RouterLink to="/about" class="hover:underline">About</RouterLink>
        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div
    :class="{
      'translate-x-full': !isMenuOpen,
      'translate-x-0': isMenuOpen,
    }"
    class="fixed top-0 right-0 h-full w-64 bg-blue-600 text-white transform transition-transform duration-300 ease-in-out md:hidden z-50"
  >
    <button
      @click="closeMenu"
      class="absolute top-4 right-4 text-white focus:outline-none"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
    <div class="mt-16 flex flex-col items-center space-y-4">
      <RouterLink to="/" class="hover:underline" @click="closeMenu"
        >Home</RouterLink
      >
      <RouterLink to="/add-book" class="hover:underline" @click="closeMenu"
        >Add New Book</RouterLink
      >
      <RouterLink to="/about" class="hover:underline" @click="closeMenu"
        >About</RouterLink
      >
      <RouterLink to="/contact" class="hover:underline" @click="closeMenu"
        >Contact</RouterLink
      >
    </div>
  </div>

  <!-- Main Content -->
  <RouterView />

  <!--Testimonial Section-->
  <section class="bg-blue-50 py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="p-6 border rounded shadow bg-white hover:bg-blue-50 transition-colors duration-300"
          >
            <div class="flex items-center mb-4">
              <img
                :src="testimonial.image"
                alt="`Photo of ${testimonial.name}`"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-semibold">{{ testimonial.name }}</h4>
                <p class="text-gray-600 text-sm">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
          </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 class="text-lg font-bold mb-2">About Us</h4>
          <p class="text-gray-400">
            We are committed to providing the best library experience.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-2">Quick Links</h4>
          <ul>
            <li>
              <RouterLink to="/privacy" class="hover:underline"
                >Privacy Policy</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/terms" class="hover:underline"
                >Terms of Service</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/faq" class="hover:underline">FAQ</RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-2">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-blue-400">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="hover:text-blue-400">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="hover:text-blue-400">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center mt-8 text-gray-400">
        &copy; 2024 Book App PWEB A. All rights reserved.
      </div>
    </div>
  </footer>
</template>
