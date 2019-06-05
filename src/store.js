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
  // TODO: b) Schreibe eine mutation "addQuokka" die den state, und ein quokka übergeben bekommt und das quokka dem quokkas array des states hinzufügt (Array.push())
  mutations: {

  },
  actions: {

  }
})
