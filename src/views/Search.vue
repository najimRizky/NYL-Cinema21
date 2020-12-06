<template>
    <div :key="searchVar" style="padding-left: 4px">
        <div v-if="!searchStatus">
            <h2 style="padding: 20px">Nothing found from "{{this.value}}"</h2>
        </div>
        <v-container v-if="searchStatus">
            <h2 style="padding: 20px">Show results for "{{this.value}}"</h2>
            <v-row>
                <v-col xs="12" align="center">
                    <v-pagination v-model="pageNow" :length="page_length" v-if="page_length > 1" circle @input="gotoPage(pageNow)"></v-pagination>
                </v-col>
            </v-row>
        </v-container>
        <div v-if="searchStatus">
            <v-card  class="mx-auto my-6" max-width="620" v-for="item in dataSearch.results" v-bind:key="item.id" elevation="7">
                <v-row >
                    <v-col md="3" xs="6" sm="4" style="padding-top: 0px; padding-bottom: 0px">
                        <v-img style="border-radius: 4px; width: 100%"  v-bind:src="getPoster(item.poster_path)" alt="No photo"></v-img>
                    </v-col>
                    <v-col md="9" xs="6" sm="8" style="padding-top: 0px">
                        <v-card-title style="font-size: 18px" >{{item.title}} {{getYear(item.release_date)}}</v-card-title>
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
        <v-container v-if="searchStatus">
            <v-row>
                <v-col xs="12" align="center">
                    <v-pagination v-model="pageNow"  :length="page_length" v-if="page_length > 1" circle @input="gotoPage(pageNow)"></v-pagination>
                </v-col>
            </v-row>
        </v-container>
        <div v-if="!loadStatus">
            {{finishLoad()}}
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
            urlApi: null,
            searchKeyword: null,
            dataSearch: undefined,
            genreApi: undefined,
            value: '',
            searchStatus: true,
            loadStatus: false,
            page_length: undefined,
            pageNow: null,
            searchVar: 0
        }),
        mounted(){
            this.value = this.$route.params.keyword
            this.pageNow = parseInt(this.$route.params.page)
            this.searchKeyword = this.value.replace(" ","%20")
            this.urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US&query='+ this.searchKeyword + '&page=' + this.pageNow + '&include_adult=false', 
            Vue.axios.get(this.urlApi)
            .then((resp) => {
                this.dataSearch = resp.data
                console.log(this.dataSearch)
                if(this.dataSearch.total_results == 0) this.searchStatus = false;
                this.page_length = this.dataSearch.total_pages
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
            },
            gotoPage(value){
                this.$router.push({name: 'Search', params: {keyword: this.searchKeyword, page: value}})
                //this.searchVar += 1;
                window.location.reload()
            },
            finishLoad(){
                this.loadStatus = true;
            },
            getPoster(val){
                if(val != null) return 'https://image.tmdb.org/t/p/w500'+ val
                else return 'https://picsum.photos/500/750'
            },
            getYear(year){
                if(year != undefined) return '('+year.substring(0,4)+')' 
                else return ''
            }
        }
    }
</script>

<style scoped>

</style>