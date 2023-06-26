import { createStore } from 'vuex'

export default createStore({
  state: {
    tutorials: null,
    tutorial: null,
  },
  mutations: {
    setTutorials: (state, tutorials) => {
      fetch("http://localhost:3000/tutorials")
    }
  },
  actions: {
  }
})
