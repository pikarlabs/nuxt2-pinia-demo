<template>
  <div>
    <div v-if="page2">
      page2
      <h1>{{page2.title}}</h1>
      <p class="bg-secondary text-white p-3">{{page2.description}}</p>
    </div>
    <div v-if="page">
      page1
      <h1>{{page.title}}</h1>
      <p class="bg-secondary text-white p-3">{{page.description}}</p>
      <nuxt-content :document="page"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePage',
  layout: 'BaseLayout',
  data () {
    return {
      page: null,
      page2: null
    }
  },
  // async asyncData ({ $content, params, error }) {
  //   const slug = params.slug || 'index'
  //
  //   const page = await $content(slug)
  //     .fetch()
  //     .catch(() => {
  //       error({ statusCode: 404, message: 'Page not found' })
  //     })
  //   return {
  //     page
  //   }
  // }
  async fetch () {
    console.log('====================')
    const slug = this.$route.params.slug || 'index'

    console.log('await -- a')
    this.page = await this.$content(slug)
      .fetch()
      .catch(() => {
        this.error({ statusCode: 404, message: 'Page not found' })
      })
    console.log('await -- b')
    this.processData('await', this.page)
    console.log('await -- c')

    console.log('promise -- a')
    this.$content(slug)
      .fetch()
      .then((response) => {
        console.log('promise -- b')
        this.page2 = response
        this.processData('promise', this.page2)
      })
      .catch(() => {
        this.error({ statusCode: 404, message: 'Page not found' })
      })
    console.log('promise -- c')
  },
  methods: {
    processData (key, page) {
      console.log(key, page.title)
    }
  }
}
</script>
