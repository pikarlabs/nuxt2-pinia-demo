<template>
  <div class="bg-warning p-4">
    <div v-if="loading" class="card">
      <div class="card-body text-center">
        loading data ....
      </div>
    </div>
    <div v-if="!loading" class="row">
      <div v-for="(item, key) in filteredCountries" :key="key" class="col-md-3">
        <NuxtLink :to="`/country/${item.cca2}`" class="card mb-3">
          <div class="card-body">
            <p class="mb-0 h5">{{item.name.common}}</p>
            <span class="text-muted">code : {{item.cca2}}</span>
          </div>
        </NuxtLink>
      </div>
      <div v-if="showMoreItems" class="text-center">
        <NuxtLink to="country" class="btn btn-lg btn-dark">See all countries</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCountryStore } from '~/store/country'

export default {
  name: 'CountryList',
  props: {
    limit: Number,
    showMoreItems: Boolean
  },
  computed: {
    // https://pinia.vuejs.org/core-concepts/getters.html#with-setup
    ...mapState(useCountryStore, [
      'countries',
      'loading'
    ]),
    filteredCountries () {
      if (this.limit) {
        return this.countries.slice(0, this.limit)
      }
      return this.countries
    }
  }
}
</script>
