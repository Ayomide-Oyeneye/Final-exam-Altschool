<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="email"></label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email" required>
      </div>

      <div class="form-group">
        <label for="password"></label>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
      </div>

      <button type="submit">Login</button>
      <p class="or"><span>or</span></p>
      <p class="all">
       No account?
       <router-link class="linksto home" to="/Signup">
        Sign Up
        </router-link></p>
    </form>

    <p v-if="errorMessage || successMessage" class="fade-in-out" :class="{ 'error-message': errorMessage, 'success-message': successMessage }">{{ errorMessage || successMessage }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth, signInWithEmailAndPassword } from "../firebase/index.ts";
import router from "../router/index.ts";

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.successMessage = 'Login successful!';
        this.resetMessages();
        this.email = '';
        this.password = '';
        setTimeout(() => {
          router.push('/Home');
      }, 2000);
      } catch (error) {
        console.error(error);
        this.errorMessage = 'Invalid email or password.';
        this.resetMessages();
      }
    },
    resetMessages() {
      setTimeout(() => {
        this.errorMessage = '';
        this.successMessage = '';
      }, 3000);
    },
  }
};
</script>

<style scoped>
/* Styles remain the same */
</style>


<style scoped>
*{
  color: #4e4c4c;
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
  width: 70%;
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
.all{
  margin-top: 1rem;
}
.all .linksto{
  color: #1900ff;
  font-weight: bolder;
}
.or{
   width: 100%; 
   text-align: center; 
   border-bottom: 1px solid #4e4c4c; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
  } 
  .or span { 
  color: #4e4c4c;
  font-weight: bolder;
    background:#F5F5F5; 
    padding:0 10px; 
}

</style>
