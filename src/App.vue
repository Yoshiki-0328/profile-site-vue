<template>
  <div>
    <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
export default {
  components:{
    TheHeader,
    TheFooter
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
ul{
  padding: 0;
  margin: none;
}
li{
  list-style: none;
}

.section {
  padding: 20px 0;
}
.wrapper {
  width: 85%;
  margin: 0 auto;
  text-align: center;
}
.section-title {
  font-size: 2rem;
  font-weight: bold;
  display: inline-block;
  border-bottom: 3px solid #333;
  margin: 0 auto;
  margin-bottom: 50px;
}

</style>
