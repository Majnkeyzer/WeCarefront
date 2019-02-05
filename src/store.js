import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wishedBeers: [],
    countTotal: 0
  },
  getters: {
    countTotal: state => state.countTotal,
    wishedBeers: state => state.wishedBeers
  },
  mutations: {
    incrementTotal(state, number) {
      state.countTotal = state.countTotal + number;
    },

    clearAllWishedBeers(state) {
      state.countTotal = 0;
      state.wishedBeers = [];
    },

    addBeer(state, beer) {
      const exists = state.wishedBeers.some(w => {
        return w.id === beer.id;
      });
      if (exists) {
        state.wishedBeers.forEach(w => {
          if (w.id === beer.id) {
            w.number = w.number + beer.number;
          }
        });
      } else {
        state.wishedBeers = [...state.wishedBeers, beer];
      }
    }
  }
});
