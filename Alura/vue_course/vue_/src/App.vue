<template>
  <div class="body">
    <Menu></Menu>

    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu.vue";

export default {
  components: { Menu }
};
</script>

<style>
.body {
  margin: 0 auto;
  font-family: Helvetica, sans-serif;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
</style>
