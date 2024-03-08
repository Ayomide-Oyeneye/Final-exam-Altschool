<template>
    <div v-if="hasError" class="errorContainer">
      <i class="errorpage">Oops...</i>
      <h1 class="errorpage">
        Something went wrong. <span>😥</span>
      </h1>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorBoundary',
    data() {
      return {
        hasError: false
      };
    },
    methods: {
      componentDidCatch(error, errorInfo) {
        this.hasError = true;
        console.error(error, errorInfo);
      }
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  