import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
// import home from './modules/home'
// import contacts from './modules/contacts'
// import discover from './modules/discover'
// import me from './modules/me'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  // modules: {
  //   home,
  //   contacts,
  //   discover,
  //   me
  // },
  strict: debug
})