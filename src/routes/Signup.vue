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
        <input type="password" id="password" v-model="password" required @input="checkPasswordStrength">
        <p v-if="passwordStrengthMessage" class="password-strength">{{ passwordStrengthMessage }}</p>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
      </div>

      <button type="submit">Sign Up</button>
    </form>

    <p v-if="errorMessage || successMessage" class="fade-in-out" :class="{ 'error-message': errorMessage, 'success-message': successMessage }">{{ errorMessage || successMessage }}</p>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { auth, createUserWithEmailAndPassword } from "../firebase/index.js";

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      successMessage: '',
      passwordStrengthMessage: ''
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

      // Attempt to create user
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          console.log('register success');
          this.successMessage = 'Sign up successful!';
          this.resetMessages();
          this.username = '';
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
          const router = useRouter();
          router.push('/');
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            this.errorMessage = 'Email is already in use. Please choose a different email address.';
          } else {
            console.log(error.code);
          }
        });
    },
    resetMessages() {
      setTimeout(() => {
        this.errorMessage = '';
        this.successMessage = '';
      }, 3000);
    },
    checkPasswordStrength() {
      const strength = this.getPasswordStrength(this.password);
      if (strength === 'weak') {
        this.passwordStrengthMessage = 'Password is weak. Please use a stronger password.';
      } else if (strength === 'medium') {
        this.passwordStrengthMessage = 'Password strength is medium.';
      } else if (strength === 'strong') {
        this.passwordStrengthMessage = 'Password strength is strong.';
      }
    },
    getPasswordStrength(password) {
      // You can implement your password strength logic here
      // This is just a basic example
      if (password.length < 6) {
        return 'weak';
      } else if (password.length < 10) {
        return 'medium';
      } else {
        return 'strong';
      }
    }
  }
};
</script>

<style scoped>
/* Your CSS styles remain unchanged */
</style>


<style scoped>
* {
  color: black;
}

.signup-container {
  display: flex;
  flex-direction: column;
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
    opacity: 2;
  }
}
</style>
