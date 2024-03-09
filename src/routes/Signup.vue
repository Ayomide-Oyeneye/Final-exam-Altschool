<template>
    <div class="signup-container">
      <form @submit.prevent="submitForm" class="signup-form">
        <h2>Sign Up</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
  
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
  
        <button type="submit">Sign Up</button>
      </form>
  
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      submitForm() {
        // Simple validation
        if (!this.username || !this.email || !this.password || !this.confirmPassword) {
          this.errorMessage = 'Please fill in all fields.';
          this.resetMessages();
          return;
        }
  
        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Passwords do not match.';
          this.resetMessages();
          return;
        }
  
        // Here you would typically make an AJAX request to your backend to sign up the user
        // For the sake of this example, let's just pretend the sign up was successful
        // You can replace this with actual API calls
        this.successMessage = 'Sign up successful!';
        this.resetMessages();
  
        // Reset form fields
        this.username = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
      },
      resetMessages() {
        setTimeout(() => {
          this.errorMessage = '';
          this.successMessage = '';
        }, 3000);
      }
    }
  };
  </script>
  
  <style scoped>
  *{
    color: black;
  }
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .signup-form {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
  }
  
  .signup-form h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    font-weight: bold;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error-message, .success-message {
    text-align: center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
  }
  
  .error-message {
    background-color: #ffcdd2;
    color: #c62828;
  }
  
  .success-message {
    background-color: #c8e6c9;
    color: #2e7d32;
  }
  </style>
  