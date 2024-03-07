<template>
    <!-- HEADER OF THE PAGE-->
  
    <div class="url-place">
  
      <!-- CENTER TEXT -->
      <h1>Latest URLs</h1>
  
      <!-- SHORTNER-AREA-->
      <div class="shortner-area">
        <div class="shortner">
          <input type="url" v-model="longUrl" placeholder="paste in your urls">
          <button @click="shortenUrl" :disabled="loading">Shorten URL</button>
        </div>
        <br>
        <div class="extra-display">
          <div class="load" v-if="loading"><img class="load-text" src="../images/icons8-loading-infinity.gif" alt="">
          </div>
          <p v-else-if="shortenedUrl && !error">
            <span class="url-div">
              Shortened URL:
            </span>
            <a  :href="shortenedUrl" :style="{ color: '#36AE7C', fontSize: 'xx-large' }" @click="handleShortenedUrlClick">{{ shortenedUrl }}
            </a>
            <button @click="copyToClipboard(shortenedUrl)" class="copy-button">
              <img width="36" height="36" src="https://img.icons8.com/ios-filled/50/clipboard.png" alt="clipboard" />
            </button>
            <!-- <button @click="generateQRCode(shortenedUrl)" class="generate-qr-button">Generate QR Code</button> -->
          <div class="qr-code-container" v-if="shortenedUrl">
            <vue-qrcode :value="shortenedUrl" :size="200" class="vue-qrcode"></vue-qrcode>
          </div>
          </p>
          <div v-else-if="error">{{ error }}</div>
          <!-- Placeholder for QR Code -->
        </div>
      </div>
    </div>
  
    <!-- FOOTER OF THE PAGE -->
    <analytics :analytics="analytics" />
    <footer class="footer">
      <p>Term of Service | Security | 2024 Scissors</p>
      <div class="footer-img">
        <img src="../images/i.fi-social-facebook.png" alt="">
        <img src="../images/i.fi-social-twitter.png" alt="">
        <img src="../images/i.fi-social-linkedin.png" alt="">
        <img src="../images/svg.feather.png" alt="">
      </div>
    </footer>
  </template>
  
  <script>
  import VueQrcode from 'vue-qrcode';
  import Analytics from '../components/Analytics.vue';
  export default {
    components: {
      VueQrcode,
      Analytics
    },
    data() {
      return {
        longUrl: '',
        shortenedUrl: '',
        error: '',
        loading: false
      };
    },
    methods: {
      async shortenUrl() {
        this.loading = true
        const longUrl = this.longUrl;
        const accessToken = '10915691b1f95086ed5d995926434446e4e8582c'; // Your Bitly access token
        const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
        const requestBody = { long_url: longUrl };
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        };
  
        try {
          const response = await fetch(apiUrl, requestOptions);
          if (response.ok) {
            const jsonResponse = await response.json();
            this.shortenedUrl = jsonResponse.link;
            this.error = '';
          } else {
            const errorResponse = await response.json();
            throw new Error(`Failed to shorten URL: ${errorResponse.message}`);
          }
        } catch (error) {
          console.error('Error shortening URL:', error.message);
          this.error = 'Error shortening URL';
        } finally {
          this.loading = false; // Set loading state back to false after request completes
        }
      },
      copyToClipboard(text) {
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
    }
  };
  </script>