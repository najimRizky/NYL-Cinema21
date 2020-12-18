<template>
    <v-container>
        <v-col cols="12" align="center"><h2>Popular Actor/Actress</h2></v-col>
        <div id="wrapper2">
            <div v-for="item in dataPeople.results" v-bind:key="item.id">
                <v-card width="140px" height="300px" class="mx-3">
                    <v-img  v-bind:src="getPoster(item.profile_path)" height="180px" ></v-img>
                    <p style="font-size: 12px; text-align: left; padding: 5px; margin-bottom: 0px"><b>{{item.name}}</b></p>
                    <ul style="margin-left: -18px; font-size: 10px;">
                        <li style="list-style: none" v-for="item2 in item.known_for" v-bind:key="item2.id">{{item2.title || item2.name}}</li>
                    </ul>
                </v-card>
            </div>
        </div>    
    </v-container>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
    export default {
        data: () => ({
            dataPeople : undefined,
        }),
        mounted(){
            Vue.axios.get('https://api.themoviedb.org/3/person/popular?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US&page=1')
            .then((resp) => {
                this.dataPeople = resp.data
            })
            Vue.axi
        },
        methods: {
            getPoster(val){
                if(val != null) return  'https://image.tmdb.org/t/p/w500'+ val
                else return  require('@/assets/default.jpg')
            },
        }
    }
</script>

<style lang="scss" scoped>
    #wrapper2{
        height: 320px;
        display: flex;
        overflow-x: auto;
        padding: 0px;
        
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