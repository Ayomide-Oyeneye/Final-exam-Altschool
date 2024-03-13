<template>
    <div class="main">
        <p>Wellcome to my Url Shortener website 😁</p>
        <p>To get started click <span><router-link class="linksto home " to="/Home">
            here
          </router-link></span> to get started </p>
    </div>
    <router-view></router-view>
</template>
<script>
 import router from "../router/index.ts";
export default {
  name: 'main'
}
</script>
<style>
p{
    padding: 1rem;
}
span .linksto{
    color: aqua;
    width: fit-content;
    text-decoration: aqua underline;
}
.main> :first-child{
    font-size: xxx-large;
    margin-top: 50px;
}
.main>:nth-child(2){
    font-size: xxx-large;
    margin-top: -10px;
}
</style>