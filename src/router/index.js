import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/Landing.vue';
import HomePage from '@/views/Home.vue';  // Ensure you import HomePage
import PlantsDirectory from '@/views/PlantsDirectory';
import VirtualTour from '@/views/VirtualTour'
import BuildYourGarden from '@/views/BuildYourGarden'
import AIRecommendations from '@/views/AIRecommendations'
import ContactUs from '@/views/ContactUs'
import BlogPage from '@/views/Blog'
import ShopPage from '@/views/Shop'
import LoginPage from '@/views/Login.vue'
import AboutUs from '@/views/AboutUs.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // Using createWebHistory
  routes: [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/home',  // Path for the HomePage
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/plants-directory',
        name: 'PlantsDirectory',
        component: PlantsDirectory
    },
    {
        path: '/virtual-tour',
        name: 'VirtualTour',
        component: VirtualTour
    },
    {
        path: '/build-your-garden',
        name: 'BuildYourGarden',
        component: BuildYourGarden
    },
    {
        path: '/ai-recommendations',
        name: 'AIRecommendations',
        component: AIRecommendations
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/blog',
        name: 'BlogPage',
        component: BlogPage
    },
    {
        path: '/shop',
        name: 'ShopPage',
        component: ShopPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs
    }
    // Additional routes can be added here
  ]
});

export default router;
