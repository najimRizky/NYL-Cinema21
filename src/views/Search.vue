<template>
    <div>

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
        }),
        mounted(){
            var value = '';
            value = this.$route.params.keyword
            this.searchKeyword = value.replace(" ","%20")
            this.urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US&query='+ this.searchKeyword + '&include_adult=false', 
            Vue.axios.get(this.urlApi)
            .then((resp) => {
                this.dataSearch = resp
                console.log(resp)
            })
        }
    }
</script>

<style scoped>

</style>