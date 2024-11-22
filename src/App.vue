<script setup lang="ts">
import { RouterLink } from "vue-router";

const features = [
  {
    title: "Feature One",
    description: "Description of feature one.",
    icon: "🔥",
  },
  {
    title: "Feature Two",
    description: "Description of feature two.",
    icon: "🚀",
  },
  {
    title: "Feature Three",
    description: "Description of feature three.",
    icon: "💎",
  },
];

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Example Co.",
    testimonial:
      "This is an amazing platform! Highly recommend it to everyone.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Jane Smith",
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
      <nav class="flex space-x-4">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/features" class="hover:underline">Features</RouterLink>
        <RouterLink to="/about" class="hover:underline">About</RouterLink>
        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="bg-gray-100 py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
      <p class="text-gray-700 mb-6">
        Discover amazing features and experience unparalleled service.
      </p>
      <div class="flex justify-center space-x-4">
        <RouterLink
          to="/signup"
          class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Get Started
        </RouterLink>
        <RouterLink
          to="/learn-more"
          class="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
        >
          Learn More
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="p-6 border rounded shadow hover:shadow-lg"
        >
          <div class="text-4xl mb-4 text-blue-600">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-700">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="bg-blue-50 py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="p-6 border rounded shadow bg-white"
        >
          <div class="flex items-center mb-4">
            <img
              :src="testimonial.image"
              alt="User Image"
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
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; 2024 LandingPage. All rights reserved.</p>
      <nav class="flex justify-center space-x-4 mt-4">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/privacy" class="hover:underline"
          >Privacy Policy</RouterLink
        >
        <RouterLink to="/terms" class="hover:underline"
          >Terms of Service</RouterLink
        >
      </nav>
    </div>
  </footer>
</template>

<style scoped>
/* Tidak ada CSS tambahan, semuanya menggunakan Tailwind */
</style>
