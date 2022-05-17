<template>
  <div>
    <div v-if="loading" class="card">
      <div class="card-body text-center">
        loading data ....
      </div>
    </div>
    <div v-if="!loading" class="card">
      <div class="card-body">
        <h1>{{country.name.common}}</h1>
        <ul>
          <li>code : {{country.cca2}}, {{country.cca3}}</li>
          <li>currencies :
            <span v-for="(item2, key2) in country.currencies" :key="key2">{{item2.name}} ({{item2.symbol}})</span>
          </li>
          <li>timezone :
            <span v-for="(item2, key2) in country.timezone" :key="key2">{{item2}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCountryStore } from '~/store/country'

export default {
  name: 'CountryDetail2',
  layout: 'BaseLayout',
  data () {
    return {
      country: null,
      loading: false
    }
  },
  fetch () {
    this.loading = true
    this.country = this.findCountry(this.$route.params.slug)
    this.loading = false
  },
  methods: {
    ...mapActions(useCountryStore, ['findCountry'])
  }
}
</script>
