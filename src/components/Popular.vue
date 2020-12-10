<template>
    <div>
        <v-container>
            <v-col cols="12" align="center">
                <h2>Popular Movies</h2>
            </v-col>
            <v-row>
                <v-col xs="12" align="center">
                    <v-pagination v-model="pageNow" :length="page_length" v-if="page_length > 1" circle @input="gotoPage(pageNow)"></v-pagination>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid>
            <v-row>
                <v-col lg="2" md="3" sm="4" cols="6" v-for="item in dataPopular.results" v-bind:key="item.id" >
                    <v-card height="580px">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-img  v-bind="attrs" v-on="on" v-bind:src="getPoster(item.poster_path)" height="350px" @click="gotoDetails(item.id)" style="cursor: pointer"></v-img>
                            </template>
                            <span>{{item.title}}</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <span v-bind="attrs" v-on="on" style="position: relative; top: -31px; background: rgba(0,0,0,0.7); color: white; padding: 9px 15px;  margin-bottom: -20px" ><v-icon color="yellow" >mdi-star</v-icon>{{item.vote_average}} </span>
                            </template>
                            <span>Rating</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <span v-bind="attrs" v-on="on" style="position: relative; top: -21.9em; float: right; background: rgba(0,0,0,0.7); color: white; padding: 9px 15px; border-radius: 5px; margin-bottom: -20px"><v-icon color="white" >mdi-chart-line-variant</v-icon>{{item.popularity}} </span>
                            </template>
                            <span>Popularity</span>
                        </v-tooltip>
                        <p style="font-size: 18px;font-weight: 500; width: 100%; padding: 0px 10px; margin-bottom: -5px; margin-top:-10px;cursor: pointer" @click="gotoDetails(item.id)">{{getTitle(item.title)}}</p>
                        <v-card-subtitle v-if="item.release_date!=null">
                            {{item.release_date.substring(0,4)}}
                        </v-card-subtitle>
                        <v-row class="ml-3">
                            <span id="genre"  class="mx-1" v-for="genre in item.genre_ids.slice(0,3)" v-bind:key="genre" @click="gotoGenre(genre)">{{getGenre(genre)}}</span>
                        </v-row>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                            <v-col cols="12" align="center">
                                <v-btn color="yellow darken-3" rounded small dark @click="gotoDetails(item.id)" >See Details</v-btn>
                            </v-col>
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col xs="12" align="center">
                    <v-pagination v-model="pageNow" :length="page_length" v-if="page_length > 1" circle @input="gotoPage(pageNow)"></v-pagination>
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
                    this.page_length = this.dataPopular.total_pages
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
            gotoPage(value){
                this.$router.push({name: 'Popular', params: {page: value}})
                window.location.reload()
            },
            gotoDetails(value){
                this.$router.push({name: 'Movdetails', params: {id: value}})
            },
            gotoGenre(value){
                console.log(this.genreApi)
                for(var i=0; i<this.genreApi.genres.length; i++){
                    if(this.genreApi.genres[i].id == value){
                        value = this.genreApi.genres[i].name
                        break;
                    }
                }
                this.$router.push({name: 'Genres', params: {genre: value, page: 1, sort: 'popularity.desc'}})
            }
        }
    }
</script>

<style scoped>
    #genre{
        color: #9C9C9C;
        cursor: pointer;
    }
    #genre:hover{
        color: black;
    }
</style>