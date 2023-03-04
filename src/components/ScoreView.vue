<template>
    <section>
        <base-card>
        <h2>せいせき</h2>
        <base-button mode="flat" @click="clearResult">クリア</base-button>
        <ol>
            <li v-for="score in scores" :key="score">
            {{ score }}
            </li>
        </ol>
    </base-card>
    
    </section>
</template>

<script>
export default {
    inject:['scores','getResult'],
    methods:{
        clearResult(){
            localStorage.removeItem('janken')
            this.scores.splice(0,this.scores.length)
        }
    },
    created(){
        this.getResult()
    }
}

</script>

<style scoped>
ol{
    margin: 0 auto;
    width: 20%;
}
li{
    font-weight: bold;
    font-size: 24px;
}
</style>

