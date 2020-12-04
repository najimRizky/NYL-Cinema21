<template>
    <div>
        <div :style="{'background-image': `url(${'https://image.tmdb.org/t/p/w500'+ dataMovie.backdrop_path})`, 'background-size' : '100%'}">
            <div :style="{'backdrop-filter': 'blur(10px)', 'background-color': 'rgba(0,0,0,0.4)'}">
                <v-container id="movDetails" >
                    <v-row >
                        <v-col md="5" xs="12">
                            <v-img v-bind:src="'https://image.tmdb.org/t/p/w500'+ dataMovie.poster_path " width="400px"/>    
                        </v-col>
                        <v-col md="6" xs="12" class="ml-3">
                            <v-row>
                                <h1>{{dataMovie.original_title}}</h1> <h1 class="ml-2" style="font-weight: normal">({{dataMovie.release_date.substring(0, 4)}})</h1>
                            </v-row>
                            <v-row class="mb-2">
                                <v-chip class=" ma-1" color="white" label outlined v-for="item in dataMovie.genres" v-bind:key="item.id"><v-icon left> mdi-label</v-icon>{{item.name}}</v-chip>
                            </v-row>
                            <v-row>
                                <span><v-icon color="yellow" class="mb-1">mdi-star-box</v-icon> {{dataMovie.vote_average}}/10 From {{dataMovie.vote_count}} Users </span>
                            </v-row>
                            <v-row>
                                <span><v-icon color="red" class="mb-1" >mdi-map-marker-radius</v-icon> {{dataMovie.production_companies[0].origin_country}}</span>
                            </v-row>
                            <v-row>
                                <p><v-icon color="green" class="mb-1"> mdi-clock-time-three</v-icon> {{dataMovie.runtime}}m</p>
                            </v-row>
                            <v-row>
                                <h3>Release Date</h3>
                            </v-row>
                            <v-row>
                                <p>{{dataMovie.release_date}}</p>
                            </v-row>
                            <v-row>
                                <h3>Overview</h3>
                                <p>{{dataMovie.overview}}</p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
                
            </div>
        </div>
        
        <!--v-container>
            <v-row>
                <v-col cols="2">
                    <v-row>
                        <v-col cols>
                            <span>Genres</span> <v-spacer></v-spacer>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            Release Date 
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="6">
                    <v-row>
                        <v-col>
                            <span v-for="item in dataMovie.genres" v-bind:key="item.id">{{item.name}}, </span> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            {{dataMovie.release_date}}
                        </v-col>    
                    </v-row>
                </v-col>
            </v-row>
        </v-container>  -->      
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
            dataMovie: undefined
        }),
        mounted(){
            this.idMovie = this.$route.params.id;
            this.urlApi = 'https://api.themoviedb.org/3/movie/'+ this.idMovie + '?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US', 
            
            Vue.axios.get(this.urlApi)
            .then((resp) => {
                this.dataMovie = resp.data
                console.log(resp)
                if(this.dataMovie.backdrop_path == null) this.dataMovie.backdrop_path = this.dataMovie.belongs_to_collection.backdrop_path
            })
        }
    }
</script>

<style scoped>
    #movDetails{
        color: white;
    }
</style>