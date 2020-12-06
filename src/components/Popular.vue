<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col lg="2" md="3" sm="4" cols="6" v-for="item in dataPopular.results" v-bind:key="item.id" >
                    <v-card height="580px">
                        <v-img v-bind:src="getPoster(item.poster_path)" height="350px" ></v-img>
                        <v-card-title style="font-size: 18px">{{getTitle(item.title)}}</v-card-title>
                        <v-card-subtitle>
                            {{item.release_date.substring(0,4)}}
                        </v-card-subtitle>
                        <v-row class="ml-3">|
                            <span style="color: blue" class="mx-1" v-for="genre in item.genre_ids" v-bind:key="genre">{{getGenre(genre)}}</span>|
                        </v-row>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                            <v-col cols="12" align="center">
                                <v-btn color="red darken-2" rounded dark>See Details</v-btn>
                            </v-col>
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
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
            pageNow: null,
            genreApi: undefined,
            dataPopular: undefined,
            urlApi: null,
            page_length: null,
        }),
        mounted(){
            this.pageNow = parseInt(this.$route.params.page)
            this.urlApi = 'https://api.themoviedb.org/3/movie/popular?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US&page='+ this.pageNow; 
            Vue.axios.get(this.urlApi)
            .then((resp) => {
                    this.dataPopular = resp.data
                    console.log(this.dataPopular)
                    this.page_length = this.dataSearch.total_pages
                })
            Vue.axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US')
            .then((hasil) => {
                this.genreApi = hasil.data
            })
        },
        methods:{
            getPoster(val){
                return 'https://image.tmdb.org/t/p/w500'+ val
            },
            getTitle(val){
                return val
            },
            getGenre(id2){
                for(var i=0; i<this.genreApi.genres.length; i++){
                    if(this.genreApi.genres[i].id == id2){
                        return this.genreApi.genres[i].name 
                    }
                }
            },
        }
    }
</script>

<style scoped>

</style>