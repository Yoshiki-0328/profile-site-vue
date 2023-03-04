<template>
  <div>
    <header>
      <h1>じゃんけんゲーム</h1>
    </header>
    <base-button mode="outline" link to="/game">ゲーム</base-button>
    <base-button mode="outline" link to="/score">スコア</base-button>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data(){
    return{
      scores:[]
    }
  },
  provide(){
    return{
      getResult:this.getResult,
      scores:this.scores
    }
  },
  methods:{
    getResult(){
      const localData=JSON.parse(localStorage.getItem('janken'))
      if(!localData){
        return
      }
      this.scores.splice(0,this.scores.length)
      for(const data of localData){
        this.scores.push(data)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,h2{
  font-weight: bold;
  margin: 10px 0;
}
</style>