import "./assets/main.css"; // Pastikan file ini ada dan berisi konfigurasi Tailwind

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
