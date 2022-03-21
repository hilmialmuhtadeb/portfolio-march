import Vue from 'vue'
import Vuex from 'vuex'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import routeMock from '../api/mock'

const mock = new MockAdapter(axios)

mock.onGet('/api/contacts').reply(200, {
  ...routeMock[0].response.data
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: null
  },
  mutations: {
    setContacts (state, payload) {
      state.contacts = payload
    }
  },
  actions: {
    getContacts ({commit}) {
      axios.get('/api/contacts')
        .then(response => {
          commit('setContacts', response.data)
        })
    }
  },
  getters: {
    contacts: state => state.contacts
  }
})
