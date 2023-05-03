<template>
  <section>
    <header>
      <h1>My Profile</h1>
      <nav class="nav">
        <base-button mode="flat" link to="/profile">Home</base-button>
        <base-button mode="flat" link to="/about">About/Skills</base-button>
        <base-button mode="flat" link to="/works">Portfolio</base-button>
        <base-button mode="flat" link to="/contact">Contact</base-button>
        <base-button mode="flat" link to="/user-auth" v-if="!islogined">Login/Signup</base-button>
        <base-button mode="flat" link to="/user-auth" v-else @click="logout">Logout</base-button>
      </nav>
      <div class="hamBtn" @click="open = !open" :class="{'is-active' : open}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <div class="hamBg" :class="{'is-active' : open}">
        <nav class="hamNav" >
            <base-button mode="flat" link to="/profile" @click="open = !open">Home</base-button>
            <base-button mode="flat" link to="/about" @click="open = !open">About/Skills</base-button>
            <base-button mode="flat" link to="/works" @click="open = !open">Portfolio</base-button>
            <base-button mode="flat" link to="/contact" @click="open = !open">Contact</base-button>
            <base-button mode="flat" link to="/user-auth" @click="open = !open" v-if="!islogined">Login/Signup</base-button>
            <base-button mode="flat" link to="/user-auth" @click="open = !open" v-else>Logout</base-button>
        </nav>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  computed:{
    islogined(){
      return this.$store.getters['auth/isAuthenticated']
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('auth/logout');
      this.$store.dispatch('contacts/resetData')
    }
  }
};
</script>

<style scoped>
header {
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1{
  font-size: 2.0rem;
}
.hamBtn {
  width: 40px;
  height: 50px;
  position: relative;
  cursor: pointer;
  z-index: 10;
  display: none;
}
.hamBtn span {
  width: 100%;
  height: 3px;
  background-color: black;
  position: absolute;
  left: 0px;
  top: 23px;
  border-radius: 15px;
  transition: all .5s;
}
.hamBtn span:first-child {
  top: 10.5px;
}
.hamBtn span:last-child {
    top: 35.5px;
}
/* ハンバーガーメニュー開いたとき */
.hamBtn.is-active span:first-child {
  transform: rotate(45deg);
  top: 23px;
}
.hamBtn.is-active span:nth-of-type(2){
    opacity: 0;
}
.hamBtn.is-active span:last-child {
  transform: rotate(-45deg);
  top: 23px;
}
.hamBg{
    width: 40vw;
    height: 100vh;
    background-color: rgba(255, 255, 255,.95);
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    z-index: 1;
    transition: all .5s;
}
.hamBg.is-active{
    transform: translateX(0%);
}
.hamNav{
    display: flex;
    flex-direction: column;
    z-index: 10;
    margin: 100px 0px;
}
.hamNav a{
    margin: 10px;
}
.hamBtn span:first-child {
  top: 10.5px;
}
.hamBtn span:last-child {
    top: 35.5px;
}
@media (max-width: 850px) {
    .hamBtn{
        display: block;
    }
    .nav{
        display: none;
    }
}
</style>