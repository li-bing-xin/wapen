import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { registerPlugins } from "@/plugins";
import { QuillEditor } from "@vueup/vue-quill";
import "vuetify/styles";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "./overlay.scss";
import "./index.scss";

registerPlugins();
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.component("QuillEditor", QuillEditor);
app.mount("#app");
