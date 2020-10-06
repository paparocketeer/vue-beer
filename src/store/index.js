import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: [],
    loading: true,
    finished: false
  },
  mutations: {
    updatePosts(state, beers) {
      state.beers = state.beers.concat(beers);
    },
    changeLoadingState(state, loading) {
      state.loading = loading;
    },
    finishedBeers(state, finished) {
      state.finished = finished;
    },
    deleteBeer(state, index) {
      state.beers.splice(index, 1);
    },
    editBeer(state, { name, description, index }) {
      state.beers[index].name = name;
      state.beers[index].description = description;
    }
  },
  actions: {
    async loadData({ commit }, { page, limit }) {
      await axios
        .get(`${process.env.VUE_APP_API}?page=${page}&limit=${limit}`)
        .then(response => {
          commit("updatePosts", response.data);
          commit("changeLoadingState", false);
          if (!response.data.length) {
            commit("finishedBeers", true);
          }
        });
    },
    deleteBeerById({ commit }, index) {
      commit("deleteBeer", index);
    },
    updateBeerById({ commit }, payload) {
      commit("editBeer", payload);
    }
  },
  modules: {}
});
