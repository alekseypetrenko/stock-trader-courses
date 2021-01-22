<template>
  <div class="section">
    <div class="container">
      <h2 class="title">Portfolio</h2>
      <div v-if="items.length === 0">
        <div class="content">
          <p>
            You have no shares right now. Buy some on the<router-link
              to="/stocks"
            >
              market.</router-link
            >
          </p>
        </div>
      </div>
      <div v-else>
        <div class="columns is-multiline">
          <div
            class="column is-half"
            v-for="asset in items"
            :key="asset + Math.random()"
          >
            <asset
              :name="asset.name"
              :quantity="asset.quantity"
              :price="asset.price"
              action="SELL"
              :onAction="sell"
            ></asset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Asset from "../../../components/Asset";

export default {
  computed: mapGetters("portfolio", ["items"]),
  methods: mapActions("stock", ["sell"]),
  components: {
    Asset,
  },
};
</script>
