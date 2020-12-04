<template>
    <div>
        <h1>Show results for "{{this.value}}" </h1>
        <v-card  class="mx-auto my-6" max-width="800" v-for="item in dataSearch.results" v-bind:key="item.id" elevation="7">
            <v-row >
                <v-col md="3" xs="6" style="padding-top: 0px; padding-bottom: 0px">
                    <v-img style="border-radius: 4px"  v-bind:src="'https://image.tmdb.org/t/p/w500'+ item.poster_path"></v-img>
                </v-col>
                <v-col md="9" xs="6" style="padding-top: 0px">
                    <v-card-title style="font-size: 18px" >{{item.title}} ({{item.release_date.substring(0,4)}})</v-card-title>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="item.vote_average" length="10" color="amber" background-color="grey" dense half-increments readonly size="14"></v-rating>
                            <div class="grey--text ml-1"> {{item.vote_average}} ({{item.vote_count}})</div>
                        </v-row>
                    </v-card-text>
                    <v-row class="ml-3">
                        <v-chip class="ma-1" v-for="genre in item.genre_ids" v-bind:key="genre">{{getGenre(genre)}}</v-chip>
                    </v-row>
                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="gotoDetails(item.id)">See Details</v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
    export default {
        data: () => ({
            urlApi: null,
            searchKeyword: null,
            dataSearch: undefined,
            genreApi: undefined,
            value: ''
        }),
        mounted(){
            this.value = this.$route.params.keyword
            this.searchKeyword = this.value.replace(" ","%20")
            this.urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US&query='+ this.searchKeyword + '&include_adult=false', 
            Vue.axios.get(this.urlApi)
            .then((resp) => {
                this.dataSearch = resp.data
                console.log(this.dataSearch)
            })
            Vue.axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US')
            .then((hasil) => {
                this.genreApi = hasil.data
            })
        },
        methods:{
            getGenre(id2){
                for(var i=0; i<this.genreApi.genres.length; i++){
                    if(this.genreApi.genres[i].id == id2){
                        return this.genreApi.genres[i].name 
                    }
                }
            },
            gotoDetails(value){
                this.$router.push({name: 'Movdetails', params: {id: value}})
            }
        }
    }
</script>

<style scoped>

</style>