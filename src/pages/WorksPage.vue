<template>
  <section class="sectionportfolio" id="portfolio">
    <div class="wrapper">
      <h2 class="section-title">Portfolio</h2>
        <ul class="works-flex">
          <li v-for="workSrc in worksSrc" :key="workSrc">
            <base-card>
              <a :href="workSrc.src">
                <img :src="workSrc.thum" :alt="workSrc.title">
                <div class="work-desc">
                  <span>{{ workSrc.title }}</span>
                  <span>（{{ workSrc.date }}）</span>
                </div>
              </a>
            </base-card>
          </li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      worksSrc: [
        {
          src: "https://heiyoshilog.site/works/01_quiz-game/index.html",
          title: "クイズゲーム",
          thum:'/img/01-thum.72e2440a.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/02_acordion-menu/index.html",
          title: "アコーディオンメニュー",
          thum:'/img/02-thum.8cbd9b4a.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/03_tab-menu/index.html",
          title: "タブメニュー",
          thum:'data:image/png;base64,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DAAQjgIDAISjwAAA4SgwAEA4CgwAEI4CAwCEo8AAAOEoMABAOAoMABCOAgMAhKPAAADhKDAAQDgKDAAQjgIDAISjwAAA4SgwAEA4CgwAEI4CAwCEo8AAAOEoMABAOAoMABCOAgMAhKPAAADhKDAAQDgKDAAQjgIDAISjwAAA4SgwAEA4CgwAEI4CAwCEo8AAAOEoMABAOAoMABCOAgMAhKPAAADhKDAAQDgKDAAQjgIDAISjwAAA4SgwAEA4CgwAEI4CAwCEo8AAAOEoMABAOAoMABCOAgMAhKPAAADhKDAAQDgKDAAQjgIDAISjwAAA4SgwAEA4CgwAEI4CAwCEo8AAAOEoMABAOAoMABCOAgMAhKPAAADhKDAAQDgKDAAQjgIDAISjwAAA4SgwAEA4CgwAEI4CAwCEo8AAAOEoMABAOAoMABCOAgMAhKPAAADhKDAAQDgKDAAQjgIDAISjwAAA4SgwAEA4CgwAEI4CAwCEo8AAAOEoMABAOAoMABCOAgMAhKPAAADhKDAAQDgKDAAQjgIDAISjwAAA4SgwAEA4CgwAEI4CAwCEo8AAAOEoMABAOAoMABCOAgMAhKPAAADhKDAAQDgKDAAQjgIDAISjwAAA4SgwAEA4CgwAEI4CAwCEo8AAAOEoMABAOAoMABCOAgMAhKPAAADhKDAAQDgKDAAQjgIDAISjwAAA4SgwAEA4CgwAEExK/w8nYK5AQymwtwAAAABJRU5ErkJggg==',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/04_isara/index.html",
          title: "isaraサイト模写",
          thum:'/img/04-thum.752b583c.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/05_calculator/index.html",
          title: "電卓",
          thum:'/img/05-thum.bbe07de0.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/06_qr-create-app/index.html",
          title: "QRコード生成",
          thum:'/img/06-thum.c3d19cf4.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/06_qr-create-app/index.html",
          title: "ブロック崩し",
          thum:'data:image/png;base64,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',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/08_timer/index.html",
          title: "時計",
          thum:'/img/08-thum.817bb69e.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/10_keyboard/keyboard_game/index.html",
          title: "タイピングゲーム",
          thum:'/img/09-thum.bef95b78.png',
          date:'2022/12'
        },
      ],
    };
  },
};
</script>

<style scoped>

.works-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 0;
}
.works-flex li {
  width: 30%;
}
.card{
    margin: 15px auto !important; 
    padding:0px !important; 
    overflow: hidden !important;
    transition: all .5s !important;
}
img{
  width:100%;
  height: 200px;
  object-fit: contain;
  object-position: 0% 0%;
}
.work-desc{
  background-color: #666;
  color: white;
  padding: 5px 0px;
  font-size: bold;
}
.card:hover{
  transform: scale(1.03);
}

@media (max-width: 520px) {
.works-flex li{
  width: 47%;
}
p{
  font-size: 0.75rem;
}
}
</style>