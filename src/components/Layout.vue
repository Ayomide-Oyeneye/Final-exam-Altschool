<!-- 
<template>
    <header class="header">
        <div class="scis-img">
            <img src="../images/scissors-logo.png" alt="" srcset="">
        </div>
        <div>
            <ul class="selections">
                <li style="color: rgb(255, 156, 25);">My URLs</li>
                <li>Pricing</li>
                <li>Analytics</li>
                <li>FAQs</li>
                <button class="sign-up-btn">Sign up for fee</button>
            </ul>
        </div>
    </header>
    <div class="url-place">
        <h1>Latest URLs</h1>
        <div class="shortner">
            <input type="url" placeholder="paste in your urls">
            <button>Shorten URL</button>
        </div>
    </div>
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
  
  </script>
  <style>
  * {
    color: white;
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: rgb(24, 32, 37);
    min-height: 100vh;
    margin: 0;
    border: 2px solid red;
  }
  
  .header {
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 0.5rem;
    margin-top: -40px;
  }
  
  .selections {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: larger;
  }
  
  .url-place {
    display: flex;
    flex-direction: column;
    /* border: 2px solid green; */
    justify-content: center;
    margin: 100px auto;
    /* Adjust width as needed */
    height: 200px;
  }
  
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: auto;
    position: fixed;
    bottom: 0;
    padding-top: 1rem;
    background-color: rgb(36, 56, 68);
  }
  
  .footer-img img {
    margin-inline-end: 1rem;
    background-color: rgb(255, 156, 25);
    padding: 0.5rem;
    border-radius: 2rem;
  }
  
  .sign-up-btn {
    font-size: 19.2px;
    background-color: rgb(255, 156, 25);
    border: none;
    border-radius: 1rem;
    padding-inline: 0.5rem;
    padding-block: 0.9rem;
    outline: none;
    cursor: pointer;
    color: #182025;
  }
  
  .shortner {
    width: 70%;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    margin-top: 1rem;
    /* border: 2px solid blue; */
  }
  
  .shortner input {
    outline: none;
    border: none;
    width: 50%;
    color: black;
    font-size: larger;
    font-weight: 600;
    padding-block: 0.7rem;
    padding-inline: 1rem;
    margin-inline-end: 0.5rem;
    border-radius: 0.2rem;
  }
  
  .shortner input::placeholder {
    color: rgb(87, 87, 87);
    font-size: larger;
    font-style: oblique;
  }
  
  .shortner button {
    outline: none;
    border: none;
    border-radius: 0.2rem;
    padding-block: 0.6rem;
    padding-inline: 0.4rem;
    color: rgb(255, 156, 25);
    font-weight: bolder;
    font-size: larger;
    background-color: #182025;
    border: 2px solid rgb(109, 48, 252);
  }</style>
   -->
<!-- 😎 -->

