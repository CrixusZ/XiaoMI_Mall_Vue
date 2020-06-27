/* eslint-disable @typescript-eslint/no-empty-function */
<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from '@/components/NavHeader.vue'
export default {
  name: 'Home',
  components: {
    NavHeader
  },
  data () {
    return {
    }
  }
}
</script>
