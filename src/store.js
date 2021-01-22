import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import portfolio from './modules/portfolio';
import stock from './modules/stock';
import persistence from './modules/persistence';
import history from './modules/history';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    portfolio,
    stock,
    persistence,
    history
  }
});
