<template>
  <img :src="url" :alt="title" class="responsive-image" />
</template>

<script>
export default {
  props: ["url", "title"]
};
</script>

<style scoped>
.responsive-image {
  width: 100%;
}
</style>
