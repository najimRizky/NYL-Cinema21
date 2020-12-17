<template>
  <div :style="{'background-image': 'url('+ require('../assets/cinema.jpg') +')', 'background-color': 'black', 'background-size' : '100%', 'overflow': 'scrol'}">
    <div style="backdrop-filter: blur(2px)">
      <v-container >
        <v-col cols="12" align="center">
          <h1 style="color:white">Hall of Fame</h1>
        </v-col>
        <v-row>
          <v-col md="4" sm="4" cols="12">
            <h1 style="font-weight: normal; text-align: center; color: white" >Trending</h1>
            <v-carousel v-model="model" height="395px" style="border-radius: 10px" show-arrows-on-hover cycle hide-delimiters>
              <v-carousel-item  v-for="item in dataApi" v-bind:key="item.id" @click="getId(item.id)" style="cursor: pointer">
                <v-sheet height="100%" tile :style="{'background-image': `url(${'https://image.tmdb.org/t/p/original/'+ item.poster_path})`, 'background-position' : 'center' , 'background-size': '100%'}">
                  <v-row class="" justify="center" >
                    <div class="display-1" style="background-color: rgba(0,0,0,0.7); padding: 3px 4px; min-width: 100%; text-align: center; position: absolute; bottom: 0px;" >
                      <span style="font-size: 16px; text-align: center;" >{{item.title}} ({{item.release_date.substring(0,4)}})</span>
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col md="4" sm="4" cols="12">
            <h1 style="font-weight: normal; text-align: center; color: white" >Top Rated</h1>
            <v-carousel v-model="model" height="395px" style="border-radius: 10px" show-arrows-on-hover cycle hide-delimiters>
              <v-carousel-item  v-for="item in dataToprated" v-bind:key="item.id" @click="getId(item.id)" style="cursor: pointer">
                <v-sheet height="100%" tile :style="{'background-image': `url(${'https://image.tmdb.org/t/p/original/'+ item.poster_path})`, 'background-position' : 'center' , 'background-size': '100%'}">
                  <v-row class="" justify="center" >
                    <div class="display-1" style="background-color: rgba(0,0,0,0.7); padding: 3px 4px; min-width: 100%; text-align: center; position: absolute; bottom: 0px;" >
                      <span style="font-size: 16px; text-align: center;" >{{item.title}} ({{item.release_date.substring(0,4)}})</span>
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col md="4" sm="4" cols="12">
            <h1 style="font-weight: normal; text-align: center; color: white" >Upcoming</h1>
            <v-carousel v-model="model" height="395px" style="border-radius: 10px" show-arrows-on-hover cycle hide-delimiters>
              <v-carousel-item  v-for="item in dataUpcoming" v-bind:key="item.id" @click="getId(item.id)" style="cursor: pointer">
                <v-sheet height="100%" tile :style="{'background-image': `url(${'https://image.tmdb.org/t/p/original/'+ item.poster_path})`, 'background-position' : 'center' , 'background-size': '100%'}">
                  <v-row class="" justify="center" >
                    <div class="display-1" style="background-color: rgba(0,0,0,0.7); padding: 3px 4px; min-width: 100%; text-align: center; position: absolute; bottom: 0px;" >
                      <span style="font-size: 16px; text-align: center;" >{{item.title}} ({{item.release_date.substring(0,4)}})</span>
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
  export default {
    data: () => ({
      urlTrending: 'https://api.themoviedb.org/3/trending/movie/week?api_key=d7acd0104a45104a47c1fb7ba1304230',
      urlUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US',
      urlToprated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US',
      dataApi: undefined,
      dataUpcoming: undefined,
      dataToprated: undefined,
    }),
    mounted(){
      Vue.axios.get(this.urlTrending)
      .then((resp) => {
        this.dataApi = resp.data.results
      })
      Vue.axios.get(this.urlToprated)
      .then((resp) => {
        this.dataToprated = resp.data.results
      })
      Vue.axios.get(this.urlUpcoming)
      .then((resp) => {
        this.dataUpcoming = resp.data.results
      })
    },
    methods:{
      getId(value){
        this.$router.push({name: 'Movdetails', params: {id: value}})
      }
    }
  }
</script>

<style scoped>

</style>