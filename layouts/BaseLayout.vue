<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-3">
        <SidebarMenu/>
      </div>
      <div class="col-md-9">
        <div class="card text-center bg-dark text-white">
          <div class="card-body">
            this is header menu
          </div>
        </div>

        <div class="py-4">
          <Nuxt/>
        </div>

        <!-- show list of countries in footer except on country list -->
        <CountryList
          v-if="$route.path!=='/country'"
          :limit="12"
          show-more-items
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCountryStore } from '~/store/country'

export default {
  name: 'BaseLayout',
  fetchOnServer: false,
  data () {
    return {
      countries: []
    }
  },
  computed: {
    // https://pinia.vuejs.org/core-concepts/getters.html#with-setup
    ...mapState(useCountryStore, ['loading'])
  },
  async fetch () {
    const store = useCountryStore()

    // update country state
    store.$patch({
      loading: true
    })

    let allCountries = await this.$axios.$get('https://restcountries.com/v3.1/all')
    allCountries = allCountries.sort((a, b) => a.name.common > b.name.common) // sort by name

    // update country state
    store.$patch({
      countries: allCountries,
      loading: false
    })
  }
}
</script>
