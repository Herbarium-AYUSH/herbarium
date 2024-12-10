<template>
  <div class="shop-page">
    <section class="hero-section bg-green-600 text-white text-center py-6">
      <h1 class="text-4xl font-bold">Explore Our Gardening Shop</h1>
      <p class="text-lg mt-2">Find everything you need for your gardening projects.</p>
    </section>

    <section class="categories container mx-auto px-6 mt-8">
      <h2 class="text-3xl font-bold text-center">Shop by Category</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div v-for="category in categories" :key="category.id" class="category-card">
          <img :src="category.imageUrl" alt="category.name" class="w-full h-64 object-cover">
          <h3 class="text-xl font-bold mt-2">{{ category.name }}</h3>
          <router-link :to="category.link" class="text-green-600 hover:underline">Shop Now</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ShopPage',
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Plants',
          imageUrl: 'https://via.placeholder.com/300x200',
          link: '/shop/plants'
        },
        {
          id: 2,
          name: 'Seeds',
          imageUrl: 'https://via.placeholder.com/300x200',
          link: '/shop/seeds'
        },
        {
          id: 3,
          name: 'Planters',
          imageUrl: 'https://via.placeholder.com/300x200',
          link: '/shop/planters'
        },
        {
          id: 4,
          name: 'Gardening Tools',
          imageUrl: 'https://via.placeholder.com/300x200',
          link: '/shop/tools'
        }
      ]
    };
  }
};
</script>

<style scoped>
.category-card img {
  transition: transform 0.3s ease-in-out;
}
.category-card:hover img {
  transform: scale(1.05);
}
</style>
