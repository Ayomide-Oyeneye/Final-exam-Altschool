<template>
  <div class="url-place">
    <h1>Latest URLs</h1>

    <!-- SHORTNER-AREA-->
    <div class="shortner-area">
      <div class="shortner">
        <input type="url" v-model="longUrl" placeholder="Paste in your URLs">
        <button @click="shortenUrl" :disabled="loading">Shorten URL</button>
      </div>
      <!-- CUSTOM URL FINALLY -->
      <div v-if="shortenedUrl" class="custom">
        <input type="text" v-model="customAlias" placeholder="Customize-URL (optional)">
        <button @click="generateAlias" :disabled="loading">Generate Alias</button>
      </div>
      <div class="extra-display">
        <div class="load" v-if="loading">
          <img class="load-text" src="../images/icons8-loading-infinity.gif" alt="Loading">
        </div>

        <!-- Display shortened URL -->
        <p v-else-if="shortenedUrl && !error">
        <div class="url-link-2">
          <span class="url-div">
            <img width="42" height="42" src="https://img.icons8.com/cute-clipart/32/link.png" alt="Link" /> Shortened
            URL:
          </span>
          <a class="url-fetch" :href="shortenedUrl" :style="{ color: '#36AE7C', fontSize: 'xx-large' }"
            @click="handleShortenedUrlClick">{{ shortenedUrl }}</a>
        </div>
        <!-- QR Code and other options -->
        <div class="click-area">
          <a class="copy-button2" :href="shortenedUrl">
            <img width="38" height="38" src="https://img.icons8.com/clouds/32/domain.png" alt="Domain" /> Visit URL
          </a>
          <button @click="copyToClipboard(shortenedUrl)" class="copy-button">
            <img width="26" height="26" src="https://img.icons8.com/ios-filled/50/clipboard.png" alt="Clipboard" /> Copy
          </button>
          <div class="qr-code-container">
            <img :src="`https://api.qrserver.com/v1/create-qr-code/?data=${shortenedUrl}&size=63x63`" alt="QR Code">
          </div>
        </div>
        </p>

        <!-- Display error message if any -->
        <div class="general_error" v-else-if="error">{{ error }}</div>
      </div>

    </div>
  </div>
</template>

<script>
import { logEvent, analytics, auth, onAuthStateChanged, signOut } from ".././firebase";
import VueQrcode from 'vue-qrcode';

export default {
  components: {
    VueQrcode
  },
  data() {
    return {
      longUrl: '',
      customAlias: '',
      shortenedUrl: '',
      error: '',
      loading: false
    };
  },
  created() {
    // Check for user authentication state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        logEvent(analytics, 'user_auth', { status: 'signed_in', uid: user.uid });
      } else {
        // User is signed out
        logEvent(analytics, 'user_auth', { status: 'signed_out' });
      }
    });
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
          // Log the event when a URL is shortened
          logEvent(analytics, 'shorten_url', {
            longUrl: this.longUrl,
            shortenedUrl: this.shortenedUrl
          });
        } else {
          throw new Error('Failed to shorten URL');
        }
      } catch (error) {
        console.error('Error shortening URL:', error.message);
        this.error = 'Error shortening URL';
        // Log the error event
        logEvent(analytics, 'shorten_url_error', {
          error: error.message
        });
      } finally {
        this.loading = false;
      }
    },
    async generateAlias() {
      this.loading = true;
      let apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(this.longUrl)}`;
      if (this.customAlias) {
        apiUrl += `&alias=${encodeURIComponent(this.customAlias)}`;
      }

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const alias = await response.text();
          this.shortenedUrl = alias;
          this.error = '';
          // Log the event when an alias is generated
          logEvent(analytics, 'generate_alias', {
            longUrl: this.longUrl,
            customAlias: this.customAlias,
            alias: this.shortenedUrl
          });
        } else {
          throw new Error('Failed to generate alias');
        }
      } catch (error) {
        console.error('Error generating alias:', error);
        this.error = 'Alias is not available.';
      } finally {
        this.loading = false;
      }
    },
    handleShortenedUrlClick() {
      // Handle the click event for the shortened URL
      // You can add any other logic here😪
    },
    copyToClipboard(url) {
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      // Log the event when the URL is copied to the clipboard
      logEvent(analytics, 'copy_url', {
        shortenedUrl: url
      });
    },
    generateQRCodeUrl(url) {
      return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=100x100`;
    }
  }
};
</script>
