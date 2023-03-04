<template>
  <section class="sectionportfolio" id="portfolio">
    <div class="wrapper">
      <h2 class="section-title">Portfolio</h2>
      <div class="contentportfolio-content">
        <ul class="works-flex">
          <li v-for="workSrc in worksSrc" :key="workSrc">
            <base-card>
              <a :href="workSrc.src">{{ workSrc.title }}</a>
            </base-card>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      worksSrc: [
        {
          src: "../javascript/クイズゲーム/index.html",
          title: "クイズゲーム",
        },
        {
          src: "../javascript/アコーディオンメニュー/index.html",
          title: "アコーディオンメニュー",
        },
        {
          src: "../javascript/タブメニュー/index.html",
          title: "タブメニュー",
        },
        {
          src: "../isara/index.html",
          title: "イサラサイト",
        },
        {
          src: "../javascript/電卓/index.html",
          title: "電卓",
        },
        {
          src: "#",
          title: "動画キャプチャ",
        },
        {
          src: "../javascript/QRコード生成/index.html",
          title: "QRコード生成(QRious.js)",
        },
        {
          src: "#",
          title: "パスワード強度チェック",
        },
        {
          src: "../javascript/ブロック崩し/index.html",
          title: "ブロック崩し",
        },
        {
          src: "../javascript/タイマー/index.html",
          title: "時計（現在時刻/ストップウォッチ/タイマー）",
        },
        {
          src: "../javascript/通貨変換/index.html",
          title: "通貨変換",
        },
        {
          src: "#",
          title: "キーボード",
        },
      ],
    };
  },
};
</script>

<style scoped>
.portfolio-content {
  padding: 015%;
}
.portfolio-content li {
  text-align: left;
  padding: 10px;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
  box-shadow: 003px0px#999;
}
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