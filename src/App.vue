<template>
  <v-app>
    <div>
      <v-app-bar absolute color="#252525" dark>
        <div class="d-flex align-center">
          <h2 @click="gotoHome()" id="webTitle" style="cursor: pointer">NYL Cinema 21</h2>
        </div>
        <v-spacer></v-spacer>
        <v-btn text @click="openSearch()">
          <v-icon class="mt-1" >mdi-magnify</v-icon>
        </v-btn>
        <v-btn text to="/about" >
          <span class="mt-1 ">About Us </span>
          <v-icon>mdi-account-group</v-icon>
        </v-btn>
        <br>
      </v-app-bar>
      <v-tabs color="black"  class="mt-15 " background-color="orange">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/popular/1">Popular</v-tab>
        <v-tab to="/filtersearch">Filter Search</v-tab>
        <v-menu v-if="genre.length" bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="align-self-center" v-bind="attrs" v-on="on" color="black">
              genre
              <v-icon right>
                mdi-menu-down
              </v-icon>
            </v-btn>
          </template>
          <v-list class="grey lighten-3">
            <v-list-item v-for="item in genre" :key="item" @click="gotoGenre(item)">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu v-if="country.length" bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="align-self-center" v-bind="attrs" v-on="on" color="black">
              country
              <v-icon right>
                mdi-menu-down
              </v-icon>
            </v-btn>
          </template>
          <v-list class="grey lighten-3">
            <v-list-item v-for="item in country" :key="item" @click="gotoCountry(item)">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu v-if="year.length" bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="align-self-center" v-bind="attrs" v-on="on" color="black">
              year
              <v-icon right>
                mdi-menu-down
              </v-icon>
            </v-btn>
          </template>
          <v-list class="grey lighten-3">
            <v-list-item v-for="item in year" :key="item" @click="gotoYear(item)">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
      <v-text-field class="expanding-search" placeholder="Search... (Press Enter to Search)" v-if="searchIndicator" filled dense color="grey" prepend-inner-icon="mdi-magnify" 
      v-on:keyup.enter="gotoSearch()" v-model="searchKeyword" style="margin-bottom: -25px;"></v-text-field>
        <v-alert v-model="alert"  color="red" border="left" elevation="2" colored-border icon="mdi-alert" >
            Keyword is empty!
        </v-alert>
    </div>
    <v-main> 
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components:{
    Footer
  },
  data: () => ({
    genre: ['Action', 'Horror', 'Family', 'Romance', 'Animation','Comedy','Others'],
    year: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', 'Others'],
    country: ['USA', 'Thailand', 'China', 'Russia', 'Japan', 'India', 'Others'],
    searchIndicator: false,
    alert: false,
    searchKeyword: '',
  }),
  methods:{
    gotoHome(){
      this.$router.push('/')
    },
    addItem (item) {
      const removed = this.items.splice(0, 1)
      this.items.push(
        ...this.more.splice(this.more.indexOf(item), 1),
      )
      this.more.push(...removed)
      this.$nextTick(() => { this.currentItem = 'tab-' + item })
    },
    openSearch(){
      for(var i=0; i<1; i++){
        if(this.searchIndicator == true) this.searchIndicator = false;
        else this.searchIndicator = true
      }
    },
    gotoSearch(){
      if(this.searchKeyword == ''){
        this.alert=true;
        setTimeout(() => { this.alert = false  }, 3000)
        console.log('sini')
      }else{
        if(this.$route.name == 'Search'){
          this.$router.push({name: 'Search', params: {keyword: this.searchKeyword, page: 1}})
          window.location.reload()
        }else{
          this.$router.push({name: 'Search', params: {keyword: this.searchKeyword, page: 1}})
        }
        this.searchKeyword= '';
        this.searchIndicator= false;
      }
    },
    gotoYear(val){
      if(val == 'Others') this.$router.push('/filtersearch')
      else{
        if(this.$route.name == 'Years'){
          this.$router.push({name: 'Years', params: {year: val, page: 1, sort: 'popularity.desc'}})
          window.location.reload()
        }
        else this.$router.push({name: 'Years', params: {year: val, page: 1, sort: 'popularity.desc'}})
      }
    },
    gotoGenre(val){
      if(val == 'Others') this.$router.push('/filtersearch')
      else{
        if(this.$route.name == 'Genres'){
          this.$router.push({name: 'Genres', params: {genre: val, page: 1, sort: 'popularity.desc'}})
          window.location.reload()
        }
        else this.$router.push({name: 'Genres', params: {genre: val, page: 1, sort: 'popularity.desc'}})
      } 
    },
    gotoCountry(val){
      if(val == 'Others') this.$router.push('/filtersearch')
      else{
        if(this.$route.name == 'Countries'){
          this.$router.push({name: 'Countries', params: {country: val, page: 1, sort: 'release_date.desc'}})
          window.location.reload()
        }
        else this.$router.push({name: 'Countries', params: {country: val, page: 1, sort: 'release_date.desc'}})
      } 
        
    }
  }
};
</script>

<style >
  #app{
    background: rgb(255, 255, 255);
  }
  .expanding-search{
    width: 100%;
    transition: 0.3s;
    /*animation: dropdown 0.2s;*/
  }
  @keyframes dropdown{
    0%{
      top: -100px;
    }
    100%{
      top: 0px;
    } 
  }
  @media only screen and (max-width: 400px) {
  #webTitle {
    font-size: 18px;
  }
}
</style>
