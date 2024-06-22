import {defineStore} from 'pinia'

export const useAuth = defineStore('useAuth', {
  state: () => {
    return {
      isAuth: false
    }
  },
  getters: {
    getUserNameIsAuth() {
      return JSON.parse(localStorage.getItem('user'))?.username || "JacksonCap"
    },
    auth() {
      return !!localStorage.getItem('token')
    }
  },
  actions: {
    success() {
      this.isAuth = true
    },
    logout() {
      this.isAuth = false
    }
  },
})