<template>
  <pre>{{ JSON.stringify(page, null, 2) }}</pre>
</template>

<script>
import { defineComponent, ref, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'page',
  setup () {
    const store = useStore()
    const pageData = ref(store.state.pageData)
    return { page: pageData }
  }
})
</script>

<style lang="scss">

</style>
