<template>
  <div>
    <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components:{
    TheHeader
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Crimson+Text&family=Lora:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap");
#app{
  font-family: "Crimson Text", serif;
  font-family: "Lora", serif;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
