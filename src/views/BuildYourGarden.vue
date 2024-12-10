<template>
  <div class="build-your-garden">
    <!-- Garden Builder Header -->
    <section class="garden-header bg-green-600 text-white text-center py-6">
      <h1 class="text-4xl font-bold">Build Your Virtual Garden</h1>
      <p class="text-lg mt-2">Design and simulate your ideal herbal garden.</p>
    </section>

    <!-- Plant Selection Area -->
    <section class="plant-selection mt-8">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Select Your Plants</h2>
        <div class="flex justify-center flex-wrap gap-4 mt-4">
          <!-- Dynamic plant selection buttons -->
          <button v-for="plant in plants" :key="plant.id" @click="selectPlant(plant)"
                  class="plant-button bg-white text-green-900 px-4 py-2 rounded shadow hover:bg-green-100">
            {{ plant.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Garden Layout Designer -->
    <section class="garden-designer bg-gray-100 py-8 mt-8">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Design Your Garden</h2>
        <div class="designer-tool mt-4">
          <!-- Placeholder for garden design tool or interactive area -->
          <div class="garden-layout mx-auto p-4 bg-white border rounded">
            <p class="text-center">Your garden layout appears here...</p>
            <!-- Interactive or drag-and-drop area -->
          </div>
        </div>
      </div>
    </section>

    <!-- Garden Tips and Suggestions -->
    <section class="garden-tips mt-8 py-8">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Gardening Tips</h2>
        <p class="text-lg text-center mt-4">Get personalized tips and suggestions based on your garden design.</p>
        <div class="tips-list mt-4 text-center">
          <ul>
            <li v-for="tip in tips" :key="tip.id" class="mt-2">{{ tip.message }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BuildYourGarden',
  data() {
    return {
      plants: [
        { id: 1, name: 'Lavender', description: 'Helps reduce stress.' },
        { id: 2, name: 'Rosemary', description: 'Improves memory.' },
        { id: 3, name: 'Mint', description: 'Aids digestion.' }
      ],
      tips: [
        { id: 1, message: 'Consider companion planting to boost plant health.' },
        { id: 2, message: 'Ensure your plants get enough sun throughout the day.' }
      ],
      selectedPlants: []
    };
  },
  methods: {
    selectPlant(plant) {
      // Logic to select plants and add to the garden layout
      this.selectedPlants.push(plant);
    }
  }
};
</script>

<style scoped>
  .garden-layout {
    height: 300px;  /*Adjust based on your design needs*/
    width: 100%;    /*Consider responsiveness*/
  }
</style>
