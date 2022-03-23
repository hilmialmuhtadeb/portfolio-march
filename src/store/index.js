import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import '../api/mock/mock.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavbarVisible: false,
    contacts: null,
    projects: null
  },
  mutations: {
    setNavbarVisible (state) {
      state.isNavbarVisible = !state.isNavbarVisible
    },
    setContacts (state, payload) {
      state.contacts = payload
    },
    setProjects (state, payload) {
      state.projects = payload
    }
  },
  actions: {
    getContacts ({commit}) {
      axios.get('/api/contacts')
        .then(response => {
          commit('setContacts', response.data)
        })
    },
    getProjects ({commit}) {
      axios.get('/api/projects')
        .then(response => {
          commit('setProjects', response.data)
        })
    }
  },
  getters: {
    isNavbarVisible: state => state.isNavbarVisible,
    contacts: state => state.contacts,
    projects: state => state.projects
  }
})
