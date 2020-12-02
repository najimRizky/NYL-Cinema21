<template>
  <v-app>
    <v-app-bar  absolute color="#252525" dark>
      <div class="d-flex align-center">
        <h2>NYL Cinema 21</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn text to="/aboutus" >
        <span class="mr-2 mt-1">About Us</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <br>
    </v-app-bar>
    <v-tabs color="black" absolute class="mt-16" background-color="#FACD36">
      <v-tab>Home</v-tab>
      <v-tab>Genre</v-tab>
      <v-tab>Popular</v-tab>
      <v-tab>Country</v-tab>
    </v-tabs>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  
</style>
