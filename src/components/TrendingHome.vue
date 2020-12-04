<template>
  <div>
    <v-container>
      <v-row >
        <v-col cols="12" align="center">
          <h1 style="font-weight: normal"> Trending Now!</h1>
          <v-col cols="9">
            <v-carousel v-model="model" height="330px" width="100px" style="border-radius: 10px" show-arrows-on-hover cycle hide-delimiters>
              <v-carousel-item  v-for="item in dataApi" v-bind:key="item.id" @click="getId(item.id)" style="cursor: pointer">
                <v-sheet height="100%" tile :style="{'background-image': `url(${'https://image.tmdb.org/t/p/original/'+ item.backdrop_path})`, 'background-position' : 'center' , 'background-size': '100%'}">
                  <v-row class="" justify="center" >
                    <div class="display-1" style="background-color: rgba(0,0,0,0.7); padding: 3px 4px; min-width: 100%; position: absolute; bottom: 0px;" >
                      <span >{{item.title}} ({{item.release_date.substring(0,4)}})</span>
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
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