<template>
  <div class="contact-us">
    <section class="contact-header text-center bg-green-600 text-white py-6">
      <h1 class="text-4xl font-bold">We'd Love to Hear From You!</h1>
      <p class="text-lg mt-2">Thank you for visiting our website. If you have any questions, comments, or need assistance, please don't hesitate to reach out. We're here to help and would love to hear from you.</p>
    </section>

    <section class="get-in-touch mt-8">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Get in Touch</h2>
        <p class="text-lg text-center mt-4">Fill out the contact form below, and one of our friendly team members will respond to your inquiry as soon as possible.</p>
        <form @submit.prevent="submitForm" class="contact-form mt-4 mx-auto w-full max-w-lg">
          <div class="mb-4">
            <label class="block text-lg font-bold mb-2" for="name">Your Name</label>
            <input type="text" id="name" v-model="contactForm.name" class="w-full px-3 py-2 border rounded" required>
          </div>
          <div class="mb-4">
            <label class="block text-lg font-bold mb-2" for="email">Your Email</label>
            <input type="email" id="email" v-model="contactForm.email" class="w-full px-3 py-2 border rounded" required>
          </div>
          <div class="mb-4">
            <label class="block text-lg font-bold mb-2" for="message">Your Message</label>
            <textarea id="message" v-model="contactForm.message" rows="4" class="w-full px-3 py-2 border rounded" required></textarea>
          </div>
          <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </section>

    <section class="other-ways mt-8 bg-gray-100 py-6">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold">Other Ways to Reach Us</h2>
        <p class="text-lg mt-4">Prefer to contact us directly? You can reach us through any of the following methods:</p>
        <p>Email: <a href="mailto:email@example.com" class="text-green-600 hover:underline">email@example.com</a></p>
        <p>Phone: <a href="tel:123-456-7890" class="text-green-600 hover:underline">123-456-7890</a></p>
      </div>
    </section>

    <section class="stay-connected mt-8 py-6 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold">Stay Connected</h2>
        <p class="text-lg mt-4">Follow us on social media for updates, news, and more:</p>
        <p>[Facebook] | [Twitter] | [Instagram] | [LinkedIn]</p>
      </div>
    </section>

    <!-- Query Form Section -->
    <section class="query-form mt-8">
      <div class="container mx-auto px-6">
        <div class="form-container">
            <h2 class="text-3xl font-bold text-center cursor-pointer" @click="toggleQueryForm">
            Have a Query? Let Us Know!
            </h2>
            <p class="text-lg text-center mt-4" v-if="showQueryForm">
            Please fill out the form below with your question or inquiry. Our team will review it and get back to you as soon as possible.
            </p>
            <form v-if="showQueryForm" @submit.prevent="submitQueryForm" class="mt-4 mx-auto w-full max-w-lg">
                <!-- Form fields -->
                <div class="mb-4">
                    <label class="block text-lg font-bold mb-2" for="query-email">Email *</label>
                    <input type="email" id="query-email" v-model="queryForm.email" class="input-field" required>
                </div>
                <div class="mb-4">
                    <label class="block text-lg font-bold mb-2" for="query-name">Full Name *</label>
                    <input type="text" id="query-name" v-model="queryForm.fullName" class="input-field" required>
                </div>
                <!-- Dropdown for query type -->
                <div class="mb-4">
                    <label class="block text-lg font-bold mb-2" for="query-type">What is your query about? *</label>
                    <select id="query-type" v-model="queryForm.queryType" class="input-field" required>
                    <option disabled value="">Please select one</option>
                    <option>Plant Care</option>
                    <option>Garden Design</option>
                    <option>Herbal Remedies</option>
                    <option>General Inquiry</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-lg font-bold mb-2" for="query-details">Please provide more details about your inquiry. *</label>
                    <textarea id="query-details" v-model="queryForm.details" class="input-field" rows="4" required></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded">Submit</button>
                    <button type="button" @click="clearQueryForm" class="bg-gray-300 hover:bg-gray-400 text-black px-6 py-2 rounded">Clear Form</button>
                </div>
            </form>
        </div>
      </div>
    </section>

    <!-- Expandable Feedback Form Section -->
    <section class="feedback-form mt-4">
      <div class="container mx-auto px-6">
        <div class="form-container">
            <h2 class="text-3xl font-bold text-center cursor-pointer" @click="toggleFeedbackForm">
            Feedback for 3D Virtual Garden
            </h2>
            <div v-if="showFeedbackForm">
                <p class="text-lg mt-4">Thank you for visiting the 3D Virtual Garden! Your feedback is essential in helping us improve and provide a better experience. Please take a moment to share your thoughts.</p>
                <form @submit.prevent="submitFeedbackForm" class="mt-4">
                    <label class="block text-lg font-bold">Email *</label>
                    <input type="email" v-model="feedbackForm.email" required>
                    <label class="block text-lg font-bold">Name *</label>
                    <input type="text" v-model="feedbackForm.name" required>
                    <label class="block text-lg font-bold">How would you rate your overall experience on the website? *</label>
                    <select v-model="feedbackForm.rating" required>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>Poor</option>
                    </select>
                    <label class="block text-lg font-bold">What did you like the most about our website? *</label>
                    <textarea v-model="feedbackForm.favoriteFeature" required></textarea>
                    <label class="block text-lg font-bold">Which features did you find most useful? *</label>
                    <div>
                    <label><input type="checkbox" v-model="feedbackForm.usefulFeatures" value="3D Plant Exploration"> 3D Plant Exploration</label>
                    <label><input type="checkbox" v-model="feedbackForm.usefulFeatures" value="Plant Information Section"> Plant Information Section</label>
                    <label><input type="checkbox" v-model="feedbackForm.usefulFeatures" value="Interactive Learning Tools"> Interactive Learning Tools</label>
                    <label><input type="checkbox" v-model="feedbackForm.usefulFeatures" value="Search and Filter Options"> Search and Filter Options</label>
                    <label><input type="checkbox" v-model="feedbackForm.usefulFeatures" value="Overall Design"> Overall Design</label>
                    </div>
                    <label class="block text-lg font-bold">Did you encounter any issues or difficulties while using the website? *</label>
                    <select v-model="feedbackForm.issuesEncountered" required>
                    <option>Yes</option>
                    <option>No</option>
                    </select>
                    <label class="block text-lg font-bold" v-if="feedbackForm.issuesEncountered === 'Yes'">If yes, please specify the issue or suggest improvements:</label>
                    <textarea v-if="feedbackForm.issuesEncountered === 'Yes'" v-model="feedbackForm.issuesDetails" required></textarea>
                    <label class="block text-lg font-bold">How likely are you to recommend our website to others? *</label>
                    <!-- Rating with Font Awesome icons -->
                    <div>
                        <i class="fas fa-star" v-for="n in 5" :class="{ 'active': feedbackForm.rating >= n }" @click="feedbackForm.rating = n" :key="n"></i>
                    </div>
                    <label class="block text-lg font-bold">What additional features or changes would you like to see in the future?</label>
                    <textarea v-model="feedbackForm.additionalFeatures"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: ''
      },
      showQueryForm: false,
      showFeedbackForm: false,
      queryForm: {
        email: '',
        fullName: '',
        queryType: '',
        details: ''
      },
      feedbackForm: {
        email: '',
        name: '',
        rating: 1,
        favoriteFeature: '',
        usefulFeatures: [],
        issuesEncountered: 'No',
        issuesDetails: '',
        additionalFeatures: '',
      }
    };
  },
  methods: {
    submitForm() {
      // Logic to handle form submission, e.g., making an API call
      alert('Form submitted!'); // Placeholder
    },
    toggleQueryForm() {
      this.showQueryForm = !this.showQueryForm;
    },
    submitQueryForm() {
      // Handle query form submission
      console.log("Query Submitted:", this.queryForm);
    },
    clearQueryForm() {
      this.queryForm = {
        email: '',
        fullName: '',
        queryType: '',
        details: ''
      };
    },
    toggleFeedbackForm() {
      this.showFeedbackForm = !this.showFeedbackForm;
    },
    submitFeedbackForm() {
      // Logic for feedback form submission
      console.log('Feedback form submitted:', this.feedbackForm);
    }
  }
};
</script>

<style scoped>
  .contact-us {
    background-image: url('../assets/Images/contactusbg.jpg');
    background-size: cover; /* Cover the entire area */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Do not repeat the image */
  }
  input:focus, textarea:focus {
    border-color: #66afe9;
    outline: none;
  }
  .contact-form button {
    transition: background-color 0.3s ease;
  }
  .input-field {
    width: 100%;
    padding: 8px;
    border: 2px solid #ccc;
    border-radius: 8px;
  }
  .submit-btn, .clear-btn {
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  input, textarea, select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .fas.fa-star {
    cursor: pointer;
    color: #ccc; /* Default color */
  }
  .fas.fa-star.active {
    color: gold; /* Active color */
  }
  .form-container {
    background: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
  }

  .form-header {
    font-size: 24px; /* Reduced font size */
    cursor: pointer;
    margin-bottom: 10px;
  }

  .form-content {
    font-size: 16px; /* Adjusted content font size */
  }
  .form-buttons button {
    margin-right: 10px;
  }

  button {
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    border: none;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
