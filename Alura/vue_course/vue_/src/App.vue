<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>

    <ul class="list">
      <li class="item-list" v-for="picture in pictures" :key="picture">
        <Panel :title="picture.titulo">
          <img class="responsive-image" :src="picture.url" :alt="picture.titulo" />
        </Panel>
      </li>
    </ul>
  </div>
</template>


<script>
import Panel from "./components/shared/panel/Panel.vue";

export default {
  components: { Panel },
  data() {
    return {
      title: "alurapic",
      pictures: []
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(pics => (this.pictures = pics), err => console.log(err));
  }
};
</script>

<style>
.body {
  margin: 0 auto;
  font-family: Helvetica, sans-serif;
}

.title {
  display: flex;
  justify-content: center;
}

.list {
  list-style: none;
}

.item-list {
  display: inline-block;
}

.responsive-image {
  width: 100%;
}
</style>
