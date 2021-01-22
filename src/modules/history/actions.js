export default {
  addNewPrice: ({commit, rootState }) => {
    commit('addNewPrice', rootState.stock.items);
  }
};
