<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-green-600">
      <div class="container mx-auto flex justify-between items-center p-6 text-white">
        <h1 class="text-3xl font-bold">
          <router-link to="/" class="hover:text-green-300">Herbarium</router-link>
        </h1>
        <nav>
          <ul class="flex space-x-4 relative">
            <li><router-link to="/home" class="flex items-center hover:bg-green-700 px-3 py-2 rounded">Home</router-link></li>
            <li><router-link to="/about-us" class="flex items-center hover:bg-green-700 px-3 py-2 rounded">About</router-link></li>
            <li class="relative group">
              <router-link to="#" class="flex items-center px-3 py-2 rounded hover:bg-green-700">Explore <i class="fa fa-caret-down pl-1"></i></router-link>
              <ul class="absolute hidden group-hover:block bg-green-600 mt-1">
                <li><router-link to="/plants-directory" class="block px-3 py-2 hover:bg-green-700">Plants Directory</router-link></li>
                <li><router-link to="/virtual-tour" class="block px-3 py-2 hover:bg-green-700">Virtual Tour</router-link></li>
                <li><router-link to="/build-your-garden" class="block px-3 py-2 hover:bg-green-700">Build Your Garden</router-link></li>
                <li><router-link to="/ai-recommendations" class="block px-3 py-2 hover:bg-green-700">AI Recommendations</router-link></li>
                <li><router-link to="/blog" class="block px-3 py-2 hover:bg-green-700">Blog</router-link></li>
                <li><router-link to="/shop" class="block px-3 py-2 hover:bg-green-700">Shop</router-link></li>
              </ul>
            </li>
            <li><router-link to="/virtual-tour" class="flex items-center hover:bg-green-700 px-3 py-2 rounded">Virtual Tour</router-link></li>
            <li><router-link to="/contact-us" class="flex items-center hover:bg-green-700 px-3 py-2 rounded">Contact Us</router-link></li>
          </ul>
        </nav>
        <div class="flex items-center space-x-4">
          <!-- Search Box -->
          <div class="flex items-center">
            <input type="text" v-model="searchQuery" placeholder="Search..." class="rounded-l-full pl-4 py-2">
            <button @click="performSearch" class="bg-green-600 p-2 rounded-r-full">
              <i class="fas fa-search text-white"></i>
            </button>
          </div>
          <!-- User Profile Icon -->
          <router-link to="/login"><i class="fas fa-user-circle text-2xl"></i></router-link>
          <!-- Shopping Cart Icon -->
          <i class="fas fa-shopping-cart text-2xl"></i>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Add any global styles you might need */
</style>
