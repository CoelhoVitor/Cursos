<template>
  <nav>
    <ul>
      <li class="item" v-for="route in routes" :key="route.path">
        <router-link class="router" :to="route.path">{{
          route.title
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from "../../../routes";
export default {
  data() {
    return {
      routes
    };
  }
};
</script>

<style scoped>
.item {
  list-style: none;
}

.router {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>
