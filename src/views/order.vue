<template>
  <div class="home">
    <order-header />
    <router-view />
    <order-footer />
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import OrderFooter from './../components/OrderFooter'
// @ is an alias to /src
export default {
  name: 'Order',
  components: {
    OrderHeader,
    OrderFooter
  },
  data () {
    return {
    }
  }
}
</script>
