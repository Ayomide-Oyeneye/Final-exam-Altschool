<script>
import VueQrcode from 'vue-qrcode';
import Analytics from './Analytics.vue'; 
import '../styles.css'
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
};</script>