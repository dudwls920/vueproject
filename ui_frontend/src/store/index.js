import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import createPersistedState from 'vuex-persistedstate'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  state: {
    appNavigation: [],
    pathes: [],
    breadcumbShow: false,
    userId: '',
    favorite: false,
    currentSkin: 'light',
  },
  mutations: {
    setMenu(state, payload) {
      state.appNavigation = payload.menus
      state.pathes = payload.pathes
    },
    setBreadcumbShow(state, payload) {
      state.breadcumbShow = payload
    },
    setUserId(state, paylaod) {
      state.userId = paylaod
    },
    setFavoriteFlag(state, paylaod) {
      state.favorite = paylaod
    },
    setSkin(state, payload) {
      state.currentSkin = payload
    },
  },
  plugins: [createPersistedState()],
  strict: process.env.DEV,
})
