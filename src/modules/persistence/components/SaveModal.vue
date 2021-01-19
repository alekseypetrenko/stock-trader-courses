<template>
  <transition name="fade" mode="out-in">
    <modal v-if="show" :onClose="cancelSave" :active="show">
      <div class="box">
        <div class="field">
          <label class="label">Save name</label>
          <div class="control">
            <input
              class="input"
              v-model="saveName"
              v-focus="show"
              @keydown.enter="save(saveName)"
            />
          </div>
        </div>
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button class="button" @click="cancelSave">Cancel</button>
          </div>
          <div class="control">
            <button
              class="button is-primary"
              :class="submitButtonClasses"
              @click="save(saveName)"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </modal>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Modal from "../../../components/Modal.vue";

export default {
  data() {
    return {
      saveName: "",
    };
  },
  computed: {
    ...mapState("persistence", {
      inProgress: (state) => state.save.inProgress,
      show: (state) => state.save.showModal,
    }),
    submitButtonClasses() {
      return {
        "is-loading": this.inProgress,
      };
    },
  },
  methods: mapActions("persistence", ["save", "cancelSave"]),
  components: {
    modal: Modal,
  },
};
</script>
