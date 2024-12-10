<!-- <template>
  <div class="plants-directory">
    <header class="directory-header bg-green-600 text-white p-6">
      <h1 class="text-3xl font-bold">Plants Directory</h1>
      <input type="text" placeholder="Search plants..." v-model="searchQuery" @input="filterPlants" class="search-input px-4 py-2 rounded" />
    </header>

    <div class="filters-container p-6 bg-gray-100">
      <select v-model="selectedFilter" @change="applyFilter" class="filter-select rounded p-2">
        <option value="all">All</option>
        <option value="medicinal">Medicinal</option>
        <option value="ornamental">Ornamental</option>
        <option value="edible">Edible</option>
      </select>
    </div>

    <div class="plant-list grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <div v-for="plant in filteredPlants" :key="plant.id" class="plant-item bg-white p-4 rounded shadow">
        <div ref="modelContainers" :id="'model-container-' + plant.id" style="width: 300px; height: 300px;"></div>
        <h3 class="mt-4 font-bold">{{ plant.name }}</h3>
        <p>{{ plant.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'PlantsDirectory',
  data() {
    return {
      searchQuery: '',
      selectedFilter: 'all',
      plants: [],  // Will hold the fetched data
      filteredPlants: []
    };
  },
  methods: {
    fetchPlants() {
    // Return a new promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.plants = [
        { id: 1, name: "Moringa", description: "Helps reduce stress.", modelUrl: '/moringa.glb', type: 'medicinal' },
          { id: 2, name: "Neem", description: "Aids sleep and digestion.", modelUrl: '/neem_tree.glb', type: 'medicinal' },
          { id: 3, name: "Rose", description: "Ornamental and aromatic.", modelUrl: '/rose.glb', type: 'ornamental' }
          // Additional plants can be added here
        ];
        this.filteredPlants = this.plants;
        resolve(); // Resolve the promise after setting the plants data
      }, 1000); // Simulate API call delay
    });
  },
    filterPlants() {
      if (this.searchQuery) {
        this.filteredPlants = this.plants.filter(plant =>
          plant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredPlants = this.plants;
      }
    },
    applyFilter() {
      if (this.selectedFilter === 'all') {
        this.filteredPlants = this.plants;
      } else {
        this.filteredPlants = this.plants.filter(plant => plant.type === this.selectedFilter);
      }
    },
    initModel(plant, containerId) {
      let container = document.getElementById(containerId);
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      

      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      let loader = new GLTFLoader();
      loader.load(plant.modelUrl, (gltf) => {
        scene.add(gltf.scene);
        camera.position.set(0, 0, 5);
        console.log("Model loaded successfully!");
        }, undefined, function (error) {
          console.error('An error happened:', error);
      });

      let controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
    }
  },
  mounted() {
  this.fetchPlants().then(() => {
    this.filteredPlants.forEach(plant => {
      this.initModel(plant, 'model-container-' + plant.id);
    });
  }).catch(error => {
    console.error("Failed to load plants:", error);
  });
},
  watch: {
    searchQuery() {
      this.filterPlants();
    },
    selectedFilter() {
      this.applyFilter();
    }
  }
};
</script>

<style scoped>
  .search-input {
    margin-top: 1rem;
  }

  .filter-select {
    margin-bottom: 1rem;
  }

  .plant-item {
    transition: transform 0.3s ease;
  }

  .plant-item:hover {
    transform: scale(1.05);
  }
</style>


 -->

