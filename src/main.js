import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import ProfilePage from './pages/ProfilePage.vue'
import AboutPage from './pages/AboutPage.vue'
import WorksPage from './pages/WorksPage.vue'
import ContactPage from './pages/ContactPage.vue'


import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";

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

app.mount("#app");
