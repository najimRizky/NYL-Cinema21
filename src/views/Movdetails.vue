<template>
    <div>
        <!--div v-if="dataMovie.backdrop_path == null || dataMovie.poster_path == null" :style="{'background-image': `url(${'https://picsum.photos/1280/720'})`, 'background-size' : '100%' }">                   
            <div :style="{'backdrop-filter': 'blur(10px)', 'background-color': 'rgba(0,0,0,0.4)'}">
                <v-container id="movDetails" >
                    <v-row >
                        <v-col md="5" xs="12">
                            <v-img v-bind:src="getPoster(dataMovie.poster_path)" width="400px" />    
                        </v-col>
                        <v-col md="6" xs="12" class="ml-3">
                            <v-row>
                                <h2>{{dataMovie.title}}</h2> <h2 v-if="dataMovie.release_date != null" class="ml-2" style="font-weight: normal">({{dataMovie.release_date.substring(0, 4)}})</h2>
                            </v-row>
                            <v-row class="mb-2" v-if="dataMovie.genres != null">
                                <v-chip class=" ma-1" color="white" label outlined v-for="item in dataMovie.genres" v-bind:key="item.id" @click="gotoGenre(item.name)"><v-icon left> mdi-label</v-icon>{{item.name}}</v-chip>
                            </v-row>
                            <v-row v-if="dataMovie.vote_average != null">
                                <span><v-icon color="yellow" class="mb-1">mdi-star-box</v-icon> {{dataMovie.vote_average}}/10 From {{dataMovie.vote_count}} Users </span>
                            </v-row>
                            <v-row v-if="dataMovie.production_companies != ''">
                                <span><v-icon color="red" class="mb-1" >mdi-map-marker-radius</v-icon> {{dataMovie.production_companies[0].origin_country}}</span>
                            </v-row>
                            <v-row v-if="dataMovie.runtime != null">
                                <p><v-icon color="green" class="mb-1"> mdi-clock-time-three</v-icon> {{dataMovie.runtime}}m</p>
                            </v-row>
                            <v-row v-if="dataMovie.release_date != null">
                                <h3>Release Date</h3>
                            </v-row>
                            <v-row v-if="dataMovie.release_date != null">
                                <p>{{dataMovie.release_date}}</p>
                            </v-row>
                            <v-row v-if="dataMovie.overview != null">
                                <h3>Overview</h3>
                                <p>{{dataMovie.overview}}</p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div-->

        <div :style="{'background-image': getBackdrop(dataMovie.backdrop_path), 'background-size' : '100%' }">                   
            <div :style="{'backdrop-filter': 'blur(10px)', 'background-color': 'rgba(0,0,0,0.4)'}">
                <v-container id="movDetails" >
                    <v-row >
                        <v-col md="5" xs="12">
                            <v-img v-bind:src="getPoster(dataMovie.poster_path)" />    
                        </v-col>
                        <v-col md="6" xs="12" class="ml-3">
                            <v-row>
                                <h2>{{dataMovie.title}}</h2> <h2 class="ml-2" style="font-weight: normal">({{dataMovie.release_date.substring(0, 4)}})</h2>
                            </v-row>
                            <v-row class="mb-2" v-if="dataMovie.genres != null">
                                <v-chip class=" ma-1" color="white" label outlined v-for="item in dataMovie.genres" v-bind:key="item.id" @click="gotoGenre(item.name)"><v-icon left> mdi-label</v-icon>{{item.name}}</v-chip>
                            </v-row>
                            <v-row v-if="dataMovie.vote_average != null">
                                <span><v-icon color="yellow" class="mb-1">mdi-star-box</v-icon> {{dataMovie.vote_average}}/10 From {{dataMovie.vote_count}} Users </span>
                            </v-row>
                            <v-row v-if="dataMovie.production_companies != ''">
                                <span><v-icon color="red" class="mb-1" >mdi-map-marker-radius</v-icon> {{dataMovie.production_companies[0].origin_country}}</span>
                            </v-row>
                            <v-row v-if="dataMovie.runtime != null">
                                <p><v-icon color="green" class="mb-1"> mdi-clock-time-three</v-icon> {{dataMovie.runtime}}m</p>
                            </v-row>
                            <v-row v-if="dataMovie.release_date != null">
                                <h3>Release Date</h3>
                            </v-row>
                            <v-row v-if="dataMovie.release_date != null">
                                <p>{{dataMovie.release_date}}</p>
                            </v-row>
                            <v-row v-if="dataMovie.overview != null">
                                <h3>Overview</h3>
                                <p>{{dataMovie.overview}}</p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
                
            </div>
        </div>
        <div style="padding: 20px" v-if="dataSimilar.total_results!=0">
            <v-divider></v-divider>
            <v-col cols="12" align="center"><h2>Similar Movies</h2></v-col>
            <div id="wrapper">
                <div v-for="item in dataSimilar.results" v-bind:key="item.id">
                    <v-card width="140px" height="280px" class="mx-3" @click="gotoDetails(item.id)">
                        <v-img v-bind="attrs" v-on="on" v-bind:src="getPoster(item.poster_path)" height="210px"  style="cursor: pointer"></v-img>
                        <span v-bind="attrs" v-on="on" style="position: relative; top: -24px;font-size: 10px; background: rgba(0,0,0,0.7); color: white; padding: 4px 10px;  margin-bottom: -20px" ><v-icon color="yellow" style="font-size: 12px;">mdi-star</v-icon>{{item.vote_average}} </span>
                        <p style="font-size: 12px; text-align: left; padding: 5px; padding-top: 0px;padding-bottom:0px; margin-top: -20px; margin-bottom: 0px"><b>{{item.title}}</b></p>
                        <p style="color: gray; font-size: 10px; padding: 5px; padding-top: 0px">{{item.release_date}}</p>
                    </v-card>
                </div>
            </div>    
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
            idMovie: null,
            urlApi: null,
            urlSimilar: null,
            dataMovie: undefined,
            poster: true,
            backdrop: true,
            dataSimilar: undefined,
        }),
        mounted(){
            this.idMovie = this.$route.params.id;
            this.urlApi = 'https://api.themoviedb.org/3/movie/'+ this.idMovie + '?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US',             
            Vue.axios.get(this.urlApi)
            .then((resp) => {
                this.dataMovie = resp.data
                if(this.dataMovie.backdrop_path == null && this.dataMovie.belongs_to_collection)  {
                    this.dataMovie.backdrop_path = this.dataMovie.belongs_to_collection.backdrop_path
                }
            })
            
            this.urlSimilar = 'https://api.themoviedb.org/3/movie/' + this.idMovie + '/similar?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US'
            Vue.axios.get(this.urlSimilar)
            .then((resp) => {
                this.dataSimilar = resp.data
                console.log(this.dataSimilar, this.urlSimilar)
            })
        },
        methods:{
            getPoster(val){
                if(val != null) return  'https://image.tmdb.org/t/p/w500'+ val
                else return  require('@/assets/default.jpg')
            },
            getBackdrop(val){
                if(val != null) return `url(${'https://image.tmdb.org/t/p/w500'+ val})`
                else return `url(${require('@/assets/defaultBackdrop.jpg')})`
                //require('@/assets/defaultBackdrop.jpg')
                
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
                window.location.reload()
            },
            gotoGenre(value){
            this.$router.push({name: 'Genres', params: {genre: value, page: 1, sort: 'popularity.desc'}})
            //window.location.reload()
            },
        }
    }
</script>

<style scoped>
    #movDetails{
        color: white;
    }
    #wrapper{
        height: 320px;
        display: flex;
        overflow-x: auto;
    }
    #item{
        min-width: 410px;
        border: 1px solid black;
        line-height: 110px;
        height: 110px;
        text-align: center;
        background-color: #ddd;
    }
</style>