<template>
  <div class="plants-directory">
    <header class="directory-header bg-green-600 text-white p-6">
      <h1 class="text-3xl font-bold">Plants Directory</h1>
      <input type="text" placeholder="Search plants..." v-model="searchQuery" @input="filterPlants" class="search-input px-4 py-2 rounded" />
    </header>

    <div class="filters-container p-6 bg-gray-100">
      <select v-model="selectedFilter" @change="applyFilter" class="filter-select rounded p-2">
        <option value="all">All</option>
        <option value="medicinal">Medicinal</option>
        <option value="ornamental">Ornamental</option>
        <option value="edible">Edible</option>
      </select>
    </div>

    <div class="plant-list grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <div v-for="plant in filteredPlants" :key="plant.id" class="plant-item bg-white p-4 rounded shadow">
        <div :id="'model-container-' + plant.id" class="model-container"></div>
        <h3 class="mt-4 font-bold">{{ plant.name }}</h3>
        <p>{{ plant.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'PlantsDirectory',
  data() {
    return {
      searchQuery: '',
      selectedFilter: 'all',
      plants: [],  // Will hold the fetched data
      filteredPlants: []
    };
  },
  methods: {
    fetchPlants() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.plants = [
            { id: 1, name: "Moringa", description: "Helps reduce stress.", modelUrl: '/moringa.glb', type: 'medicinal',positionY: -2 },
            { id: 2, name: "Neem", description: "Aids sleep and digestion.", modelUrl: '/neem_tree.glb', type: 'medicinal', positionY: -1.5, scale: 0.8 },
            { id: 3, name: "Rose", description: "Ornamental and aromatic.", modelUrl: '/rose.glb', type: 'ornamental', positionY: -5 },
            { id: 4, name: "Aloe Vera", description: "Used in Skincare", modelUrl: '/aloevera.glb', type: 'medicinal',positionY: -1.5 },
            { id: 5, name: "Banana", description: "Pottasium Rich.", modelUrl: '/banana.glb', type: 'medicinal' },
            { id: 6, name: "Blackberries", description: "Rich in Vitamin B.", modelUrl: '/nettle_blackberry.glb', type: 'ornamental' },
            { id: 7, name: "Cactus", description: "Ornamental.", modelUrl: '/cactus.glb', type: 'medicinal', positionY: -1 },
            { id: 8, name: "Coconut", description: "Aids in Hydration and digestion.", modelUrl: '/coconut.glb', type: 'medicinal' },
            { id: 9, name: "Corn", description: "Rich in Carbs and Fibre.", modelUrl: '/corn.glb', type: 'ornamental' },
            { id: 10, name: "Hibiscus", description: "Helps reduce stress.", modelUrl: '/maple.glb', type: 'medicinal' },
            { id: 11, name: "Sunflower", description: "Aids sleep and digestion.", modelUrl: '/sunflower.glb', type: 'medicinal' },
            { id: 12, name: "Tulsi", description: "Many Benefits.", modelUrl: '/tulsi.glb', type: 'ornamental' },
            { id: 13, name: "Basil", description: "Spice.", modelUrl: '/scene.gltf', type: 'ornamental' },
          ];
          this.filteredPlants = this.plants;
          resolve();
        }, 1000);
      });
    },
    initModel(plant, containerId) {
      let container = document.getElementById(containerId);
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      camera.position.z = 2;

      // Ambient Light
      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

      let loader = new GLTFLoader();
      loader.load(plant.modelUrl, (gltf) => {
        // plant = gltf.scene.children[0];
        // plant.scale.set(0.001, 0.001, 0.001); // Adjust the size of the model to a small size
        // plant.position.set(0, -0.5, 0);
        scene.add(gltf.scene);
        // camera.position.set(0, 0, 5);
      });

      let controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
    }
  },
  mounted() {
    this.fetchPlants().then(() => {
      this.filteredPlants.forEach(plant => {
        this.initModel(plant, 'model-container-' + plant.id);
      });
    });
  },
  watch: {
    searchQuery() {
      this.filterPlants();
    },
    selectedFilter() {
      this.applyFilter();
    }
  }
};
</script>

<style scoped>
  .search-input {
    margin-top: 1rem;
  }

  .filter-select {
    margin-bottom: 1rem;
  }

  .plant-item {
    transition: transform 0.3s ease;
  }

  .plant-item:hover {
    transform: scale(1.05);
  }

  .model-container {
    width: 300px;
    height: 300px;
    margin: auto;
  }
</style>
