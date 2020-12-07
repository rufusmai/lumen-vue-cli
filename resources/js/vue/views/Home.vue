<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>
      Lumen Version:
      <br>
      <small>(fetched via XHR and vue-dev-proxy from lumen back-end)</small>
    </h3>
    <p>{{ version ? version : 'Loading...' }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      version: null
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    this.axios.get('/version').then(response => {
      this.version = response.data
    }).catch(error => {
      this.version = `Error fetching Lumen version. Did you run 'php artisan serve'? ${error.response ? `"${error.response.data}"` : ''}`
    })
  }
}
</script>
