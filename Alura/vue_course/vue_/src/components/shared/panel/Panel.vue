<template>
  <div class="panel">
    <h2 class="panel-title" @dblclick="visible = !visible">
      {{ title }}
    </h2>
    <transition name="panel-fade">
      <!--
      panel-fade-enter //antes do elemento ser incluído ou removido, estado atual
      panel-fade-enter-active //quando o elemento está sendo incluído
      panel-fade-leave-active //quando o elemento está sendo removido
      -->
      <div class="panel-content" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style scoped>
.panel {
  display: inline-block;
  padding: 0 auto;
  border: 1px solid grey;
  margin: 5px;
  box-shadow: 5px 5px 10px lightgrey;
  border-radius: 3px;
  width: 200px;
  /* height: 250px; */
  vertical-align: top;
  text-align: center;
}

.panel-title {
  text-align: center;
  border: 1px solid grey;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: lowercase;
  height: 50px;
}

.panel-fade-enter,
.panel-fade-leave-to {
  opacity: 0;
}

.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.5s;
}
</style>
