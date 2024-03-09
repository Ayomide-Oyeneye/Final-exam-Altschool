<template>
    <div class="url-shortener">
      <h1 class="header">About URL Shortener</h1>
  
      <!-- URL Shortening -->
      <div class="section">
        <h3 class="subheader">URL Shortening</h3>
        <p>The primary functionality of this component is to take a long URL inputted by the user and shorten it using the Bitly API. This is particularly useful because long URLs can be cumbersome and difficult to share, especially on platforms like social media where character limits may apply.</p>
      </div>
  
      <!-- User Interface -->
      <div class="section">
        <h3 class="subheader">User Interface</h3>
        <p>The component provides a clean and intuitive user interface for users to interact with. It includes a form field for entering the long URL and a button to trigger the URL shortening process. Additionally, it provides feedback to the user during the process, such as showing a loading spinner while the URL is being shortened.</p>
      </div>
  
      <!-- Error Handling -->
      <div class="section">
        <h3 class="subheader">Error Handling</h3>
        <p>The component handles errors gracefully by displaying error messages if the URL shortening process fails. This ensures a smooth user experience even in case of unexpected errors.</p>
      </div>
  
      <!-- Copy to Clipboard -->
      <div class="section">
        <h3 class="subheader">Copy to Clipboard</h3>
        <p>After successfully shortening the URL, the component allows users to easily copy the shortened URL to their clipboard with the click of a button. This makes it convenient for users to quickly share the shortened URL wherever they need to.</p>
      </div>
  
      <!-- QR Code Generation (Optional) -->
      <div class="section">
        <h3 class="subheader">QR Code Generation (Optional)</h3>
        <p>Though commented out in the code, there's an option to generate a QR code for the shortened URL. QR codes can be useful for offline sharing or for users who prefer scanning QR codes instead of typing out URLs.</p>
      </div>
  
      <!-- Analytics Integration -->
      <div class="section">
        <h3 class="subheader">Analytics Integration</h3>
        <p>The component includes an Analytics component, indicating that it can be integrated with analytics tools to track user interactions and website usage. This data can be valuable for understanding user behavior and optimizing the application.</p>
      </div>
  
      <!-- Summary -->
      <div class="section">
        <h3 class="subheader">Summary</h3>
        <p>In summary, this code provides a simple yet powerful frontend component for a URL shortening web application. It streamlines the process of shortening long URLs, improves user experience with intuitive interface design and error handling, and offers additional features like QR code generation and analytics integration for enhanced functionality and insights.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UrlShortener',
  }
  </script>
  
  <style scoped>
  /* Styles for headers and paragraphs */
  .header {
    margin-bottom: 10px;
   display: flex;
   text-align: center;
   justify-content: center;
   color: rgb(243, 189, 167);
  }
  .subheader {
    font-size: 20px;
    margin-bottom: 5px;
    color: rgb(155, 155, 155);
  }
  
  .section {
    margin-bottom: 20px;
    width: 70%;
    margin: 0 auto;
    margin-top: 1rem;
    
  }
  
  p {
    font-size: 20px;
 text-align: center;
 color: rgb(152, 170, 170);
  }
  @media screen and (max-width: 768px) {
 p {
    -webkit-text-stroke: 1px rgb(134, 136, 135);
    /* For WebKit-based browsers like Chrome and Safari */
    text-stroke: 1px black;
  }
.subheader{
    font-style: italic;
    -webkit-text-stroke: 1px rgb(255, 255, 255);
    /* For WebKit-based browsers like Chrome and Safari */
    text-stroke: 1px black;
}
}
  </style>
  