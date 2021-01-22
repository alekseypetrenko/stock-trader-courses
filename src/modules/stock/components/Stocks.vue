<template>
  <div class="section">
    <div class="container">
      <h2 class="title">Stocks</h2>
      <div class="columns is-multiline">
        <div
          class="column is-half"
          v-for="asset in items"
          :key="asset + Math.random()"
        >
          <asset
            :name="asset.name"
            :price="asset.price"
            :funds="funds"
            action="BUY"
            :onAction="buy"
          ></asset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Asset from "../../../components/Asset";

export default {
  computed: {
    ...mapState("app", ["funds"]),
    ...mapState("stock", ["items", "initialized"]),
  },
  methods: mapActions("stock", ["buy", "generateData"]),
  components: {
    Asset,
  },
  beforeMount() {
    if (!this.initialized) {
      this.generateData();
    }
  },
};
</script>
