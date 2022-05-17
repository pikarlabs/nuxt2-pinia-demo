<template>
  <div class="">
    <h1>Country List</h1>
    <CountryList />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCountryStore } from '~/store/country'

export default {
  name: 'CountryPage',
  layout: 'BaseLayout',
  computed: {
    // https://pinia.vuejs.org/core-concepts/getters.html#with-setup
    ...mapState(useCountryStore, [
      'countries',
      'loading'
    ])
  }
}
</script>
