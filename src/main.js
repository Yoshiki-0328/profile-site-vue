import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// import router from './router.js'

import App from "./App.vue";

import GameView from "./components/GameView.vue";
import ScoreView from "./components/ScoreView.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/game" },
    { path: "/game", component: GameView },
    { path: "/score", component: ScoreView },
    {path:'/notFound(.*)',redirect:'/game'}
  ],
  linkActiveClass:'active'
});

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);

app.mount("#app");
