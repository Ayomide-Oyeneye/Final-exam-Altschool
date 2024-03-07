<template>
  <!-- HEADER PART -->
  <header class="header">
    <div>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn"><img width="64" height="64" src="https://img.icons8.com/cotton/64/menu.png"
          alt="menu" /></label>
      <ul class="selections">
        <li style="color: rgb(255, 156, 25);">My URLs</li>
        <li>Pricing</li>
        <li>Analytics</li>
        <li>FAQs</li>
        <button class="sign-up-btn">Sign up for fee</button>
      </ul>
    </div>
    <div class="scis-img">
      <img src="./images/scissors-logo.png" alt="" srcset="">
    </div>
  </header>
  <RouterView></RouterView>
  <Home/>
</template>

<script>
import './styles.css'
import Home from './routes/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style></style>
