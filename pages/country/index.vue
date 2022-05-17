<template>
  <div class="bg-dark row py-4">
    <div v-for="(item, key) in countries" :key="key" class="col-md-3">
      <NuxtLink :to="`/country/${item.cca2}`" class="card mb-3">
        <div class="card-body">
          <p class="mb-0 h5">{{item.name.common}}</p>
          <span class="text-muted">code : {{item.cca2}}</span>
        </div>
      </NuxtLink>
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
    ...mapState(useCountryStore, ['countries'])
  }
}
</script>
