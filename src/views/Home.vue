<template>
  <div class="home">
    <TrendingHome/>
    <v-container>
      <hr style="width: 100%; margin-top: 30px; height: 2px; background-color: black">
    </v-container>
    <PopulerHome/>
    <v-container>
      <hr style="width: 100%; margin-top: 30px; height: 2px; background-color: black">
    </v-container>
    <PopularPeople/>
  </div>
</template>

<script>
import TrendingHome from '@/components/TrendingHome.vue'
import PopulerHome from '@/components/PopulerHome.vue'
import PopularPeople from '@/components/PopularPeople.vue'

export default {
  name: 'Home',
  components:{
    TrendingHome,
    PopulerHome,
    PopularPeople
  }
}
</script>
