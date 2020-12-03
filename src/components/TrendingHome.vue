<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" align="center">
          <!--h1 style="font-weight: normal">Trending</h1> -->
        </v-col>
      </v-row>
      <v-row >
        <v-col cols="12" align="center" >
          <v-carousel v-model="model" height="470px" width="100px" style="border-radius: 10px" show-arrows-on-hover cycle>
            <v-carousel-item  v-for="item in dataApi.slice(0,19)" v-bind:key="item.id" @click="getId(item.id)" style="cursor: pointer">
              <v-sheet height="100%" tile :style="{'background-image': `url(${'https://image.tmdb.org/t/p/original/'+ item.backdrop_path})`, 'background-position' : 'center' , 'background-size': '100%'}">
                <v-row class="fill-height" align="center" justify="center" >
                  <div class="display-1" style="background-color: rgba(0,0,0,0.6); padding: 3px 4px; min-width:30%; border-radius: 10px" >
                    <span >{{item.title}}</span>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
  export default {
    data: () => ({
      urlApi: 'https://api.themoviedb.org/3/trending/movie/week?api_key=d7acd0104a45104a47c1fb7ba1304230',
      dataApi: undefined,
    }),
    mounted(){
      Vue.axios.get(this.urlApi)
      .then((resp) => {
        this.dataApi = resp.data.results
        //console.log(resp.data.results)  
      })
    },
    methods:{
      getId(value){
        //console.log(value);
        this.$router.push({name: 'Movdetails', params: {id: value}})
        //this.$router.push(`movdetails/${value}`) 
      }
    }
  }
</script>

<style scoped>

</style>