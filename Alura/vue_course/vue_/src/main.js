import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import { routes } from "./routes";

import VeeValidate from "vee-validate";
import msg from "./pt_BR";

import "./directives/Transform";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./assets/css/test.css";
import "./assets/js/test.js";

Vue.use(VeeValidate, {
  locale: "pt_BR",
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.http.options.root = process.env.API_URL
  ? process.env.API_URL
  : "http://localhost:3000";

Vue.http.interceptors.push((req, next) => {
  // é possível colocar informações no header antes do envio da requisição
  req.headers.set("Authorization", "informação de segurança aqui");
  console.log("Lidando com o request");

  next(res => {
    console.log("Lidando com a resposta");
    // é possível acessar os dados da reposta e realizar transformações antes
    console.log(res.body);
  });
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
