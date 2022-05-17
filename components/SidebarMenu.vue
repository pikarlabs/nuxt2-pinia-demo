<template>
  <div class="card">
    <div class="card-body">
      <div class="list-group">
        <NuxtLink v-for="(item, key) in navs" :key="key" :to="item.href" class="list-group-item list-group-item-action">
          {{item.label}}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data () {
    return {
      navs: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Countries', href: '/country' }
      ]
    }
  }
}
</script>
