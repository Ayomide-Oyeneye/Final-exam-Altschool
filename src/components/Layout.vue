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
  <!-- HEADER OF THE PAGE -->
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
            <div class="load" v-if="loading"><img class="load-text" src="../images/icons8-loading-infinity.gif" alt=""></div>
            <p v-else-if="shortenedUrl && !error">
              <span class="url-div">
                 Shortened URL:
                 </span> 
              <a :href="shortenedUrl" :style="{ color: '#36AE7C' }"
                @click="handleShortenedUrlClick">{{ shortenedUrl }}
              </a>
                 <button @click="copyToClipboard(shortenedUrl)" class="copy-button">
                  <img width="26" height="26" src="https://img.icons8.com/ios-filled/50/clipboard.png" alt="clipboard"/>
                </button>
            </p>
            <div v-else-if="error">{{ error }}</div>
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
export default {
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
.load-text{
  padding: 10px;
  border-radius: 1rem;
  height: 6rem;
  width: 6rem;
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
  height: 200px;
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
  padding-inline: 0.5rem;
  padding-block: 0.9rem;
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
  /* border: 2px solid rgb(109, 48, 252); */
  content: '';
  border: 3px solid transparent;
  /* Initial border */
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
.extra-display{
  font-size: xx-large;
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
  