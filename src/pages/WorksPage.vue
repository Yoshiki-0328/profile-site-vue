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
    };
  },
  computed:{
    worksSrc(){
      return this.$store.getters['works/worksSrc']
    }
  }
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