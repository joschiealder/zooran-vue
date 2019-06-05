import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quokkas: [
      {
        id: 0,
        name: 'Quentin'
      },
      {
        id: 1,
        name: 'Quinn'
      },
      {
        id: 2,
        name: 'Quirin'
      },
      {
        id: 3,
        name: 'Quincy'
      }
    ]

  },
  mutations: {
    addQuokka (state, quokka) {
      state.quokkas.push(quokka)
    }
  },
  actions: {

  }
})
