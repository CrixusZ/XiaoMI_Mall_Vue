<template>
  <div class="home">
    <order-header />
    cart
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
// @ is an alias to /src
export default {
  name: 'Cart',
  components: {
    OrderHeader,
    NavFooter
  },
  data () {
    return {
    }
  }
}
</script>
