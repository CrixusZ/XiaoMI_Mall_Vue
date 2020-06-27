<template>
  <div class="home">
    <nav-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  },
  data () {
    return {
    }
  }
}
</script>
