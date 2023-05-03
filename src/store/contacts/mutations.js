export default{
    setData(state,payload){
        state.contacts=payload
    },
    resetData(state){
        state.contacts=''
    }
}