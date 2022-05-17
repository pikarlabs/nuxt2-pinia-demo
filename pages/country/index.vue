<template>
  <div class="bg-dark p-4">
    <div v-if="loading" class="card">
      <div class="card-body text-center">
        loading data ....
      </div>
    </div>
    <div v-if="!loading" class="row">
      <div v-for="(item, key) in countries" :key="key" class="col-md-3">
        <NuxtLink :to="`/country/${item.cca2}`" class="card mb-3">
          <div class="card-body">
            <p class="mb-0 h5">{{item.name.common}}</p>
            <span class="text-muted">code : {{item.cca2}}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
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
