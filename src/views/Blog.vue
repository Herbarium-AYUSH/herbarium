<template>
  <div class="blog-page">
    <section class="intro-section text-center bg-green-600 text-white py-6">
      <h1 class="text-4xl font-bold">Welcome to Our Gardening Blog</h1>
      <p class="text-lg mt-2">Explore expert gardening tips and learn how to create your own flourishing garden.</p>
    </section>

    <section class="featured-posts container mx-auto px-6 mt-8">
      <h2 class="text-3xl font-bold text-center">Featured Articles</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <!-- Dynamic blog posts -->
        <div v-for="post in featuredPosts" :key="post.id" class="blog-post">
          <img :src="post.imageUrl" alt="post.title" class="w-full h-64 object-cover">
          <h3 class="text-xl font-bold mt-2">{{ post.title }}</h3>
          <p class="text-md">{{ post.excerpt }}</p>
          <router-link :to="`/blog/${post.slug}`" class="text-green-600 hover:underline">Read more</router-link>
        </div>
      </div>
    </section>

    <section class="all-posts py-6 bg-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">All Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <!-- Dynamic blog posts -->
          <div v-for="post in allPosts" :key="post.id" class="blog-post">
            <img :src="post.imageUrl" alt="post.title" class="w-full h-48 object-cover">
            <h3 class="text-xl font-bold mt-2">{{ post.title }}</h3>
            <p class="text-md">{{ post.excerpt }}</p>
            <router-link :to="`/blog/${post.slug}`" class="text-green-600 hover:underline">Read more</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'BlogPage',
    data() {
      return {
        featuredPosts: [
          {
            id: 1,
            title: 'The Basics of Plant Care',
            excerpt: 'Learn how to keep your plants healthy with these fundamental tips.',
            imageUrl: 'https://via.placeholder.com/300x200',
            slug: 'basics-of-plant-care'
          },
          {
            id: 2,
            title: 'Organic Gardening 101',
            excerpt: 'Explore methods for growing an organic garden that thrives.',
            imageUrl: 'https://via.placeholder.com/300x200',
            slug: 'organic-gardening-101'
          },
          {
            id: 3,
            title: 'Designing a Vegetable Garden',
            excerpt: 'Plan and build a vegetable garden that suits your personal culinary needs.',
            imageUrl: 'https://via.placeholder.com/300x200',
            slug: 'designing-a-vegetable-garden'
          }
        ],
        allPosts: [
          {
            id: 1,
            title: 'The Basics of Plant Care',
            excerpt: 'Learn how to keep your plants healthy with these fundamental tips.',
            imageUrl: 'https://via.placeholder.com/300x200',
            slug: 'basics-of-plant-care'
          },
          {
            id: 2,
            title: 'Organic Gardening 101',
            excerpt: 'Explore methods for growing an organic garden that thrives.',
            imageUrl: 'https://via.placeholder.com/300x200',
            slug: 'organic-gardening-101'
          },
          {
            id: 3,
            title: 'Designing a Vegetable Garden',
            excerpt: 'Plan and build a vegetable garden that suits your personal culinary needs.',
            imageUrl: 'https://via.placeholder.com/300x200',
            slug: 'designing-a-vegetable-garden'
          },
          {
            id: 4,
            title: 'Pest Control Solutions',
            excerpt: 'Effective strategies to manage pests in your garden naturally.',
            imageUrl: 'https://via.placeholder.com/300x200',
            slug: 'pest-control-solutions'
          },
          {
            id: 5,
            title: 'Herbal Gardens and Their Benefits',
            excerpt: 'Discover the advantages of growing your own herbs at home.',
            imageUrl: 'https://via.placeholder.com/300x200',
            slug: 'herbal-gardens-benefits'
          },
          {
            id: 6,
            title: 'Watering Your Plants Right',
            excerpt: 'Tips on how to water your plants for optimal health.',
            imageUrl: 'https://via.placeholder.com/300x200',
            slug: 'watering-your-plants'
          }
        ]
      };
    },
    created() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        // Fetch posts from your API or content management system
      }
    }
  };
</script>

<style scoped>
.blog-post img {
  transition: transform 0.3s ease-in-out;
}
.blog-post:hover img {
  transform: scale(1.05);
}
</style>
