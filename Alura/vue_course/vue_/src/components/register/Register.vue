<template>
  <div>
    <h1 v-if="picture._id" class="centralized">change</h1>
    <h1 v-else class="centralized">inclusion</h1>

    <form @submit.prevent="record()">
      <div class="control">
        <label for="title">TITLE</label>
        <input v-model.lazy="picture.titulo" id="title" autocomplete="off" />
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input v-model.lazy="picture.url" id="url" autocomplete="off" />
        <ResponsiveImage
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
        <Button label="RECORD" type="submit" />

        <router-link :to="{ name: 'home' }">
          <Button label="BACK" type="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ResponsiveImage from "../shared/responsive-image/ResponsiveImage";
import Button from "../shared/button/Button";
import Picture from "../../domain/picture/Picture";

import PictureService from "../../domain/picture/PictureService";

export default {
  components: {
    ResponsiveImage,
    Button
  },
  data() {
    return {
      picture: new Picture(),
      id: this.$route.params.id
    };
  },
  created() {
    this.service = new PictureService(this.$resource);

    if (this.id) {
      this.service.search(this.id).then(picture => (this.picture = picture));
    }
  },
  methods: {
    record() {
      this.service.register(this.picture).then(
        () => {
          if (this.id) this.$router.push({ name: "home" });
          this.picture = new Picture();
        },
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
