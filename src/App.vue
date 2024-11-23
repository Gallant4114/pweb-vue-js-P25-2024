<script setup lang="ts">
import { RouterLink } from "vue-router";

const features = [
  {
    title: "Book List",
    description: "Lihat daftar buku lengkap dan akses detail setiap buku yang ada di perpustakaan.",
    icon: "📚",
  },
  {
    title: "Book Management",
    description: "Kelola buku dengan mudah, tambahkan atau hapus buku dari daftar perpustakaan kami.",
    icon: "⚙️",
  },
];

const testimonials = [
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
];
</script>

<template>
  <!-- Header -->
  <header class="bg-blue-600 text-white">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">Ngawi BookStore</h1>
      <nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/features" class="hover:underline">Features</RouterLink>
        <RouterLink to="/about" class="hover:underline">About</RouterLink>
        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative bg-gray-100 py-20 overflow-hidden">
    <!-- Background Decorative Shapes -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full opacity-30 -z-10 blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full opacity-30 -z-10 blur-3xl"></div>

    <div class="container mx-auto px-4 text-center">
      <!-- Main Title -->
        <h1
          class="text-4xl md:text-6xl font-extrabold mb-4 text-blue-700 leading-tight"
        >
          Discover the World of Knowledge
        </h1>
        <!-- Subtitle -->
        <p class="text-gray-700 mb-6 text-lg md:text-xl">
          Explore thousands of books, curated for every reader.
        </p>

      <!-- Buttons -->
        <div class="flex justify-center gap-10 space-x-4">
          <RouterLink
            to="/signup"
            class="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:bg-blue-800 hover:scale-110 hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Get Started
          </RouterLink>
          <RouterLink
            to="/learn-more"
            class="bg-gray-300 text-gray-800 py-3 px-8 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:bg-gray-400 hover:scale-110 hover:ring-4 hover:ring-gray-500 hover:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Learn More
          </RouterLink>
        </div>
    </div>

      <!-- Illustration -->
      <div class="mt-10">
        <img
          src="https://via.placeholder.com/500x300"
          alt="Books Illustration"
          class="mx-auto rounded-lg shadow-lg"
        />
      </div> -->
  </section>

  <!-- About Us Section -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
      <!-- Image on the left -->
      <div class="flex-1">
        <img
          src="/img/pic2.png"
          alt="About Us"
          class="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      <!-- Text on the right -->
      <div class="flex-1 text-center md:text-left">
        <h2 class="text-3xl font-bold mb-6">About Us</h2>
        <p class="text-gray-700 text-lg mb-4">
          At Ngawi BookStore, we are passionate about providing an extensive library experience. Our platform offers a variety of books in different genres, accessible at your fingertips. We aim to create an inclusive space for book lovers of all ages to enjoy and expand their knowledge.
        </p>
        <p class="text-gray-600">
          Whether you're looking to explore new topics or simply enjoy a good read, we are committed to ensuring that you have the best library experience possible.
        </p>
      </div>
    </div>
  </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-8">Why Choose Our Library?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-6 border rounded-2xl shadow">
          <h3 class="text-xl font-semibold mb-2">Extensive Collection</h3>
          <p class="text-gray-700">
            Access thousands of books across various genres and categories.
          </p>
        </div>
        <div class="p-6 border rounded-2xl shadow">
          <h3 class="text-xl font-semibold mb-2">User-Friendly Platform</h3>
          <p class="text-gray-700">
            Easily browse, search, and manage your favorite books.
          </p>
        </div>
        <div class="p-6 border rounded-2xl shadow">
          <h3 class="text-xl font-semibold mb-2">Flexible Membership</h3>
          <p class="text-gray-700">
            Choose from a variety of membership plans tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  </section>

<!-- Features Section -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Our Features</h2>
    <div class="flex gap-8 justify-center items-center">

      <div v-if="!features.length" class="animate-pulse p-6 border rounded shadow">
        <div class="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div class="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>

      <!-- Book List Feature Card -->
      <RouterLink
        to="/list"
        class="p-6 border rounded-2xl shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        <div class="text-4xl mb-4 text-blue-600">📚</div>
        <h3 class="text-xl font-semibold mb-2">Book List</h3>
        <p class="text-gray-700">Lihat daftar buku yang tersedia di perpustakaan kami.</p>
      </RouterLink>

      <!-- Book Management Feature Card -->
      <RouterLink
        to="/add"
        class="p-6 border rounded-2xl shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        <div class="text-4xl mb-4 text-blue-600">🛠️</div>
        <h3 class="text-xl font-semibold mb-2">Book Management</h3>
        <p class="text-gray-700">Kelola buku dengan menambah dan menghapus buku.</p>
      </RouterLink>

    </div>
  </div>
</section>

  <!-- Testimonials Section -->
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
          <p class="text-gray-700 italic">"{{ testimonial.testimonial }}"</p>
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
            <RouterLink to="/privacy" class="hover:underline">Privacy Policy</RouterLink>
          </li>
          <li>
            <RouterLink to="/terms" class="hover:underline">Terms of Service</RouterLink>
          </li>
          <li>
            <RouterLink to="/faq" class="hover:underline">FAQ</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-bold mb-2">Follow Us</h4>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-blue-400"><i class="fab fa-facebook"></i></a>
          <a href="#" class="hover:text-blue-400"><i class="fab fa-twitter"></i></a>
          <a href="#" class="hover:text-blue-400"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="text-center mt-8 text-gray-400">
      &copy; 2024 Ngawi BookStore. All rights reserved.
    </div>
  </div>
</footer>

</template>

<style scoped>
/* Tidak ada CSS tambahan, semuanya menggunakan Tailwind */
</style>
