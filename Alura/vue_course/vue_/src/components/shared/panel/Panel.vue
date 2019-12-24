<template>
  <div class="panel">
    <h2 class="panel-title">{{ title }}</h2>
    <slot class="panel-content"></slot>
  </div>
</template>


<script>
export default {
  props: ["title"]
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
  height: 250px;
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
</style>
