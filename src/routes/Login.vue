<template>
    <div class="login-container">
      <form @submit.prevent="submitForm" class="login-form">
        <h2>Login</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
  
        <button type="submit">Login</button>
      </form>
  
      <p v-if="errorMessage" class="error-message" :class="{ 'fade-in-out': errorMessage }">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-message" :class="{ 'fade-in-out': successMessage }">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      submitForm() {
        // Simple validation
        if (!this.username || !this.password) {
          this.errorMessage = 'Please fill in all fields.';
          this.resetMessages();
          return;
        }
  
        // Here you would typically make an AJAX request to your backend to authenticate the user
        // For the sake of this example, let's just pretend the login was successful
        // You can replace this with actual API calls
        this.successMessage = 'Login successful!';
        this.resetMessages();
  
        // Reset form fields
        this.username = '';
        this.password = '';
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
  * {
    color: black;
  }
  
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-form {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
  }
  
  .login-form h2 {
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
  
  .fade-in-out {
    animation: fade 2s ease-in-out;
  }
  
  @keyframes fade {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  </style>
  