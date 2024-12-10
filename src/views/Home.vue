<template>
  <div class="min-h-screen">

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="absolute w-full h-full bg-cover bg-center"></div>
      <div class="container mx-auto px-6 py-16 text-center relative">
        <h1 class="text-4xl text-white font-bold mb-2">Explore the World of Medicinal Plants</h1>
        <p class="text-xl text-white mb-4">Discover, learn, and create your virtual herbal garden.</p>
        <router-link to="/tours" class="bg-yellow-500 text-green-800 px-6 py-3 rounded hover:bg-yellow-600 transition duration-300">Start Exploring</router-link>
      </div>
    </section>

    <!-- Features Overview -->
    <section class="bg-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div v-for="feature in features" :key="feature.title">
            <img :src="feature.icon" alt="feature.title" class="mx-auto h-20 w-20">
            <h3 class="mt-4 font-bold">{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction to Virtual Herbal Garden -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-6 flex flex-wrap items-center">
        <div class="md:w-1/2">
          <img src="https://via.placeholder.com/500x300" alt="Herbal Garden">
        </div>
        <div class="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-3">Learn About Our Mission</h2>
          <p class="mb-4">Virtual Herbal Garden aims to connect people with the healing powers of nature, providing interactive and educational experiences.</p>
        </div>
      </div>
    </section>

    <!-- Featured Plants -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-8">Featured Plants</h2>
        <div class="flex overflow-x-auto">
          <div v-for="plant in plants" :key="plant.id" class="min-w-max px-4">
            <img :src="plant.image" alt="plant.name" class="h-40 w-40 object-cover rounded-full mx-auto">
            <h3 class="mt-4 font-bold">{{ plant.name }}</h3>
            <p>{{ plant.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- E-commerce Promo -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-8">Shop Special Offers</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="product in products" :key="product.id" class="bg-white p-6 shadow rounded-lg">
            <img :src="product.image" alt="product.name" class="h-40 w-full object-cover rounded">
            <h3 class="mt-4 font-bold">{{ product.name }}</h3>
            <p>{{ product.price }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-green-600 py-6 text-white text-center">
      <p>&copy; 2024 Virtual Herbal Garden. All rights reserved.</p>
      <div class="mt-4">
        <a href="#" class="px-4 hover:underline">About Us</a>
        <a href="#" class="px-4 hover:underline">Contact</a>
        <a href="#" class="px-4 hover:underline">Privacy Policy</a>
      </div>
      <div class="mt-4">
        <input type="email" placeholder="Subscribe to our newsletter" class="p-2 rounded" />
        <button class="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">Subscribe</button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      features: [
        { title: "3D Models", description: "Interactive 3D views of plants.", icon: "https://via.placeholder.com/64" },
        { title: "Virtual Tours", description: "Guided tours through herbal gardens.", icon: "https://via.placeholder.com/64" },
        { title: "AI Recommendations", description: "Personalized plant suggestions.", icon: "https://via.placeholder.com/64" },
        { title: "Build Your Garden", description: "Design your own virtual garden.", icon: "https://via.placeholder.com/64" }
      ],
      plants: [
        { id: 1, name: "Lavender", description: "Helps reduce stress.", image: "https://via.placeholder.com/80" },
        { id: 2, name: "Chamomile", description: "Aids sleep and digestion.", image: "https://via.placeholder.com/80" }
      ],
      products: [
        { id: 1, name: "Herbal Seeds Pack", price: "$19.99", image: "https://via.placeholder.com/300x200" },
        { id: 2, name: "Growth Starter Kit", price: "$29.99", image: "https://via.placeholder.com/300x200" }
      ]
    };
  }
};
</script>

<style scoped>
.hero-section {
  background-image: url('../assets/Images/homebg.jpg'); /* Update this path */
  background-size: cover; /* Ensures the background covers the entire element */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Prevents repeating the image */
}
</style>

