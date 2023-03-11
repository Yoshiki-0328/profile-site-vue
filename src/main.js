import { defineAsyncComponent } from "vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
// import ProfilePage from './pages/ProfilePage.vue'
// import AboutPage from './pages/AboutPage.vue'
// import WorksPage from './pages/WorksPage.vue'
// import ContactPage from './pages/ContactPage.vue'

const ProfilePage =defineAsyncComponent(()=>import('./pages/ProfilePage.vue'))
const AboutPage = defineAsyncComponent(()=>import('./pages/AboutPage.vue'))
const WorksPage = defineAsyncComponent(()=>import('./pages/WorksPage.vue'))
const ContactPage = defineAsyncComponent(()=>import('./pages/ContactPage.vue'))

import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseSpinner from './components/UI/BaseSpinner.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/',redirect:'/profile'},
    {path:'/profile', component:ProfilePage},
    {path:'/about',component:AboutPage},
    {path:'/works',component:WorksPage},
    {path:'/contact',component:ContactPage},
    {path:'/notFound(.*)',redirect:'/profile'}
  ],
  linkActiveClass:'active'
});

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component('base-spinner',BaseSpinner);

app.mount("#app");
