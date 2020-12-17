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
                        <v-autocomplete :items="years" label="Year" outlined v-model="yearChoose"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" style="margin-bottom: -30px">
                        <v-autocomplete :items="countries" label="Country" outlined v-model="countryChoose"></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                        <v-btn color="primary" width="100%">Search</v-btn>
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
            years: undefined,
            countries: undefined,
            genre1Choose: null,
            genre2Choose: null,
            yearChoose: null,
            countryChoose: null
        }),
        mounted(){
            console.log(this.genres.length)
        }
    }
</script>

<style lang="scss" scoped>

</style>