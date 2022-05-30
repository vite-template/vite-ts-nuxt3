import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state() {
    return {
      count: 100,
    }
  },

  actions: {
    setCount() {
      this.count += 1
    },
  },
})
