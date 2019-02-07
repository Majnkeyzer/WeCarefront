import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countTotal: 0
  },
  getters: {
    countTotal: state => state.countTotal
  },
  mutations: {
    incrementTotal(state, number) {
      state.countTotal = state.countTotal + number;
    }
  }
});
