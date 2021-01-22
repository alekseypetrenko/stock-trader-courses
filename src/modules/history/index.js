import mutations from './mutations';
import actions from './actions';

import History from './components/History';

const defaultState = {
  priceByProducts: {}
};

const module = {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
};

export { module as default, History };
