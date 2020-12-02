<template>
  <div>
    {{info}}
  </div>
</template>

<script>
  export default {
    data: () => ({
      info: null
    }),
    mounted(){
    axios
      .get('https://api.themoviedb.org/3/trending/movie/week?api_key=d7acd0104a45104a47c1fb7ba1304230')
      .then(response => (this.info = response))
    }
  }
</script>

<style scoped>

</style>