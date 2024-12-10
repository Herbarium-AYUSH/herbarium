<template>
    <div class="about-us-page">
      <section class="hero-section bg-green-600 text-white text-center py-6">
        <h1 class="text-4xl font-bold">About Us</h1>
        <p class="text-lg mt-2">Welcome to the Future of Nature Exploration!</p>
      </section>
  
      <section class="mission container mx-auto px-6 mt-8 text-center">
        <h2 class="text-3xl font-bold">Our Mission</h2>
        <p>To make knowledge about medicinal plants accessible, engaging, and interactive for everyone. We aim to foster a deeper appreciation for nature’s healing power while leveraging technology to create an educational and enjoyable experience.</p>
      </section>
  
      <section class="what-we-offer mt-8">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center">What We Offer</h2>
          <div class="offerings grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div class="offering">
              <img src="https://via.placeholder.com/300x200" alt="Immersive 3D Exploration" class="w-full">
              <h3 class="text-xl font-bold mt-2">Immersive 3D Exploration</h3>
              <p>Dive into a virtual garden filled with realistic 3D models of medicinal plants. View each plant up close and discover its unique features.</p>
            </div>
            <div class="offering">
              <img src="https://via.placeholder.com/300x200" alt="Comprehensive Plant Profiles" class="w-full">
              <h3 class="text-xl font-bold mt-2">Comprehensive Plant Profiles</h3>
              <p>Learn about each plant’s history, medicinal benefits, and traditional uses through detailed descriptions and multimedia content.</p>
            </div>
            <div class="offering">
              <img src="https://via.placeholder.com/300x200" alt="Interactive Learning" class="w-full">
              <h3 class="text-xl font-bold mt-2">Interactive Learning</h3>
              <p>Engage with an advanced search and filter system to find plants based on your interests or health needs.</p>
            </div>
          </div>
        </div>
      </section>
  
      <section class="why-choose-us mt-8 bg-gray-100 py-6">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold">Why Choose Us?</h2>
          <p>Innovation at Its Core: Our platform is one of a kind, combining technology with a passion for herbal knowledge. Accurate Information: We partner with experts to provide verified details about the plants.</p>
          <p>A Community for Nature Lovers: Join a growing community that values the power of plants and nature.</p>
        </div>
      </section>
  
      <section class="our-vision mt-8">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold">Our Vision</h2>
          <p>We envision a world where everyone has access to the knowledge and benefits of medicinal plants, inspiring healthier lifestyles and fostering a deeper connection with the natural world.</p>
        </div>
      </section>
  
      <section class="meet-the-future mt-8 mb-8">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold">Meet the Future of Green Learning</h2>
          <p>Discover. Learn. Connect. At 3D Virtual Garden, we invite you to step into a world where innovation meets tradition, and technology brings the healing power of nature to your fingertips. Thank you for joining us on this journey to explore and preserve the natural wonders of our planet.</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs'
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: auto;
  }
  .hero-section, .mission, .why-choose-us, .our-vision, .meet-the-future {
    padding: 20px;
  }
  .offerings {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .offering img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  </style>
  