<template>
  <!-- HEADER OF THE PAGE-->
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
      <img src="../images/scissors-logo.png" alt="" srcset="">
    </div>

  </header>
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
          <a :href="shortenedUrl" :style="{ color: '#36AE7C' }" @click="handleShortenedUrlClick">{{ shortenedUrl }}
          </a>
          <button @click="copyToClipboard(shortenedUrl)" class="copy-button">
            <img width="36" height="36" src="https://img.icons8.com/ios-filled/50/clipboard.png" alt="clipboard" />
          </button>
          <!-- <button @click="generateQRCode(shortenedUrl)" class="generate-qr-button">Generate QR Code</button> -->
        </p>
        <div v-else-if="error">{{ error }}</div>
        <!-- Placeholder for QR Code -->
        <div class="qr-code-container" v-if="shortenedUrl">
          <vue-qrcode :value="shortenedUrl" :size="200" class="vue-qrcode"></vue-qrcode>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER OF THE PAGE -->
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
export default {
  components: {
    VueQrcode
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

<style>
* {
  color: white;
  margin: 0;
  padding: 0;
}

.load-text {
  padding: 10px;
  border-radius: 1rem;
  height: 6rem;
  width: 6rem;
}

.checkbtn {
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

body {
  background-color: rgb(24, 32, 37);
  min-height: 100vh;
  margin: 0;
}

.header {
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 0.5rem;
  margin-top: 10px;
}

.selections {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: larger;
}

.url-place {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin: 100px auto;
  /* Adjust width as needed */
  height: 500px;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  padding-inline: 1rem;
  background-color: rgb(36, 56, 68);
}

.footer-img img {
  margin-inline-end: 1rem;
  background-color: rgb(255, 156, 25);
  padding: 0.5rem;
  border-radius: 2rem;
}

.sign-up-btn {
  font-size: 19.2px;
  background-color: rgb(255, 156, 25);
  border: none;
  border-radius: 1rem;
  padding-inline: 0.4rem;
  padding-block: 0.5rem;
  outline: none;
  cursor: pointer;
  color: #182025;
}

.shortner {
  justify-content: center;
  margin: 0 auto;
  display: flex;
  margin-top: 1rem;
}

.shortner input {
  outline: none;
  border: none;
  width: 50%;
  color: black;
  font-size: larger;
  font-weight: 600;
  padding-block: 0.7rem;
  padding-inline: 1rem;
  margin-inline-end: 0.5rem;
  border-radius: 0.2rem;
}

.shortner input::placeholder {
  color: rgb(87, 87, 87);
  font-size: larger;
  font-style: oblique;
}

.shortner button {
  outline: none;
  border: none;
  border-radius: 0.2rem;
  padding-block: 0.6rem;
  padding-inline: 0.4rem;
  color: rgb(255, 156, 25);
  font-weight: bolder;
  font-size: larger;
  background-color: #182025;
  content: '';
  border: 3px solid transparent;
  animation: borderAnimation 8s linear infinite;
}

@keyframes borderAnimation {
  0% {
    border-color: rgb(255, 110, 26);
  }

  5% {
    border-color: rgb(133, 26, 255);
  }

  25% {
    border-color: blue;
  }

  50% {
    border-color: rgb(109, 48, 252);
  }

  75% {
    border-color: orange;
  }

  100% {
    border-color: rgb(253, 117, 26);
  }
}

.extra-display {
  font-size: xx-large;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Media query for smartphones */
@media screen and (max-width: 768px) {
  * {
    /* Text color */

    /* Stroke color */
    -webkit-text-stroke: 1px rgb(100, 79, 128);
    /* For WebKit-based browsers like Chrome and Safari */
    text-stroke: 1px black;
  }

  ul {
    position: absolute;
    padding-inline: 1rem;
    padding-block-end: 1rem;
    background-color: #6C8B9F;
    top: 70px;
    margin-inline-start: 0.5rem;
    left: -200px;
    /* Adjusted the value */
    display: flex;
    flex-direction: column;
    z-index: 333;
    border-radius: 0.3rem;
  }

  .selections button {
    color: rgb(82, 82, 82);

  }

  ul li {
    margin-top: 30px;
    display: block;
  }

  .checkbtn {
    display: block;
  }

  #check:checked~ul {
    left: 0;
    transition-duration: 1s;
  }

  #check~ul {
    transition-duration: 1s;
  }
}

.qr-code-container {
  height: 4rem;
  width: 4rem;
  margin: 0;
  margin-inline-start: 3rem;
}

.vue-qrcode {
  margin: 0 auto;
  height: 100%;
  width: 100%;
}

.copy-button {
  height: 3rem;
  width: 3rem;
  background-color: #0191CD;
  border: 2px solid #404346;
  border-radius: 0.6rem;
  margin-inline-start: 1rem;

}
</style>







<!-- 😂😁😀 -->
<!-- uie crogco -->
<!-- <template>
    <div>
      <input v-model="longUrl" type="text" placeholder="Enter long URL">
      <button @click="shortenUrl">Shorten URL</button>
      <p v-if="shortUrl">Shortened URL: {{ shortUrl }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        longUrl: '',
        shortUrl: ''
      };
    },
    methods: {
      async shortenUrl() {
        try {
          const accessToken = 'YOUR_BITLY_ACCESS_TOKEN';
          const response = await axios.post(
            'https://api-ssl.bitly.com/v4/shorten',
            {
              long_url: this.longUrl
            },
            {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
              }
            }
          );
          this.shortUrl = response.data.link;
        } catch (error) {
          console.error('Error shortening URL:', error);
        }
      }
    }
  };
  </script> -->
