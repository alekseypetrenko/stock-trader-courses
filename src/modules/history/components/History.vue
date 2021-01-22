<template>
  <div class="section">
    <div class="container">
      <h1>History</h1>
      <select name="" id="" @change="selectProduct">
        
        <option value=""></option>
        <option v-for="name in Object.keys(priceByProducts)" :key="name" :value="name">
          {{name}}
        </option>
      </select>
      <hr>
      <transition name="fade" mode="out-in">
        <Table v-if="selected" :savedProducts="filterProductsByName"/>
      </transition>
      <Graph v-if="selected" :savedProducts="filterProductsByName"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Table from './Table';
import Graph from './Graph';

export default {
  data() {
    return {
      selected: null,
    };
  },
  components: {
    Table,
    Graph
  },
  beforeMount() {
    if (!this.initialized) {
      this.generateData();
    }
  },
  computed: {
    ...mapState("history", ["priceByProducts"]),
    ...mapState("stock", ["items"]),
    ...mapState("app", ["day"]),
    ...mapState("stock", ["initialized"]),

      filterProductsByName() {
        return this.priceByProducts[this.selected]
      }
  },
  methods: {
    ...mapActions("stock", ["generateData"]),
    selectProduct(event){
      this.selected = event.target.value;
      this.filterProductsByName
    }
  },
};
</script>


<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>