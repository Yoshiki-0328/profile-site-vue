<template>
  <section class="sectionportfolio" id="portfolio">
    <div class="wrapper">
      <h2 class="section-title">Portfolio</h2>
        <ul class="works-flex">
          <li v-for="workSrc in worksSrc" :key="workSrc">
            <base-card>
              <a :href="workSrc.src">
                <img :src="require(`@/assets/${workSrc.thum}`)" :alt="workSrc.title">
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
      isLoading:true,
      worksSrc: [
        {
          src: "https://heiyoshilog.site/works/01_quiz-game/index.html",
          title: "クイズゲーム",
          thum:'01-thum.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/02_acordion-menu/index.html",
          title: "アコーディオンメニュー",
          thum:'02-thum.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/03_tab-menu/index.html",
          title: "タブメニュー",
          thum:'03-thum.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/04_isara/index.html",
          title: "isaraサイト模写",
          thum:'04-thum.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/05_calculator/index.html",
          title: "電卓",
          thum:'05-thum.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/06_qr-create-app/index.html",
          title: "QRコード生成",
          thum:'06-thum.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/06_qr-create-app/index.html",
          title: "ブロック崩し",
          thum:'07-thum.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/08_timer/index.html",
          title: "時計",
          thum:'08-thum.png',
          date:'2022/12'
        },
        {
          src: "https://heiyoshilog.site/works/10_keyboard/keyboard_game/index.html",
          title: "タイピングゲーム",
          thum:'09-thum.png',
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