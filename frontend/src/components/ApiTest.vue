<script>
export default {
  data: () => ({
    apiResponse: null
  }),

  created() {
    this.fetchData()
    this.intervalId = setInterval(this.fetchData, 30000);
  },

  methods: {
    async fetchData() {
      const url = 'http://localhost/api'
      this.apiResponse = await (await fetch(url)).json()
    }
  }
}
</script>

<template>
  <div v-if="!apiResponse">
    Pinging the api...
  </div>

  <div v-if="apiResponse">
    The api responded with: <br />
    <code>
    {{ apiResponse }}
    </code>
  </div>
</template>
<style scoped>
div {
  display: none;
}
</style>
