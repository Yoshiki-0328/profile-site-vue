import { createStore } from "vuex";
import worksModule from './works/index.js'
import contactsModule from './contacts/index.js'

const store = createStore({
    modules:{
        works:worksModule,
        contacts:contactsModule
    }
})

export default store