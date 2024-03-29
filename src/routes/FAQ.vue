<!-- FAQ.vue
<template>
    <div class="faq">
      <h2>Frequently Asked Questions</h2>
      <div v-for="(question, index) in faqList" :key="index" class="faq-item">
        <h3>{{ question.title }}</h3>
        <p>{{ question.answer }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqList: [
        { 
          question: 'How do I shorten a URL?', 
          answer: 'To shorten a URL, simply paste the long URL into the input field and click the "Shorten URL" button. The system will generate a shortened URL for you.' 
        },
        { 
          question: 'Are the shortened URLs permanent?', 
          answer: 'Yes, the shortened URLs generated by our service are permanent. However, please note that we reserve the right to disable or remove shortened URLs that violate our terms of service.' 
        },
        { 
          question: 'Can I customize the shortened URL?', 
          answer: 'At the moment, we do not offer the option to customize shortened URLs. They are generated randomly to ensure uniqueness and prevent collisions.' 
        },
        { 
          question: 'Is there a limit to the number of URLs I can shorten?', 
          answer: 'No, there is no limit to the number of URLs you can shorten using our service. You can shorten as many URLs as you need.' 
        },
        { 
          question: 'How long are the shortened URLs?', 
          answer: 'The length of the shortened URLs may vary, but they are typically around 10-12 characters long. This helps keep the URLs short and easy to share.' 
        },
        { 
          question: 'Can I track the usage of my shortened URLs?', 
          answer: 'Yes, we provide analytics tools that allow you to track the usage of your shortened URLs. You can see metrics such as the number of clicks, geographic location of users, and referral sources.' 
        },
        { 
          question: 'Is the URL shortening service free to use?', 
          answer: 'Yes, our URL shortening service is completely free to use. There are no subscription fees or hidden charges.' 
        },
        { 
          question: 'Do you offer an API for URL shortening?', 
          answer: 'Yes, we offer an API that allows you to programmatically shorten URLs. Please refer to our documentation for more information on how to integrate with our API.' 
        },
        { 
          question: 'Can I preview the destination of a shortened URL before clicking?', 
          answer: 'Yes, you can preview the destination of a shortened URL by hovering over it. This will display the full destination URL in your browser\'s status bar.' 
        },
        { 
          question: 'What happens if I accidentally delete a shortened URL?', 
          answer: 'Once a shortened URL is deleted, it cannot be restored. We recommend exercising caution when deleting URLs and double-checking before confirming.' 
        }
      ]
      };
    }
  };
  </script>
  
  <style scoped>
  .faq {
    margin-top: 20px;
  }
  
  .faq-item {
    margin-bottom: 20px;
  }
  
  .faq-item h3 {
    margin-bottom: 10px;
    color: #333;
  }
  
  .faq-item p {
    color: #666;
  }
  </style>
   -->
<template>
  <div class="six-container">
    <div class="faq-top">
      <h2>FAQs</h2>
    </div>
    <div class="accordion">
      <div class="accordion-item" v-for="(question, index) in questions" :key="index" :id="'question' + (index + 1)">
        <a class="accordion-link" :href="'#question' + (index + 1)" @click="toggleAccordion(index)">
          {{ question.question }}
          <img v-if="question.isOpen" src="../images/minus.png" alt="Minus Icon" class="remove">
          <img v-else src="../images/plus.png" alt="Plus Icon" class="remove">
          <!-- <img src="../images/minus.png" alt=""> -->
          <!-- <img :src="question.isOpen ? '../images/minus.png' : '../images/plus.png'" alt="bb" class="remove"> -->
        </a>
        <hr class="hr">
        <div class="six-answer" v-show="question.isOpen">
          <p>{{ question.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: 'How does URL shortening work?',
          answer: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
          isOpen: false
        },
        {
          question: 'Is it necessary to create an account to use the URL shortening service?',
          answer: 'No, creating an account is not necessary. However, having an account may provide additional features and benefits.',
          isOpen: false
        },
        {
          question: 'Are the shortened links permanent? Will they expire?',
          answer: 'Shortened links typically do not expire, but it depends on the URL shortening service used. Some services may have expiration policies or limitations on link duration.',
          isOpen: false
        },
        {
          question: 'Are there any limitations on the number of URLs I can shorten?',
          answer: 'The limitations on the number of URLs you can shorten may vary depending on the URL shortening service. Some services offer unlimited URL shortening, while others may have restrictions based on account type or usage.',
          isOpen: false
        },
        {
          question: 'Can I customize the shortened URLs to reflect my brand or content?',
          answer: 'Yes, some URL shortening services offer custom branding options that allow you to customize the shortened URLs with your brand name or relevant keywords. This can help improve brand recognition and trust.',
          isOpen: false
        },
        {
          question: 'Can I track the performance of my shortened URLs?',
          answer: 'Many URL shortening services provide analytics and tracking features that allow you to monitor the performance of your shortened URLs. You can track metrics such as click-through rates, geographic location of clicks, and referral sources.',
          isOpen: false
        },
        {
          question: 'Are the shortened links protected against spam or malicious activity?',
          answer: 'URL shortening services often implement measures to protect shortened links against spam, malware, and other malicious activity. These measures may include link validation checks, spam detection algorithms, and security protocols.',
          isOpen: false
        },
        {
          question: 'What is a QR code and what can it do?',
          answer: 'A QR code (Quick Response code) is a type of barcode that contains encoded information, such as a URL, text, or contact information. QR codes can be scanned using a smartphone or QR code reader, allowing users to access the encoded information quickly and easily.',
          isOpen: false
        },
        {
          question: 'Is there an API available for integrating the URL shortening service into my own applications or websites?',
          answer: 'Many URL shortening services offer APIs (Application Programming Interfaces) that allow developers to integrate the URL shortening service into their own applications or websites. This enables programmatically shortening URLs, retrieving analytics data, and managing shortened links.',
          isOpen: false
        }
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.questions[index].isOpen = !this.questions[index].isOpen;
    }
  }
}
</script>

<style scoped>
.accordion-link {
  margin: 0 auto;
  margin-top: 1rem;
  font-size: larger;
}

.accordion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.accordion-item {
  background-color: rgb(128, 128, 128,0.5);
  border-radius: 0.3rem;
  width: 50%;
  margin: 0 auto;
  margin-top: 1rem;
  font-size: 1.3rem;
  margin-inline: 1rem;
}

.six-answer p {
  margin: 0 auto;
  text-align: left;
  width: 70%;
  padding: 10px;
  transition-duration: 3s;
  color: orange;
}
.hr{
  border:1px solid rgb(98, 0, 255);
  border-radius: 1rem;
}
</style>