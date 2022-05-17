import { defineStore } from 'pinia'

export const useCountryStore = defineStore('country', {
  state: () => ({
    countries: []
  }),
  actions: {
    findCountry (code) {
      return this.countries.find(v => v.cca2 === code)
    }
  }
})
