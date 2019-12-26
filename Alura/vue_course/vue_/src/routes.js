import Register from "./components/register/Register.vue";
import Home from "./components/home/Home.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    title: "home"
  },
  {
    path: "/register",
    component: Register,
    title: "register"
  }
];
