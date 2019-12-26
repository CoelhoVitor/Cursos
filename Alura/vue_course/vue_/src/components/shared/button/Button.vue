<template>
  <button :class="buttonStyle" :type="type" @click="fireAction()">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    confirmation: Boolean,
    bStyle: String
  },
  methods: {
    fireAction() {
      if (this.confirmation) {
        if (confirm("confirm remove?")) {
          this.$emit("buttonEnabled");
        }
        return;
      }
      this.$emit("buttonEnabled");
    }
  },
  computed: {
    buttonStyle() {
      if (this.bStyle == "standard") return "button standard-button";
      //if (this.bStyle == "danger")
      return "button danger-button";
    }
  }
};
</script>

<style scoped>
.button {
  border: 0;
  border-radius: 1px;
  margin-top: 10px;
  font-size: 1.2em;
  width: 100%;
}

.danger-button {
  background: firebrick;
  color: white;
}

.standard-button {
  background: darkcyan;
  color: white;
}
</style>
