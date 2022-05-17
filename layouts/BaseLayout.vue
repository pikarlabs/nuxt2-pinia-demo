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

        <div class="card">
          <div class="card-body">
            this is after content
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>
