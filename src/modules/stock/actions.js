export default {
  generateData: ({ commit, dispatch }) => {
    commit('generate');
    dispatch('history/addNewPrice', null, { root: true });
  },
  buy: ({ commit, dispatch, getters }, { name, quantity }) => {
    const payload = {
      ...getters.getByName(name),
      quantity
    };

    dispatch('app/buy', payload, { root: true });
    commit('portfolio/buy', payload, { root: true });
  },
  sell: ({ commit, dispatch, getters }, { name, quantity }) => {
    const payload = {
      ...getters.getByName(name),
      quantity
    };

    dispatch('app/sell', payload, { root: true });
    commit('portfolio/sell', payload, { root: true });
  }
  
};
