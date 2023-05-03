import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const ProfilePage =defineAsyncComponent(()=>import('./pages/ProfilePage.vue'))
const AboutPage = defineAsyncComponent(()=>import('./pages/AboutPage.vue'))
const WorksPage = defineAsyncComponent(()=>import('./pages/WorksPage.vue'))
const ContactPage = defineAsyncComponent(()=>import('./pages/ContactPage.vue'))
const ContactList = defineAsyncComponent(()=>import('./pages/ContactList.vue'))
const UserAuth = defineAsyncComponent(()=>import('./pages/UserAuth.vue'))
import TheFooter from './components/layout/TheFooter.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {path:'/',redirect:'/profile'},
      {path:'/profile',component:ProfilePage,},
      {path:'/about',
      components:{default:AboutPage,footer:TheFooter}},
      {path:'/works',
      components:{default:WorksPage,footer:TheFooter}},
      {path:'/contact',
      components:{default:ContactPage,footer:TheFooter}},
      {path:'/contact-list',
      components:{default:ContactList,footer:TheFooter}},
      {path:'/user-auth',component:UserAuth},
      {path:'/notFound(.*)',redirect:'/profile'}
    ],
    linkActiveClass:'active'
  });

export default router;