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
          <router-link style="color: rgb(255, 156, 25);" to="/">My
            URLs</router-link>
        </li>
        <li>
          <router-link class="linksto home" to="/">
            Home page
          </router-link>
        </li>
        <li>
          Analytics
        </li>
        <li>
          <router-link class="linksto home" to="/FAQ">
            FAQS
          </router-link>
        </li>
        <!-- SIGNUP BUTTON -->
        <button class="sign-up-btn">Sign up for free</button>
      </ul>
    </div>
    <div class="scis-img">
      <img src="./images/scissors-logo.png" alt="">
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
import './styles.css';
import Home from './routes/Home.vue';
import FAQ from './routes/FAQ.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/cc', component: FAQ }
  ]
});

export default {
  name: 'App',
  components: {
    Home
  },
  setup() {
    // Provide the router instance to the Vue app
    return { router };
  }
};
</script>

<style></style>
