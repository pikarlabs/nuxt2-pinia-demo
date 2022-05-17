<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-3">
        <SidebarMenu/>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-body">
            this is header menu
          </div>
        </div>

        <div class="py-4">
          <Nuxt/>
        </div>

        <!-- show list of countries in footer except on country list -->
        <div class="bg-dark p-4" v-if="$route.path !== '/country'">
          <div v-if="loading" class="card">
            <div class="card-body text-center">
              loading data ....
            </div>
          </div>
          <div class="row" v-if="!loading">
            <div v-for="(item, key) in countries" :key="key" class="col-md-3">
              <NuxtLink :to="`/country/${item.cca2}`" class="card mb-3">
                <div class="card-body">
                  <p class="mb-0 h5">{{item.name.common}}</p>
                  <span class="text-muted">code : {{item.cca2}}</span>
                </div>
              </NuxtLink>
            </div>
            <div class="text-center">
              <NuxtLink to="country" class="btn btn-lg btn-warning">See all countries</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCountryStore } from '~/store/country'

export default {
  name: 'BaseLayout',
  data () {
    return {
      loading: false,
      countries: []
    }
  },
  async fetch () {
    const store = useCountryStore()

    this.loading = true
    let allCountries = await this.$axios.$get('https://restcountries.com/v3.1/all')
    allCountries = allCountries.sort((a, b) => a.name.common > b.name.common) // sort by name

    // update country state
    store.$patch({
      countries: allCountries
    })

    this.countries = allCountries.slice(0, 12) // load the first 12 countries
    this.loading = false
  }
}
</script>
