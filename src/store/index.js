import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL = 'https://api-portfolio-hilmi.herokuapp.com'

export default new Vuex.Store({
  state: {
    isNavbarVisible: false,
    isAddMessageSuccess: false,
    projects: null,
    messages: null,
    stories: [],
    achievments: []
  },
  mutations: {
    setNavbarVisible (state) {
      state.isNavbarVisible = !state.isNavbarVisible
    },
    setProjects (state, payload) {
      state.projects = payload
    },
    setMessages (state, payload) {
      state.messages = payload
    },
    addNewMessageToState (state, payload) {
      state.messages.unshift(payload)
    },
    setIsAddMessageSuccess (state, condition) {
      state.isAddMessageSuccess = condition
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
      axios.get(`${BASE_URL}/api/projects`)
        .then(response => {
          commit('setProjects', response.data.data)
        })
    },
    getMessages ({commit}) {
      axios.get(`${BASE_URL}/api/messages`)
        .then(response => {
          commit('setMessages', response.data.data)
        })
    },
    addMessage ({commit}, newMessage) {
      axios.post(`${BASE_URL}/api/messages`, {
        message: newMessage
      })
        .then(response => {
          commit('setIsAddMessageSuccess', true)
          commit('addNewMessageToState', response.data.data)
        })
    }
  },
  getters: {
    isNavbarVisible: state => state.isNavbarVisible,
    isAddMessageSuccess: state => state.isAddMessageSuccess,
    contacts: state => state.contacts,
    projects: state => state.projects,
    messages: state => state.messages,
    stories: state => state.stories,
    achievments: state => state.achievments
  }
})
