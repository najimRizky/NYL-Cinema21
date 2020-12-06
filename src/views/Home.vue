<template>
  <div class="home">
    <TrendingHome/>
    <!--Popular/-->
  </div>
</template>

<script>
import TrendingHome from '@/components/TrendingHome.vue'
//import Popular from '@/components/Popular.vue'

export default {
  name: 'Home',
  components:{
    TrendingHome,
    //Popular
  }
}
</script>
