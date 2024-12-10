<template>
  <div class="virtual-tour">
    <!-- Tour Header -->
    <section class="tour-header bg-green-600 text-white text-center py-6">
      <h1 class="text-4xl font-bold">Explore Our Virtual Tours</h1>
      <p class="text-lg mt-2">Dive into the world of medicinal plants from the comfort of your home.</p>
    </section>

    <!-- Interactive Tour Area -->
    <section class="interactive-tour mt-8">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Interactive 360° Tour</h2>
        <div class="tour-container mt-4">
          <!-- Placeholder for interactive tour -->
          <img src="https://via.placeholder.com/900x500" alt="Interactive Tour" class="mx-auto">
          <p class="text-center mt-4">Click around to explore different areas of our herbal garden.</p>
        </div>
      </div>
    </section>

    <!-- Tour Details Section -->
    <section class="tour-details bg-gray-100 py-8">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Tour Details</h2>
        <p class="text-lg mt-4 text-center">Learn more about the plants featured in our virtual tour.</p>
        <div class="details-grid grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <!-- Sample detail cards -->
          <div class="detail-card bg-white p-4 shadow rounded">
            <h3 class="text-xl font-bold">Lavender</h3>
            <p>Lavender is known for its soothing and calming properties.</p>
          </div>
          <div class="detail-card bg-white p-4 shadow rounded">
            <h3 class="text-xl font-bold">Chamomile</h3>
            <p>Chamomile can help in reducing stress and improving sleep quality.</p>
          </div>
          <div class="detail-card bg-white p-4 shadow rounded">
            <h3 class="text-xl font-bold">Peppermint</h3>
            <p>Peppermint aids digestion and can relieve headaches.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'VirtualTour',
  data() {
    return {
      // Data related to the tours might be added here
    };
  },
  methods: {
    // Any specific methods related to interactive functionalities can be added
  }
};
</script>

<style scoped>
  .detail-card {
    transition: transform 0.3s ease;
  }

  .detail-card:hover {
    transform: scale(1.05);
  }
</style>
