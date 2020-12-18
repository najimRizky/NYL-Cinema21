<template>
    <div>
        <v-container>
            <v-col cols="12" align="center">
                <h2>Filter Search</h2>
                <v-row>
                    <v-col cols="12"  style="margin-bottom: -30px">
                        <v-autocomplete :items="genres" label="Genre 1" outlined v-model="genre1Choose"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" style="margin-bottom: -30px">
                        <v-autocomplete :items="genres" label="Genre 2" outlined v-model="genre2Choose"></v-autocomplete>
                    </v-col>
                    <v-col cols="12"  style="margin-bottom: -30px">
                        <v-text-field label="Year" type="number" min=1900 max=2021 outlined v-model="yearChoose"></v-text-field>
                    </v-col>
                    <v-col cols="12" style="margin-bottom: -30px">
                        <v-autocomplete :items="countriesName" label="Country" outlined v-model="countryChoose"></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                        <v-btn color="yellow darken-3" @click="gotoFilterResults()" width="100%">Search</v-btn>
                    </v-col>
                    <v-col cols="12">
                        <v-alert v-model="alert" dismissible color="red" border="left" elevation="2" colored-border icon="mdi-alert">
                            You must fill at least <strong>1</strong> coloumn!
                        </v-alert>
                    </v-col>
                    <v-col cols="12">
                        <v-alert v-model="alertYear" dismissible color="red" border="left" elevation="2" colored-border icon="mdi-alert">
                            <strong>Year</strong> not Valid!
                        </v-alert>
                    </v-col>
                </v-row>
            </v-col>
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
            genres: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'],
            countries: undefined,
            countriesName: undefined,
            dataGenre: undefined,

            genre1Choose: 'none',
            genre2Choose: 'none',
            yearChoose: null,
            countryChoose: 'none',
            countryId: 'none',
            alert: false,
            alertYear: false,
        }),
        mounted(){
            Vue.axios.get('https://api.themoviedb.org/3/configuration/countries?api_key=d7acd0104a45104a47c1fb7ba1304230')
            .then((resp) => {
                this.countries = resp.data
                this.countriesName = this.countries.map((a) => (a.english_name));
            })
            Vue.axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d7acd0104a45104a47c1fb7ba1304230&language=en-US')
            .then((resp) => {
                this.dataGenre = resp.data.genres;
            })
        },
        methods:{
            gotoFilterResults(){
                if(this.countryChoose != 'none') {
                    for(var i=0; i<this.countries.length; i++){
                        if(this.countryChoose == this.countries[i].english_name){
                            this.countryChoose = this.countries[i].iso_3166_1
                            break;
                        }
                    }
                }
                if(this.genre1Choose != 'none'){
                    for(let i=0; i<this.dataGenre.length; i++){
                        if(this.genre1Choose == this.dataGenre[i].name){
                            this.genre1Choose = this.dataGenre[i].id;
                            break;
                        }
                    }
                }
                if(this.genre2Choose != 'none'){
                    for(let i=0; i<this.dataGenre.length; i++){
                        if(this.genre2Choose == this.dataGenre[i].name){
                            this.genre2Choose = this.dataGenre[i].id;
                            break;
                        }
                    }
                }
                if(this.genre1Choose == 'none' && this.genre2Choose == 'none' && this.yearChoose == null && this.countryChoose == 'none'){
                    this.alert = true;
                }else{
                    if(this.yearChoose != null ){
                        if(this.yearChoose > 2021 || this.yearChoose < 1888){
                            this.alertYear = true;
                        }else{
                            this.$router.push({name: 'Filterresults', params: {genre1: this.genre1Choose, genre2: this.genre2Choose, country: this.countryChoose, year: this.yearChoose, page: 1, sort: 'release_date.desc'}})
                        }
                    }else{
                        this.$router.push({name: 'Filterresults', params: {genre1: this.genre1Choose, genre2: this.genre2Choose, country: this.countryChoose, year: 'none', page: 1, sort: 'release_date.desc'}})
                    }
                    
                }
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>