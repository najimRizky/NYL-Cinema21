<template>
    <div>
        <div :style="{'background-image': `url(${'https://image.tmdb.org/t/p/w500/'+ dataMovie.backdrop_path})`, 'background-size' : '100%'}">
            <div :style="{'backdrop-filter': 'blur(10px)', 'background-color': 'rgba(0,0,0,0.4)'}">
                <v-container id="movDetails" >
                    <v-row >
                        <v-col cols="4">
                            <v-img v-bind:src="'https://image.tmdb.org/t/p/w500/'+ dataMovie.poster_path" width="400px"/>    
                        </v-col>
                        <v-col>
                            <v-row>
                                <h1>{{dataMovie.original_title}}</h1> <h1 class="ml-2" style="font-weight: normal">({{dataMovie.release_date.substring(0, 4)}})</h1>
                            </v-row>
                            <v-row>
                                
                                <p><v-icon color="white" class="mb-1">mdi-star-box</v-icon> {{dataMovie.vote_average}}/10</p>
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
                console.log(this.dataMovie)      
            })
        }
    }
</script>

<style scoped>
    #movDetails{
        color: white;
    }
</style>