<template>
  <div class="ai-plant-recommendations">
    <!-- Recommendations Header -->
    <section class="recommendations-header bg-green-600 text-white text-center py-6">
      <h1 class="text-4xl font-bold">AI Plant Recommendations</h1>
      <p class="text-lg mt-2">Get personalized plant suggestions based on your garden's needs.</p>
    </section>

    <!-- User Input Form -->
    <section class="user-input mt-8">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Tell Us About Your Garden</h2>
        <form @submit.prevent="fetchRecommendations" class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" v-model="userInputs.soilType" placeholder="Soil Type" class="input-field">
          <input type="text" v-model="userInputs.gardenSize" placeholder="Garden Size (in square feet)" class="input-field">
          <input type="text" v-model="userInputs.climate" placeholder="Climate Region" class="input-field">
          <input type="text" v-model="userInputs.preferences" placeholder="Plant Preferences (e.g., medicinal, ornamental)" class="input-field">
          <button type="submit" class="submit-btn bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition">Get Recommendations</button>
        </form>
      </div>
    </section>

    <!-- Recommendations Display Area -->
    <section class="recommendations-display bg-gray-100 py-8 mt-8">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Your Personalized Recommendations</h2>
        <div class="recommendations-list grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div v-for="plant in recommendedPlants" :key="plant.id" class="recommendation-card bg-white p-4 shadow rounded">
            <h3 class="text-xl font-bold">{{ plant.name }}</h3>
            <p>{{ plant.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AIPlantRecommendations',
  data() {
    return {
      userInputs: {
        soilType: '',
        gardenSize: '',
        climate: '',
        preferences: ''
      },
      recommendedPlants: [
        // This data might be fetched from an API based on user inputs
      ],
    };
  },
  methods: {
    fetchRecommendations() {
      // API call to fetch plant recommendations based on user inputs
      // This is a placeholder for demonstration purposes
      this.recommendedPlants = [
        { id: 1, name: 'Lavender', description: 'Great for relaxing aromas and helping with sleep.' },
        { id: 2, name: 'Rosemary', description: 'Perfect for enhancing memory and concentration.' },
        // Additional recommended plants
      ];
    }
  }
};
</script>

<style scoped>
.input-field {
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 8px;
}
.submit-btn {
  cursor: pointer;
}
.recommendation-card {
  transition: transform 0.3s ease;
}
.recommendation-card:hover {
  transform: scale(1.05);
}
</style>
