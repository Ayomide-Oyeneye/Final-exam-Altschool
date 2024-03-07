<template>
    <div>
      <button @click="fetchClicks">Fetch Clicks</button>
      <div v-if="clicksData">
        <h2>Clicks Data:</h2>
        <p>Total Clicks: {{ clicksData.total_clicks }}</p>
        <p>Clicks by Date:</p>
        <ul>
          <li v-for="(count, date) in clicksData.clicks_by_date" :key="date">
            {{ date }}: {{ count }}
          </li>
        </ul>
        <!-- Add more fields as needed -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clicksData: null
      };
    },
    methods: {
      async fetchClicks() {
        try {
          const accessToken = '10915691b1f95086ed5d995926434446e4e8582c';
          const bitlink = '3TwEB3H'; 
          const url = `https://api-ssl.bitly.com/v4/bitlinks/${bitlink}/clicks`;
  
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch clicks data');
          }
  
          const data = await response.json();
          this.clicksData = data;
        } catch (error) {
          console.error('Error fetching clicks data:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  