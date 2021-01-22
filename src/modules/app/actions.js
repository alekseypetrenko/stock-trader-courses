export default {
  buy: ({ state, commit }, { price, quantity }) => {
    commit('decreaseFunds', price * quantity);
    commit('updateProgress');

    if (state.progress >= 100) {
      commit('endgame');
    }
  },
  sell: ({ state, commit }, { price, quantity }) => {
    commit('increaseFunds', price * quantity);
    commit('updateProgress');

    if (state.progress >= 100) {
      commit('endgame');
    }
  },
  endday: ({ state, commit, dispatch, rootState }) => {
    commit('endday');
    commit('stock/endday', null, { root: true });
    dispatch('history/addNewPrice', null, { root: true });
  },
  invokeHelpModal: ({ commit }) => commit('invokeHelpModal'),
  revokeHelpModal: ({ commit }) => commit('revokeHelpModal')
};
