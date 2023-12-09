import { createApp } from "vue";
import "@/index.css";
import App from "@/App.vue";
import { router } from "@/router";

// vue-toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount("#app");
