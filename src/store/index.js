import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const BASE_URL = 'https://api-portfolio-hilmi.herokuapp.com'
const BASE_URL = 'http://localhost:3000'
const STORIES_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hilmialmuhtadeb'

export default new Vuex.Store({
  state: {
    isNavbarVisible: false,
    isAddMessageSuccess: false,
    isAddMessageFailed: false,
    projects: null,
    messages: null,
    stories: null,
    achievments: null,
    isAuth: false
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
    },
    setIsAddMessageFailed (state, condition) {
      state.isAddMessageFailed = condition
    },
    setStories (state, payload) {
      state.stories = payload
    },
    setAuth (state, condition) {
      state.isAuth = condition
    },
    setAchievments (state, payload) {
      state.achievments = payload
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
        .catch(() => {
          commit('setIsAddMessageFailed', true)
        })
    },
    getStories ({commit}) {
      axios.get(STORIES_API_URL)
        .then(response => {
          commit('setStories', response.data.items)
        })
    },
    getAchievments ({commit}) {
      axios.get('http://localhost:3000/api/achievments')
        .then(response => {
          commit('setAchievments', response.data.data)
        })
    },
    addAchievment ({commit}, payload) {
      axios.post('http://localhost:3000/api/achievments', {
        ...payload
      })
        .then(() => {
          commit('setIsAddMessageSuccess', true)
        })
        .catch(() => {
          commit('setIsAddMessageFailed', true)
        })
    },
    createAuth ({commit}, user) {
      axios.post('http://localhost:3000/api/auth', {
        user
      })
        .then(response => {
          document.cookie = `token=${response.data.token}`
          commit('setAuth', true)
        })
        .catch(() => {
          commit('setAuth', false)
        })
    }
  },
  getters: {
    isNavbarVisible: state => state.isNavbarVisible,
    isAddMessageSuccess: state => state.isAddMessageSuccess,
    isAddMessageFailed: state => state.isAddMessageFailed,
    contacts: state => state.contacts,
    projects: state => state.projects,
    messages: state => state.messages,
    stories: state => state.stories,
    achievments: state => state.achievments,
    isAuth: state => state.isAuth
  }
})
