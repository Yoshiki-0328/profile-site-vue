import { createStore } from "vuex";
import worksModule from './works/index.js'
import contactsModule from './contacts/index.js'
import authModule from './auth/index.js'

const store = createStore({
    modules:{
        works:worksModule,
        contacts:contactsModule,
        auth:authModule
    }
})

export default store