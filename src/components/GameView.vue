<template>
    <section>
        <div v-if="resultMessage">
        <h2>{{ resultMessage }}</h2>
        <base-button @click="start">もういちど</base-button>
        </div>
    <base-card>
    <div class="container">
        <img :src="src" alt="相手のじゃんけん結果">
    </div>
</base-card>
        <div>
            <base-button @click="stop" value="0" :disabled="disabled">グー</base-button>
            <base-button @click="stop" value="1" :disabled="disabled">チョキ</base-button>
            <base-button @click="stop" value="2" :disabled="disabled">パー</base-button>
        </div>
    </section>
</template>

<script>
export default {
    inject:['getResult'],
    data(){
        return{
            src:'https://www.actzero.jp/sample/20161219/dist/imgs/gu.png',
            imgList:[
                'https://www.actzero.jp/sample/20161219/dist/imgs/gu.png',
                'https://www.actzero.jp/sample/20161219/dist/imgs/choki.png',
            "https://www.actzero.jp/sample/20161219/dist/imgs/par.png",
            ],
            timer:null,
            resultMessage:'',
            disabled:false
        }
    },
    created(){
        this.start()
    },
    methods:{
        changeImg(){
                let num = Math.floor(Math.random() * this.imgList.length);
                this.src = this.imgList[num];
        },
        start(){
            this.timer=setInterval(()=>{
                this.changeImg()
            },100)
            this.resultMessage=''
            this.disabled=false
        },
        stop(e){
            clearInterval(this.timer)
            const enemyIndex = this.imgList.findIndex(img=>img==this.src)
            const yourIndex = +e.target.value;
            const resultBattle = enemyIndex - yourIndex
            if(resultBattle===0){
                this.resultMessage='ひきわけ'
            }else if(resultBattle===1||resultBattle===-2){
                this.resultMessage='かち'
            }else{
                this.resultMessage='まけ'
            }
            


            //ローカルストレージに結果を追加
            const getJson = localStorage.getItem('janken');
            let json;
            if(getJson){
                const getItem=JSON.parse(getJson);
                getItem.push(this.resultMessage)
                json = JSON.stringify(getItem, undefined, 1);
            }else{
                const newItem = []
                newItem.push(this.resultMessage);
                json = JSON.stringify(newItem, undefined, 1);
            }
            localStorage.setItem('janken',json)
            this.disabled=true
            this.getResult()
        },
    }
    
}

</script>

<style scoped>

img{
    height: 200px;
}

:disabled{
    opacity:.5
}
</style>