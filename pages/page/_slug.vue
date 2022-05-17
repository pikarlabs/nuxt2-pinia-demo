<template>
  <div>
    <h1>{{page.title}}</h1>
    <p class="bg-secondary text-white p-3">{{page.description}}</p>
    <nuxt-content :document="page"/>
  </div>
</template>

<script>
export default {
  name: 'PagePage',
  layout: 'BaseLayout',
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return {
      page
    }
  }
}
</script>
