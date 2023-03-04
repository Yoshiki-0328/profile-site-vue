<template>
  <div>
    <base-card>
      <section class="section">
        <div class="wrapper">
          <h2 class="section-title">About</h2>
          <div class="about-content">
            <img src="../assets/icon.jpg" alt="アイコン" />
            <h2>Yoshi</h2>
            <p>
              埼玉県出身、社会人6年目、27歳。<br />
              新卒で日経大手SIerに就職、4年間法人営業として活動し、公共領域の既存ビジネスの深耕、拡大に従事。
              5年目にエンジニアにジョブチェンジし、現在は、SaaSサービスの拡販・導入部隊に所属。
            </p>
          </div>
        </div>
      </section>
    </base-card>
    <base-card>
      <section class="section">
        <div class="wrapper">
          <h2 class="section-title">Skills</h2>
          <ul class="skills-flex">
            <li v-for="imgSrc in imgSrcs" :key="imgSrc">
              <base-card>
              <img :src="imgSrc.src" :alt="imgSrc.alt">
              <p v-if="imgSrc.month">経験期間：<strong>{{imgSrc.month}}</strong>ヵ月  </p>
              <p v-else>経験期間：<strong>{{imgSrc.year}}</strong>年</p>
            </base-card>
            </li>
          </ul>
        </div>
      </section>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrcs: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
          alt: "html",
          month:null,
          year:1
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
          alt: "css",
          month:null,
          year:1
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          alt: "javascript",
          month:6,
          year:null
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
          alt: "jquery",
          month:2,
          year:null
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
          alt: "vuejs",
          month:2,
          year:null
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
          alt: "git",
          month:2,
          year:null
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
          alt: "github",
          month:2,
          year:null
        },
        {
          src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
          alt:'firebase',
          month:1,
          year:null
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          alt: "aws",
          month:1,
          year:null
        },
      ],
    };
  },
};
</script>

<style scoped>

.about-content img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 3px 0px #999;
}
.skills-flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 0;
}
.skills-flex .card{
    margin: 15px auto !important; 
}
.skills-flex li{
  width: 30%;
}
.skills-flex strong{
  font-weight: bold;
  font-size: 20px;
}
@media (max-width: 520px) {
  .skills-flex li{
  width: 47%;
}
p{
  font-size: 0.75rem;
}
}
</style>