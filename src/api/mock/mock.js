import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import routeMock from './index.js'

const mock = new MockAdapter(axios)

mock.onGet('/api/contacts').reply(200, {
  ...routeMock[0].response.data
})

mock.onGet('/api/projects').reply(200, {
  ...routeMock[1].response.data
})

export default mock