<template >
  <div
    class="modal"
    :class="modalClasses"
    @keydown.esc="onClose"
    v-focus="active"
    tabindex="1"
  >
    <div class="modal-background" @click="onClose"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button class="modal-close is-large" @click="onClose"></button>
  </div>
</template>

<script>
export default {
  props: ["active", "onClose"],
  computed: {
    modalClasses() {
      return {
        "is-active": this.active,
      };
    },
  },
};
</script>

