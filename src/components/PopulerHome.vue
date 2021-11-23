<template >
    <div v-if="dataPopular !== undefined">
        <v-container >
            <v-row>
                <v-col cols="12" align="center">
                        <h2>Popular Movies</h2>
                        <v-btn text color="blue" style="float: right" to="/popular/1">Show All>></v-btn>
                </v-col>
                <v-col lg="2" md="3 " sm="4" cols="6" v-for="item in dataPopular.results" v-bind:key="item.id" >
                    <v-card height="440px">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-hover v-slot="{ hover }">
                                    <v-img :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" v-bind="attrs" v-on="on" v-bind:src="getPoster(item.poster_path)" height="320px" @click="gotoDetails(item.id)" style="cursor: pointer"></v-img>
                                </v-hover>
                                
                            </template>
                            <p>{{item.title}}</p>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <span v-bind="attrs" v-on="on" style="position: relative; top: -31px; background: rgba(0,0,0,0.7); color: white; padding: 9px 15px;  margin-bottom: -20px" ><v-icon color="yellow" >mdi-star</v-icon>{{item.vote_average}} </span>
                            </template>
                            <span>Rating</span>
                        </v-tooltip>
                        
                        <v-card-title style="font-size: 14px; width: 100%; padding-top: 0px; cursor: pointer; margin-top: -20px" @click="gotoDetails(item.id)">{{getTitle(item.title)}} </v-card-title>
                        <v-card-subtitle style="font-size: 13px;">
                            {{(item.release_date)}}
                        </v-card-subtitle >
                        <v-divider class="mx-4"></v-divider>
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
            genreApi: undefined,
            dataPopular: undefined,
            urlApi: null,
        }),
        mounted(){
            this.urlApi = 'https://api.themoviedb.org/3/movie/popular?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US&page=1'
            Vue.axios.get(this.urlApi)
            .then((resp) => {
                    this.dataPopular = resp.data
                    console.log(this.dataPopular)
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
            gotoDetails(value){
                this.$router.push({name: 'Movdetails', params: {id: value}})
            },
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