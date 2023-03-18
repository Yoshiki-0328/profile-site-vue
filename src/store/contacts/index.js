import getters from "./getters.js"
import mutations from "./mutations.js"
import actions from "./actions.js"

export default{
    namespaced:true,
    state(){
        return{
            contacts:""
        }
    },
    getters,
    mutations,
    actions
}