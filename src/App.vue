<template>
  <div>
    <the-header></the-header>
    <base-spinner v-if="isLoading"></base-spinner>
    <main v-else>
      <router-view name="default" v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
      <router-view v-if="footerVisible" name="footer"></router-view>
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      isLoading:true,
      footerVisible:false,
    }
  },
  beforeCreate(){
    this.isLoading=true;
  },
  mounted(){
    setTimeout(()=>{
      this.isLoading= false;
    },1000)
    setTimeout(()=>{
      this.footerVisible=true
    },2000)
  },
  created(){
    this.$store.dispatch('auth/trylogin')
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Crimson+Text&family=Lora:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap");
#app {
  font-family: "Crimson Text", serif;
  font-family: "Lora", serif;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  padding: 0;
  margin: none;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
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
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
@media (max-width:600px){
  body{
    padding: 3px;
  }
}
</style>
