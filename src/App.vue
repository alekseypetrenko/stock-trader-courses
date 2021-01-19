<template>
  <div>
    <div v-if="!finished">
      <navigation></navigation>
      <goal></goal>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <save-modal></save-modal>
      <load-modal></load-modal>
      <help-modal></help-modal>
    </div>
    <div v-if="finished">
      <end></end>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { Navigation, Goal, End, HelpModal } from "./modules/app";
import { SaveModal, LoadModal } from "./modules/persistence";

export default {
  computed: mapState("app", ["finished"]),
  components: {
    Navigation,
    Goal,
    End,
    SaveModal,
    LoadModal,
    HelpModal,
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}
</style>
