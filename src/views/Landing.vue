<template>
  <div id="app" class="min-h-screen">

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div class="md:w-1/2 p-10">
          <h1 class="text-5xl font-bold text-white mb-6">Explore the World of Medicinal Plants</h1>
          <p class="text-xl text-white mb-6">Discover, learn, and create your virtual herbal garden with immersive 3D models and expert-guided insights.</p>
          <router-link to="/plants-directory" class="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition ease-in-out duration-300 block mx-auto md:mx-0">
            Start Exploring
          </router-link>
        </div>
        <div class="md:w-1/2">
          <canvas id="heroCanvas" style="width:100%; height: auto;"></canvas>
        </div>
      </div>
    </section>


    <!-- Features Showcase Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Virtual Herbal Garden?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <!-- 3D Model Container -->
            <div ref="modelContainer" style="width: 300px; height: 300px; margin: auto;"></div>
            <h3 class="text-xl font-bold">Interactive 3D Models</h3>
            <p>Rotate, zoom, and explore medicinal plants from every angle.</p>
          </div>
          <div class="text-center">
            <img src="https://via.placeholder.com/150" alt="Plant Details" class="mx-auto mb-4">
            <h3 class="text-xl font-bold">Detailed Information</h3>
            <p>Learn about the botanical name, uses, and cultivation of each plant.</p>
          </div>
          <div class="text-center">
            <img src="https://via.placeholder.com/150" alt="Virtual Tours" class="mx-auto mb-4">
            <h3 class="text-xl font-bold">Virtual Tours</h3>
            <p>Discover themed gardens tailored to your health needs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Virtual Tours Section Preview -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-12">Featured Virtual Tours</h2>
        <!-- YouTube Video Embed -->
        <div class="youtube-video-container mb-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=BWb9T51v08w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Loop through tours if available -->
          <div v-for="tour in tours" :key="tour.id" class="p-6 bg-gray-100 rounded-lg shadow">
            <h3 class="text-xl font-bold">{{ tour.title }}</h3>
            <p>{{ tour.description }}</p>
            <router-link :to="`/tours/${tour.id}`" class="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">Explore Tour</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Virtual Tours Section -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Take a Journey Through Medicinal Wisdom</h2>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 shadow rounded-lg">
              <!-- <img src="https://via.placeholder.com/300" alt="Tour 1" class="w-full h-40 object-cover rounded mb-4"> -->
              <h3 class="text-xl font-bold">Immunity Boosters</h3>
              <p>Explore plants that enhance your immune system naturally.</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 shadow rounded-lg">
              <img src="https://via.placeholder.com/300" alt="Tour 2" class="w-full h-40 object-cover rounded mb-4">
              <h3 class="text-xl font-bold">Skincare Secrets</h3>
              <p>Discover plants with amazing skincare benefits.</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 shadow rounded-lg">
              <img src="https://via.placeholder.com/300" alt="Tour 3" class="w-full h-40 object-cover rounded mb-4">
              <h3 class="text-xl font-bold">Digestive Health</h3>
              <p>Learn about plants that improve digestion and gut health.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plant Explorer Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Discover Plants by Their Medicinal Benefits</h2>
        <div>
          <input type="text" v-model="searchQuery" class="w-full p-3 rounded border mb-6" placeholder="Search for a plant...">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="plant in filteredPlants" :key="plant.id" class="text-center bg-gray-100 p-6 shadow rounded">
              <img :src="plant.image" alt="Plant" class="mx-auto mb-4 rounded h-40 w-40 object-cover">
              <h3 class="text-xl font-bold">{{ plant.name }}</h3>
              <p>{{ plant.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Plant Recommendation Tool Teaser -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-12">Find Your Plant</h2>
        <div>
          <input type="text" v-model="symptomQuery" placeholder="Enter your symptoms or health goals" class="w-full md:w-1/2 p-3 border rounded mx-auto mb-6">
          <button @click="fetchRecommendations" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow">Get Recommendations</button>
        </div>
      </div>
    </section>

    <!-- E-commerce Section Preview -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-12">Shop Our Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Loop through products if available -->
          <div v-for="product in products" :key="product.id" class="p-6 bg-gray-100 rounded-lg shadow">
            <img :src="product.image" alt="Product" class="w-40 h-40 object-cover mx-auto mb-4">
            <h3 class="text-xl font-bold">{{ product.name }}</h3>
            <p>{{ formatCurrency(product.price) }}</p>
            <router-link :to="`/store/${product.id}`" class="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">Buy Now</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="bg-green-50 py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">How Virtual Herbal Garden Can Help You</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-lg shadow">
            <img src="https://via.placeholder.com/150" alt="Benefit 1" class="mx-auto mb-4">
            <h3 class="text-xl font-bold">Boost Knowledge</h3>
            <p>Learn medicinal properties of plants with ease and detail.</p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow">
            <img src="https://via.placeholder.com/150" alt="Benefit 2" class="mx-auto mb-4">
            <h3 class="text-xl font-bold">Promote Wellness</h3>
            <p>Discover plants that align with your health goals.</p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow">
            <img src="https://via.placeholder.com/150" alt="Benefit 3" class="mx-auto mb-4">
            <h3 class="text-xl font-bold">Share Insights</h3>
            <p>Bookmark and share information with family and friends.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-green-50 rounded-lg shadow">
            <p class="italic">"Virtual Herbal Garden is a game-changer for learning about medicinal plants!"</p>
            <div class="mt-4 flex items-center">
              <img src="https://via.placeholder.com/50" alt="User 1" class="w-12 h-12 rounded-full">
              <div class="ml-4">
                <h4 class="font-bold">Dr. A. Sharma</h4>
                <p>AYUSH Practitioner</p>
              </div>
            </div>
          </div>
          <div class="p-6 bg-green-50 rounded-lg shadow">
            <p class="italic">"The 3D models and virtual tours make learning engaging and fun."</p>
            <div class="mt-4 flex items-center">
              <img src="https://via.placeholder.com/50" alt="User 2" class="w-12 h-12 rounded-full">
              <div class="ml-4">
                <h4 class="font-bold">Ananya Roy</h4>
                <p>Herbal Enthusiast</p>
              </div>
            </div>
          </div>
          <div class="p-6 bg-green-50 rounded-lg shadow">
            <p class="italic">"The perfect platform to deepen your knowledge about nature's pharmacy."</p>
            <div class="mt-4 flex items-center">
              <img src="https://via.placeholder.com/50" alt="User 3" class="w-12 h-12 rounded-full">
              <div class="ml-4">
                <h4 class="font-bold">Ravi Kumar</h4>
                <p>Botany Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Our Mission</h2>
        <div class="flex flex-col md:flex-row items-center md:space-x-8">
          <div class="md:w-1/2">
            <p class="text-lg">At Virtual Herbal Garden, we strive to bridge the gap between tradition and technology by offering a comprehensive platform for exploring the rich world of medicinal plants. Our mission is to educate, inspire, and empower users to embrace natural wellness.</p>
          </div>
          <div class="md:w-1/2">
            <img src="https://via.placeholder.com/500x300" alt="About Us" class="rounded-lg shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Subscription Section -->
    <section class="bg-green-600 py-16 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-8">Subscribe for Updates</h2>
        <form @submit.prevent="subscribe" class="flex flex-col md:flex-row items-center justify-center">
          <input type="email" v-model="email" class="p-3 rounded text-gray-800 md:w-1/2" placeholder="Enter your email address" required>
          <button type="submit" class="bg-yellow-500 text-green-800 px-6 py-3 mt-4 md:mt-0 md:ml-4 rounded shadow hover:bg-yellow-400 transition">Subscribe</button>
        </form>
        <p v-if="subscriptionMessage" class="text-center mt-4">{{ subscriptionMessage }}</p>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-800 py-6 text-white">
      <div class="container mx-auto px-6 text-center">
        <p>&copy; 2024 Virtual Herbal Garden. All rights reserved.</p>
        <div class="mt-4 flex justify-center space-x-4">
          <a href="#" class="hover:text-yellow-400">Facebook</a>
          <a href="#" class="hover:text-yellow-400">Twitter</a>
          <a href="#" class="hover:text-yellow-400">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: "LandingPage",
  mounted() {
    this.initThreeJS();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    this.renderer.dispose(); // clean up the renderer
  },
  data() {
    return {
      plants: [
        { id: 1, name: "Tulsi", description: "Boosts immunity.", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Neem", description: "Good for skin health.", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Aloe Vera", description: "Soothes skin irritation.", image: "https://via.placeholder.com/150" },
      ],
      email: "",
      searchQuery: '',
    };
  },
  
  methods: {
    handleSubscription() {
      if (this.email) {
        alert(`Thank you for subscribing with: ${this.email}`);
        this.email = "";
      } else {
        alert("Please enter a valid email address.");
      }
    },
    performSearch() {
      if (this.searchQuery.trim() !== '') {
        // Navigate to search results page or filter content on the current page
        this.$router.push({ path: '/search', query: { query: this.searchQuery } });
      }
    },
    formatCurrency(value) {
      return `$${parseFloat(value).toFixed(2)}`;
    },
    initThreeJS() {
      const container = this.$refs.modelContainer;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0x404040);
      this.scene.add(ambientLight);

      const loader = new GLTFLoader();
      loader.load('/aloe_vera_plant.glb', (gltf) => {
        this.scene.add(gltf.scene);
        this.camera.position.set(0, 0, 5);
        this.animate();
        console.log("Model loaded successfully!");
      }, undefined, function (error) {
        console.error('An error happened:', error);
      });

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.1;

      window.addEventListener('resize', this.onWindowResize);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      const container = this.$refs.modelContainer;
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
    }
  }
};
</script>

