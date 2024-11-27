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
          image: "https://cdn.discordapp.com/attachments/1181924022208974961/1310932987017166938/pic8.png?ex=674704fc&is=6745b37c&hm=9eab9748e4672062bd3a7c519d64f58ce29bf6dd84bd4693be566e9bc20f7711&",
        },
        {
          name: "Mas Amba",
          role: "CTO, Another Co.",
          testimonial:
            "The features are incredibly well-designed. Great experience overall.",
          image: "https://cdn.discordapp.com/attachments/1181924022208974961/1310932987390590996/pic7.png?ex=674704fc&is=6745b37c&hm=2bc1d9669abd2d1c9a3bd402b8ac4f24f92f02ce7d08b217c6952b7bfd0c0625&",
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
  <head>
    <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    rel="stylesheet"
  />
  </head>
  <!--Navbar berkelas-->
  <nav class="sticky top-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg z-50">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img src="/img/logo.png" alt="logo" class="w-10 h-10 object-contain">
        <h1 class="text-2xl font-bold tracking-wide">Ngawi BookStore</h1>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            class="w-8 h-8"
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

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-4">
        <RouterLink
          to="/"
          class="group relative px-4 py-2 rounded-full font-medium overflow-hidden"
        >
          <span
            class="absolute inset-0 bg-blue-800 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out"
          ></span>
          <span
            class="relative z-10 text-white group-hover:text-white transition-colors duration-300 ease-out"
          >
            Home
          </span>
        </RouterLink>
        <RouterLink
          to="/add-book"
          class="group relative px-4 py-2 rounded-full font-medium overflow-hidden"
        >
          <span
            class="absolute inset-0 bg-blue-800 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out"
          ></span>
          <span
            class="relative z-10 text-white group-hover:text-white transition-colors duration-300 ease-out"
          >
            Add New Book
          </span>
        </RouterLink>
        <RouterLink
          to="/about"
          class="group relative px-4 py-2 rounded-full font-medium overflow-hidden"
        >
          <span
            class="absolute inset-0 bg-blue-800 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out"
          ></span>
          <span
            class="relative z-10 text-white group-hover:text-white transition-colors duration-300 ease-out"
          >
            About
          </span>
        </RouterLink>
        <RouterLink
          to="/contact"
          class="group relative px-4 py-2 rounded-full font-medium overflow-hidden"
        >
          <span
            class="absolute inset-0 bg-blue-800 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out"
          ></span>
          <span
            class="relative z-10 text-white group-hover:text-white transition-colors duration-300 ease-out"
          >
            Contact
          </span>
        </RouterLink>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4"
    >
      <RouterLink
        to="/"
        class="block px-4 py-2 rounded-md hover:bg-cyan-700 transition duration-300 ease-in-out"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/add-book"
        class="block px-4 py-2 rounded-md hover:bg-cyan-700 transition duration-300 ease-in-out"
      >
        Add New Book
      </RouterLink>
      <RouterLink
        to="/about"
        class="block px-4 py-2 rounded-md hover:bg-cyan-700 transition duration-300 ease-in-out"
      >
        About
      </RouterLink>
      <RouterLink
        to="/contact"
        class="block px-4 py-2 rounded-md hover:bg-cyan-700 transition duration-300 ease-in-out"
      >
        Contact
      </RouterLink>
    </div>
  </nav>

  <!--Hero section-->
  <section class="relative bg-gray-100 py-20 overflow-hidden flex items-center justify-center min-h-screen">
      <!-- Background -->
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full opacity-30 -z-10 blur-3xl">
      </div>
      <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full opacity-30 -z-10 blur-3xl">
      </div>
    <div class="container mx-auto px-4 text-center">
      <!-- Main Title -->
      <h1
        class="text-4xl md:text-6xl font-extrabold mb-4 text-blue-700 leading-tight">
        Discover the World of Knowledge
      </h1>
      <!-- Subtitle -->
      <p class="text-gray-700 mb-6 text-lg md:text-xl">
        Explore thousands of books, curated for every reader.
      </p>
    </div>
  </section>

  <!--About Us Section-->
  <section class="py-20 bg-gray-50">
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
      <!-- Gambar -->
      <div class="flex-1">
        <img
          src="/img/pic2.png"
          alt="About Us"
          class="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
      <!-- Text -->
      <div class="flex-1 text-center md:text-left">
        <h2 class="text-3xl font-bold mb-6">About Us</h2>
        <p class="text-gray-700 text-lg mb-4">
          At Ngawi BookStore, we are passionate about providing an extensive
          library experience. Our platform offers a variety of books in
          different genres, accessible at your fingertips. We aim to create an
          inclusive space for book lovers of all ages to enjoy and expand their
          knowledge.
        </p>
        <p class="text-gray-600">
          Whether you're looking to explore new topics or simply enjoy a good
          read, we are committed to ensuring that you have the best library
          experience possible.
        </p>
      </div>
    </div>
  </section>

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
      <h2 class="text-3xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="p-6 border rounded-2xl shadow bg-white transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
           >
            <div class="relative flex item-center mb-6">
              <!--Animated img-->
                <div class="relative overflow-hidden rounded-full w-16 h-16">
                    <img
                      :src="testimonial.image"
                      alt="`Photo of ${testimonial.name}`"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />
                      <div class="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-300 transition-colors duration-500">
                      </div>
                </div>
                <div class="ml-4">
                    <h4 class="font-semibold group-hover:text-blue-700 transition-colors duration-300">{{ testimonial.name }}
                      {{ testimonial.name }}
                    </h4>
                  <p class="text-gray-600 text-sm">{{ testimonial.role }}</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  </section> 

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <!-- About Us -->
        <div>
          <h4 class="text-lg font-bold mb-3 uppercase text-cyan-400">About Us</h4>
          <p class="text-gray-400 leading-relaxed">
            We are committed to providing the best library experience with a wide range of curated books.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-3 uppercase text-cyan-400">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/privacy" class="hover:text-cyan-300 transition duration-700"
                >Privacy Policy</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/terms" class="hover:text-cyan-300 transition duration-700"
                >Terms of Service</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/faq" class="hover:text-cyan-300 transition duration-700"
                >FAQ</RouterLink
              >
            </li>
          </ul>
        </div>

        <!-- Contact-->
        <div>
          <h4 class="text-lg font-bold mb-3 uppercase text-cyan-400">Contact</h4>
          <p class="text-gray-400">Email: support@ngawibookstore.com</p>
          <p class="text-gray-400">Phone: +62 123 456 789</p>
          <p class="text-gray-400">Address: Ngawi, East Java, Indonesia</p>
          <a 
            href="https://maps.app.goo.gl/qvbigRxRahkabgZz9"
            target="_blank"
            class="text-cyan-500 hover:text-cyan-700 transition-colors duration-300"
            rel="noopener noreferrer"
          >
            <i class="fas fa-map-maker alt"></i>View on Google Maps
          </a>
        </div>

        <!-- Follow-->
        <div>
          <h4 class="text-lg font-bold mb-3 uppercase text-cyan-400">Follow Us</h4>
          <div class="flex space-x-4">
            <a
              href="#"
              class="hover:text-blue-500 transition duration-300 text-2xl"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              class="hover:text-blue-400 transition duration-300 text-2xl"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="hover:text-pink-500 transition duration-300 text-2xl"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/shorts/SXHMnicI6Pg"
              class="hover:text-red-500 transition duration-300 text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; 2024 Ngawi BookStore. All rights reserved.
      </div>
    </div>
  </footer>
</template>