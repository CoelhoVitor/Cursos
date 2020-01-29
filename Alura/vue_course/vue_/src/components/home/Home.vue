<template>
  <div>
    <h1 class="title">{{ title }}</h1>

    <input
      type="text"
      class="filter"
      placeholder="filter by title"
      @input="filter = $event.target.value"
    />

    <ul class="list">
      <li
        class="item-list"
        v-for="picture in picturesWithFilter"
        :key="picture.titulo"
      >
        <Panel :title="picture.titulo">
          <ResponsiveImage
            :url="picture.url"
            :title="picture.titulo"
            v-my-transform:scale.animate="1.5"
          />
          <Button
            type="button"
            label="remove"
            bStyle="danger"
            :confirmation="false"
            @buttonEnabled="remove(picture)"
          />
        </Panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "../shared/panel/Panel.vue";
import ResponsiveImage from "../shared/responsive-image/ResponsiveImage.vue";
import Button from "../shared/button/Button.vue";

import transform from "../../directives/Transform";

export default {
  components: { Panel, ResponsiveImage, Button },
  directives: {
    "my-transform": transform
  },
  data() {
    return {
      title: "alurapic",
      pictures: [],
      filter: []
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(
        pics => (this.pictures = pics),
        err => console.log(err)
      );
  },
  computed: {
    picturesWithFilter() {
      if (this.filter) {
        let exp = new RegExp(this.filter, "i");
        return this.pictures.filter(pic => exp.test(pic.titulo));
      } else {
        return this.pictures;
      }
    }
  },
  methods: {
    remove(picture) {
      alert("removing pic " + picture.titulo);
    }
  }
};
</script>

<style>
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

.filter {
  display: flex;
  width: 30%;
  margin-left: 45px;
}
</style>
