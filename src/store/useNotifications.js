import {defineStore} from 'pinia'

export const useNotifications = defineStore('useNotifications', {
  state: () => {
    return {
      isVisible: false
    }
  },
  actions: {
      toggleVisibility() {
        this.isVisible = !this.isVisible
      },
      openList() {
        this.isVisible = true
      },
      closeList() {
        this.isVisible = false
      }
  },
})