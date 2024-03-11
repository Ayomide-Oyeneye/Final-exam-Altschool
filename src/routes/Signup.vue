<template>
  <div class="signup-container">
    <form @submit.prevent="submitForm" class="signup-form">
      <h2>Sign Up</h2>
      <div class="form-group">
        <label for="username"></label>
        <input type="text" id="username" v-model="username" placeholder="Username" required>
      </div>

      <div class="form-group">
        <label for="email"></label>
        <input type="email" id="email" placeholder="E-mail" v-model="email" required>
      </div>

      <div class="form-group">
        <label for="password"></label>
        <input type="password" placeholder="Password" id="password" v-model="password" required @input="checkPasswordStrength">
        <p v-if="passwordStrengthMessage" class="password-strength">{{ passwordStrengthMessage }}</p>
      </div>

      <div class="form-group">
        <label for="confirmPassword"></label>
        <input type="password" placeholder="Confirm password" id="confirmPassword" v-model="confirmPassword" required>
      </div>

      <button type="submit" >Sign up</button>
      <p class="or"><span>or</span></p>
      <p class="google" @click="SignInWithGoogle"><img width="50" height="50" src="https://img.icons8.com/bubbles/50/google-logo.png" alt="google-logo"/> <h4>Signup with Google</h4></p>
     <p class="all">
       i already have an account?
       <router-link class="linksto home" to="/login">
        Login
        </router-link></p>
      </form>
    <p v-if="errorMessage || successMessage" class="fade-in-out" :class="{ 'error-message': errorMessage, 'success-message': successMessage }">{{ errorMessage || successMessage }}</p>
  </div>
  <router-view></router-view>
</template>uth
<script>
import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "../firebase/index.js";
import router from "../router/index.js";

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      successMessage: '',
      passwordStrengthMessage: '',
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
          setTimeout(() => {
            router.push('/Home');
          }, 2000);
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            this.errorMessage = 'Email is already in use. Please choose a different email address.';
          } else {
            console.log(error.code);
          }
        });
    },
    SignInWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result.user);
          router.push('/Home');
        })
        .catch((error) => {
          console.error(error.message);
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
*{
  color: #4e4c4c;
  margin: 0;
  padding: 0;
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
  width: 70%;
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
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 3px 10px 0px rgba(0, 0, 0, 0.5);
  outline: none;
  background-color: transparent;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #705b51;
  color: #fff;
  font-weight: bolder;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #554b3a;
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
.out{
  width: 70%;
  margin-top: 10px;
  background-color: red;
}
.all{
  margin-top: 1rem;
}
.all .linksto{
  color: #1900ff;
  font-weight: bolder;
}
.google{
  display: flex;
  align-items: center;
  border: 1px solid grey;
  width: 70%;
  margin: 0 auto;
  border-radius: 0.5rem;
  background-color: rgb(255, 244, 209,0.8);
  
}
.google h4{
  color: rgb(66, 57, 59);
  font-weight: bolder;
  margin-left:18px;
}
.or{
   width: 100%; 
   text-align: center; 
   border-bottom: 1px solid #4e4c4c; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
} 
.or span { 
  background:#F5F5F5; 
    padding:0 10px; 
}
</style>
