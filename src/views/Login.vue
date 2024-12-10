<template>
    <div class="auth-page bg-gray-100 min-h-screen flex items-center justify-center">
      <section class="auth-container bg-white shadow-lg rounded-lg p-8">
        <div class="tabs flex justify-around mb-6">
          <button
            :class="{'active': activeTab === 'login', 'inactive': activeTab !== 'login'}"
            @click="activeTab = 'login'"
          >Login</button>
          <button
            :class="{'active': activeTab === 'signup', 'inactive': activeTab !== 'signup'}"
            @click="activeTab = 'signup'"
          >Sign Up</button>
        </div>
  
        <!-- Login Form -->
        <div v-if="activeTab === 'login'" class="login-form">
          <h1 class="text-2xl font-bold text-center mb-4">Login to Your Account</h1>
          <form @submit.prevent="handleLogin" class="space-y-4">
            <input type="email" v-model="loginForm.email" required placeholder="Email" class="form-input">
            <input type="password" v-model="loginForm.password" required placeholder="Password" class="form-input">
            <button type="submit" class="submit-btn">Login</button>
            <p class="text-center mt-4"><router-link to="/forgot-password" class="text-blue-500 hover:underline">Forgot Password?</router-link></p>
          </form>
        </div>
  
        <!-- Sign Up Form -->
        <div v-if="activeTab === 'signup'" class="signup-form">
          <h1 class="text-2xl font-bold text-center mb-4">Create an Account</h1>
          <form @submit.prevent="handleSignUp" class="space-y-4">
            <input type="text" v-model="signupForm.fullName" required placeholder="Full Name" class="form-input">
            <input type="email" v-model="signupForm.email" required placeholder="Email" class="form-input">
            <input type="password" v-model="signupForm.password" required placeholder="Password" class="form-input">
            <button type="submit" class="submit-btn">Sign Up</button>
          </form>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        activeTab: 'login',  // Toggle between 'login' and 'signup'
        loginForm: {
          email: '',
          password: ''
        },
        signupForm: {
          fullName: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      handleLogin() {
        // Login logic
        console.log('Login attempted:', this.loginForm);
      },
      handleSignUp() {
        // Signup logic
        console.log('Signup attempted:', this.signupForm);
      }
    }
  };
  </script>
  
  <style scoped>
  
  .auth-page {
    /* background: #f7f8fa; Light grey background for the whole page */
    background-image: url('../assets/Images/loginbg.jpg');
    background-size: cover; /* Cover the entire area */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Do not repeat the image */
  }
  
  .auth-container {
    width: 100%;
    max-width: 400px; /* Sets a max-width for the form container */
  }
  
  .tabs button {
    padding: 10px 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;
    border-bottom: 2px solid transparent;
  }
  
  .tabs .active {
    color: #10b981; /* Tailwind's green-500 */
    border-bottom-color: #10b981;
  }
  
  .tabs .inactive {
    color: #6b7280; /* Tailwind's gray-500 */
  }
  
  .form-input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
  }
  
  .submit-btn {
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    display: block;
    width: 100%;
    border-radius: 8px; /* Rounded corners for the button */
    font-size: 16px; /* Larger font size */
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #45a049; /* Slightly darker green on hover */
  }
  
  .router-link {
    text-decoration: none; /* Removes underline from router links */
    color: #3b82f6; /* Tailwind's blue-500 */
  }
  
  .router-link:hover {
    text-decoration: underline; /* Adds underline on hover for accessibility */
  }
  </style>
  