<style scoped>
  nav ul li {
    position: relative;
  }
  nav ul li ul {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    min-width: 200px;
    z-index: 100;
  }
  nav ul li:hover ul {
    display: block;
  }
  nav ul li ul li {
    white-space: nowrap;
  }
  .hero-section {
  background-image: url('../assets/Images/landingbg.jpg');
  background-size: 110% auto; /* Make sure the image is larger than the container */
  background-repeat: no-repeat;
  height: 100vh;
  animation: moveBackground 25s infinite alternate ease-in-out;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
@keyframes moveBackground {
  from {
    background-position: 0% center;
  }
  to {
    background-position: 100% center;
  }
}

.youtube-video-container {
  max-width: 560px; /* Adjust based on your layout needs */
  margin: 0 auto; /* Centers the video */
}

iframe {
  width: 100%; /* Ensures the iframe takes the full width of the container */
  height: 315px; /* You can adjust the height as needed */
  border: none; /* Removes the default border around iframes */
}


/* Update the navbar to be more thematic */
.header .navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Blur effect for background */
}

.nav-item {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.nav-item:hover, .nav-item:focus {
  color: #ccff90; /* Light green on hover/focus for better visibility */
  transition: color 0.3s ease-in-out;
}

.search-bar {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  width: 200px;
}

.search-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
.modelContainer {
  width: 100%; /* Adjust based on design requirements */
  height: 300px; /* Fixed height, or adjust as necessary */
  margin: auto; /* Centering if necessary */
}
</style>