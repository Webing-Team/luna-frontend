import { api } from './api.js'

export default {
  register(data) {
    return api.post('/accounts/register', data)
  },
  login(data) {
    return  api.post('/accounts/login', data)
  },
}