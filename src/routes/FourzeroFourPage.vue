<template>
    <div class="mainpage">
     <img class="four" src="../images/404 Error with a cute animal.gif" alt="" srcset="">
     
      <h1>Page not found... 😥😥</h1>
    </div>
    <button><router-link class="linksto home" to="/">
        return to home page 👈
          </router-link></button>
    <router-view></router-view>
  </template>
  
  <script>
  export default {
    name: 'FourZeroFourPage'
  };
  </script>
  
  <style scoped>
  h1{
    color: #ff3300;
  }
  .mainpage {
    margin-top: 150px;
    margin-top: 0;
  }
  button{
    width: fit-content;
    margin: 0 auto;
    margin-top: 1rem;
    background-color: bisque;
    border-radius: 0.5rem 1.5rem 0.5rem 1.5rem;
  }
  button .home{
    text-decoration: none;
    font-size: x-large;
    font-weight: bolder;
    padding: 0.5rem;
    color: rgb(58, 75, 70);
  }
  .four{
    margin: 0;
    width: 300px;
  }
  </style>
  