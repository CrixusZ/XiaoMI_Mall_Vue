<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import jsonp from 'jsonp'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      age: 30,
      data: {}
    }
  },
  mounted () {
    const url = '/?c=be'
    axios.get(url).then(res => {
      console.log(res)
    })
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jsonp(url, (res) => {
      console.log(res)
      this.data = res
    })
  }
}
</script>
