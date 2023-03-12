
import { createApp } from "vue";

import router from "./router.js";

import App from "./App.vue";

import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseSpinner from './components/UI/BaseSpinner.vue'

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component('base-spinner',BaseSpinner);

app.mount("#app");
