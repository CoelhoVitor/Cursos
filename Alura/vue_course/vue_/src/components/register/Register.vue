<template>
  <div>
    <h1 class="centralized">register</h1>
    <h2 class="centralized">{{ picture.title }}</h2>

    <form @submit.prevent="record()">
      <div class="control">
        <label for="title">TITLE</label>
        <input v-model.lazy="picture.titulo" id="title" autocomplete="off" />
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input v-model.lazy="picture.url" id="url" autocomplete="off" />
        <imagem-responsiva
          v-show="picture.url"
          :url="picture.url"
          :title="picture.titulo"
        />
      </div>

      <div class="control">
        <label for="description">DESCRIPTION</label>
        <textarea
          v-model="picture.descricao"
          id="description"
          autocomplete="off"
        ></textarea>
      </div>

      <div class="centralized">
        <my-button label="RECORD" type="submit" />

        <router-link to="/">
          <my-button label="BACK" type="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ResponsiveImage from "../shared/responsive-image/ResponsiveImage";
import Button from "../shared/button/Button";
import Picture from "../../domain/picture/Picture";

export default {
  components: {
    "responsive-image": ResponsiveImage,
    "my-button": Button
  },
  data() {
    return {
      picture: new Picture()
    };
  },
  methods: {
    record() {
      this.$http.post("http://localhost:3000/v1/fotos", this.picture).then(
        () => (this.picture = new Picture()),
        err => console.log(err)
      );
    }
  }
};
</script>

<style scoped>
.centralized {
  text-align: center;
}

.control {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.control label {
  display: block;
  font-weight: bold;
}

.control label + input,
.control textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}
</style>
