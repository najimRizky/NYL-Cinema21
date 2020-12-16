<template>
    <div>
        <v-container>
            <v-col cols="12" align="center">
                <h2>{{keyCountry}} Movies</h2>
                <v-col cols="6">
                    <v-select label="sort-by" :items="sort_by" v-model="selectedSort" @input="gotoSort(selectedSort)"></v-select>
                </v-col>
            </v-col>
            <v-row>
                <v-col xs="12" align="center">
                    <v-pagination v-model="pageNow" :length="pageLength" v-if="pageLength > 1" circle @input="gotoPage(pageNow)"></v-pagination>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid>
            <v-row>
                <v-col lg="2" md="3" sm="4" cols="6" v-for="item in dataUtamaCountry.results" v-bind:key="item.id" >
                    <v-card height="550px">
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
                        <v-row class="ml-3 mr-3">
                            <span id="genre" class="mx-1" v-for="genre in item.genre_ids" v-bind:key="genre" @click="gotoGenre(genre)">({{getGenre(genre)}})</span>
                        </v-row>
                        <v-divider class="mx-4"></v-divider>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col xs="12" align="center">
                    <v-pagination v-model="pageNow" :length="pageLength" v-if="pageLength > 1" circle @input="gotoPage(pageNow)"></v-pagination>
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
        keyCountry: undefined,
        idCountry: undefined,
        dataGenre: undefined,
        dataUtamaCountry: undefined,
        pageLength: undefined,
        pageNow: null,
        sortOption: undefined,
        selectedSort: undefined,
        sort_by: ['popularity.asc', 'popularity.desc',  'release_date.asc', 'release_date.desc', 'vote_average.asc', 'vote_average.desc' ]
    }),
    mounted(){
        this.pageNow = parseInt(this.$route.params.page)
        this.keyCountry = this.$route.params.country;
        this.sortOption = this.$route.params.sort;
        this.selectedSort = this.sortOption;
        switch(this.keyCountry){
            case 'USA' : this.idCountry = "US"
            break;
            case 'South Korea' : this.idCountry = "KR"
            break;
            case 'Thailand' : this.idCountry = "TH"
            break;
            case 'China' : this.idCountry = "CN"
            break;
            case 'Russia' : this.idCountry = "RU"
            break;
            case 'Japan' : this.idCountry = "JP"
            break;
            case 'India' : this.idCountry = "IN"
            break;
        }
        Vue.axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US&region='+this.idCountry+'&sort_by='+this.sortOption+'&include_adult=false&include_video=false&page='+this.pageNow)
            .then((resp) => {
                this.dataUtamaCountry = resp.data;
                this.pageLength = this.dataUtamaCountry.total_pages
                console.log(this.dataUtamaCountry)
            })
        Vue.axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US')
            .then((resp) => {
                this.dataGenre = resp.data.genres;
        })
    },
    methods:{
        getPoster(val){
            if(val!= null) return 'https://image.tmdb.org/t/p/w500'+ val
            else return  require('@/assets/icon.png')
        },
        getTitle(val){
            return val
        },
        getGenre(id2){
            for(var i=0; i<this.dataGenre.length; i++){
                if(this.dataGenre[i].id == id2){
                    return this.dataGenre[i].name
                }
            }
        },
        gotoPage(value){
            this.$router.push({name: 'Countries', params: {page: value}})
            window.location.reload()
        },
        gotoDetails(value){
            this.$router.push({name: 'Movdetails', params: {id: value}})
        },
        gotoGenre(value){
            for(var i=0; i<this.dataGenre.length; i++){
                if(this.dataGenre[i].id == value){
                    value = this.dataGenre[i].name
                    break;
                }
            }
            this.$router.push({name: 'Genres', params: {genre: value, page: 1, sort: 'popularity.desc'}})
            window.location.reload()
        },
        gotoSort(val){
            this.$router.push({name: 'Countries', params: {page: 1, sort: val}})
            window.location.reload()
        }
    }
}
</script>

<style scoped>
    #genre{
        color: #9C9C9C;
        cursor: pointer;
        font-size: 14px;
    }
    #genre:hover{
        color: black;
    }
</style>