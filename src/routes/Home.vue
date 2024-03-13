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
            <div class="click-area">
            <button @click="copyToClipboard(shortenedUrl)" class="copy-button">
              <img width="36" height="36" src="https://img.icons8.com/ios-filled/50/clipboard.png" alt="clipboard" />
            </button>
            <!-- <button @click="generateQRCode(shortenedUrl)" class="generate-qr-button">Generate QR Code</button> -->
          <div class="qr-code-container" v-if="shortenedUrl">
            <vue-qrcode :value="shortenedUrl" :size="200" class="vue-qrcode"></vue-qrcode>
          </div>
        </div>
          </p>
          <div v-else-if="error">{{ error }}</div>
          <!-- Placeholder for QR Code -->
        </div>
      </div>
    </div>
    <!--   
      <div class="extra-display">
          <div class="load" v-if="loading"><img class="load-text" src="../images/icons8-loading-infinity.gif" alt="">
          </div>
          <p >
            <span class="url-div">
              Shortened URL:
            </span>
            <a  :href="shortenedUrl" :style="{ color: '#36AE7C', fontSize: 'xx-large' }" @click="handleShortenedUrlClick">{{ shortenedUrl }}
            </a>
            <div class="click-area">
            <button @click="copyToClipboard(shortenedUrl)" class="copy-button">
              <img width="36" height="36" src="https://img.icons8.com/ios-filled/50/clipboard.png" alt="clipboard" />
            </button>
             <button @click="generateQRCode(shortenedUrl)" class="generate-qr-button">Generate QR Code</button> 
            <div class="qr-code-container" >
            <vue-qrcode :value="shortenedUrl" :size="200" class="vue-qrcode"></vue-qrcode>
          </div>
        </div>
          </p>
           <div v-else-if="error">{{ error }}</div> 
           Placeholder for QR Code 
        </div> 
      -->
  
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
        this.loading = true;
        const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(this.longUrl);
  
        try {
          const response = await fetch(apiUrl);
          if (response.ok) {
            const shortenedUrl = await response.text();
            this.shortenedUrl = shortenedUrl;
            this.error = '';
          } else {
            throw new Error('Failed to shorten URL');
          }
        } catch (error) {
          console.error('Error shortening URL:', error.message);
          this.error = 'Error shortening URL';
        } finally {
          this.loading = false;
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