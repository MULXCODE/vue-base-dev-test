// src/store/index.js (or index.ts if using TypeScript)
import { createStore } from 'vuex';

export default createStore({
  state: {
    // Define your application state here
    selectedBreeds: [],
    maxImages: 10,
    // ... other state properties ...
  },
  mutations: {
    // Define mutations to update state properties here
    setSelectedBreeds(state, breeds) {
      state.selectedBreeds = breeds;
    },
    setMaxImages(state, maxImages) {
      state.maxImages = maxImages;
    },
    // ... other mutations ...
  },
  actions: {
    // Define actions to perform async tasks here
    // Actions can commit mutations to update state
    // ... actions ...
  },
  modules: {
    // If your app grows, you can organize modules here
    // ... modules ...
  },
});
