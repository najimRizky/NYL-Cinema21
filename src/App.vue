<template>
  <v-app>
    <v-app-bar absolute color="#252525" dark>
      <div class="d-flex align-center">
        <h2 @click="gotoHome()" style="cursor: pointer">NYL Cinema 21</h2>
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
    <v-tabs color="black"  class="mt-15 " background-color="#FACD36">
      <v-tab to="/">Home</v-tab>
      <v-menu v-if="more.length" bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text class="align-self-center" v-bind="attrs" v-on="on" color="#3E3E3E">
            genre
            <v-icon right>
              mdi-menu-down
            </v-icon>
          </v-btn>
        </template>
        <v-list class="grey lighten-3">
          <v-list-item v-for="item in more" :key="item" @click="addItem(item)">
            {{ item }}
          </v-list-item>
        </v-list>
      </v-menu>
      <v-tab>Popular</v-tab>
      <v-tab>Country</v-tab>
      <v-menu v-if="more.length" bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text class="align-self-center" v-bind="attrs" v-on="on" color="#3E3E3E">
            year
            <v-icon right>
              mdi-menu-down
            </v-icon>
          </v-btn>
        </template>
        <v-list class="grey lighten-3">
          <v-list-item v-for="item in year" :key="item" @click="addItem(item)">
            {{ item }}
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tabs>
    <v-text-field class="expanding-search" placeholder="Search" filled dense color="grey" prepend-inner-icon="mdi-magnify" 
    v-on:keyup.enter="gotoSearch()" v-model="searchKeyword" style="margin-bottom: -25px;"></v-text-field>
    <v-main> 
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    more: ['Action', 'Horror', 'Family', 'Romance', 'Animation','Others..'],
    year: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', 'Others..'],
    searchIndicator: false,
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
      this.$router.push({name: 'Search', params: {keyword: this.searchKeyword}})
      this.searchKeyword= '';
      this.searchIndicator= false;
    }
  }
};
</script>

<style >
  #app{
    background: rgb(255, 255, 255);
  }
  .expanding-search{
    position: absolute;
    top: 40px;
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
</style>
