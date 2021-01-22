<template lang="pug">
nav.navbar.is-dark.is-active
  .container
    .navbar-brand
      router-link.navbar-item.is-text-centered(to="/")
        h1.title.is-4.has-text-white Stock Trader
    .navbar-menu.is-active
      .navbar-start
        router-link.navbar-item(to="/portfolio") Portfolio
        router-link.navbar-item(to="/stocks") Stocks
        router-link.navbar-item(to="/history") History
      .navbar-end
        persistence
        .navbar-item Day:
          | &nbsp;
          strong.has-text-white {{ day }}
        .navbar-item 
          button.button(@click="endday") End Day
        .navbar-item Funds:
          | &nbsp;
          strong.has-text-white ${{ funds | money }}
        .navbar-item(@click="invokeHelpModal")
          span.icon.has-text-white
            i.fa.fa-question-circle.fa-lg
</template>

<script>
import { mapState, mapActions } from "vuex";
import { PersistenceNavItem } from "../../persistence";

import money from "../../../filters/money";

export default {
  computed: mapState("app", ["day", "funds"]),
  methods: mapActions("app", ["endday", "invokeHelpModal"]),
  components: {
    persistence: PersistenceNavItem,
  },
  filters: {
    money,
  },
};
</script>

<style scoped>
.icon:hover {
  cursor: pointer;
}
</style>
