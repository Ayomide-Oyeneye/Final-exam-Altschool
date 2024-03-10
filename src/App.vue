<template>
  <!-- HEADER PART -->
  <header class="header">
    <div>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <img width="64" height="64" src="https://img.icons8.com/cotton/64/menu.png" alt="menu" />
      </label>
      <ul class="selections">
        <li style="color: rgb(255, 156, 25);">
          <router-link class="linksto home" style="color: rgb(255, 156, 25);" to="/">My URLs</router-link>
        </li>
        <li>
          <router-link class="linksto home" to="/Home">
            Home page
          </router-link>
        </li>
        <li>
          <router-link class="linksto home" to="/FAQ">
            FAQS
          </router-link>
        </li>
        <li>
          <router-link class="linksto home" to="/About">
            About
          </router-link>
        </li>
        <!-- SIGNUP BUTTON -->
        <button v-if="!isLoggedin" class="sign-up-btn">
          <router-link class="linksto home" to="/Signup">
            Sign up for free
          </router-link>
        </button>
        <button v-if="!isLoggedin" class="sign-up-btn log">
          <router-link class="linksto home" to="/login">
            Login
          </router-link>
        </button>
        <button @click="handleSignOut" class='out' v-if="isLoggedin">Sign out</button>
      </ul>
    </div>
    <div class="scis-img">
      <img src="./images/scissors-logo.png" alt="">
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
import { onMounted, ref } from 'vue';
import Home from './routes/Home.vue';
import { auth, onAuthStateChanged, signOut } from "./firebase/index.js";
import router from "./router/index.js";

export default {
  name: 'App',
  components: {
    Home
  },
  setup() {
    const isLoggedin = ref(false);

    const handleSignOut = () => {
      signOut(auth).then(() => {
        router.push('/FAQ');
      });
    };

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        isLoggedin.value = !!user; // Set isLoggedin to true if user exists, false otherwise
      });
    });

    return { isLoggedin, handleSignOut };
  }
};
</script>


