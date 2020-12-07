<template>
  <div class="home">
    <TrendingHome/>
    <v-divider></v-divider>
    <PopulerHome/>
  </div>
</template>

<script>
import TrendingHome from '@/components/TrendingHome.vue'
import PopulerHome from '@/components/PopulerHome.vue'

export default {
  name: 'Home',
  components:{
    TrendingHome,
    PopulerHome
  }
}
</script>
