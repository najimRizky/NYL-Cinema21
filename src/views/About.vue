<template>
  <div>
    <v-container fluid>
      <v-col cols="12" align="center" style="padding-bottom: 0px">
        <h1>About Us</h1>
      </v-col>
      <v-layout row wrap justify-center>
        <v-col class="about" md="4" sm="6" cols="12">
        <v-card height="630" :loading="loading" class="mx-4 my-12" >
        <v-img  height="250"  src="@/assets/yuan.jpg"></v-img>
        <v-card-text>
        <div> Name : Yuan Felix Iskandar </div>
        <div> Date of Birth : 23 April 2001 </div>
        <div> Age  : 19  </div>
        <div> NIM  : 00000037867 </div>
        <div> Email : <u>yuan.felix@student.umn.ac.id</u></div>
        <div> <v-col cols="12" align="center">
            Motto: <br>
          "lorem ipsum dolor si amet,consectetur adipiscing elit. Maecenas ornare convallis consectetur. 
          Nulla id quam fermentum, suscipit est in, posuere enim"</v-col></div>
        </v-card-text>

        <v-card-actions>
          <v-col cols="12" align="center">
          <a href="https://github.com/yuannfelixx" target="blank">
            <v-btn class="mx-2" fab dark small color="black" >    
              <v-icon dark >
                mdi-github
              </v-icon>
            </v-btn>
          </a>
          <a href="https://www.instagram.com/yuannfelixx/" target="blank">
            <v-btn class="mx-2" fab dark small color="pink">    
              <v-icon dark>
                mdi-instagram
              </v-icon>
            </v-btn>
          </a>
          <a href="https://twitter.com/yuannfelixx" target="blank">
            <v-btn class="mx-2" fab dark small color="blue">    
              <v-icon dark>
                mdi-twitter
              </v-icon>
            </v-btn>
          </a>
          <a href="https://www.linkedin.com/in/yuan-felix-769068202/" target="blank">
            <v-btn class="mx-2" fab dark small color="#001257">    
              <v-icon dark>
                mdi-linkedin
              </v-icon>
            </v-btn>
          </a>
          </v-col>
        </v-card-actions>
      </v-card>
      </v-col>

      <v-col class="about" md="4" sm="6" cols="12">
        <v-card  height="630"  :loading="loading"  class="mx-4 my-12" >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img  height="250"  src="@/assets/najim.jpg"></v-img>

        <v-card-text>
        <div> Name : Najim Rizky </div>
        <div> Date of Birth : 16 Januari 2001 </div>
        <div> Age  : 19  </div>
        <div> NIM  : 00000040113 </div>
        <div> Email : <u>najim.rizky@student.umn.ac.id</u></div>
        <div> <v-col cols="12" align="center">
            Motto: <br>
          "If you can’t fly, then run. If you can’t run, then walk. If you can’t walk then crawl. But whatever you do you have to keep moving forward."</v-col></div>
        </v-card-text>

        <v-card-actions >
          <v-col cols="12" align="center">
          <a href="https://github.com/najimRizky" target="blank">
            <v-btn class="mx-2" fab dark small color="black">    
              <v-icon dark>
                mdi-github
              </v-icon>
            </v-btn>
          </a>
          <a href="https://www.instagram.com/najim_80/" target="blank">
            <v-btn class="mx-2" fab dark small color="pink">    
              <v-icon dark>
                mdi-instagram
              </v-icon>
            </v-btn>
          </a>
          <a href="https://twitter.com/erSySz" target="blank">
            <v-btn class="mx-2" fab dark small color="blue">    
              <v-icon dark>
                mdi-twitter
              </v-icon>
            </v-btn>
          </a>
          <a href="https://www.linkedin.com/in/najim-rizky" target="blank">
            <v-btn class="mx-2" fab dark small color="#001257">    
              <v-icon dark>
                mdi-linkedin
              </v-icon>
            </v-btn>
          </a>
          </v-col>
        </v-card-actions>
      </v-card>
      </v-col>


      <v-col class="about" md="4" sm="6" cols="12">
        <v-card height="630"  :loading="loading"  class="mx-4 my-12" >
        <template slot="progress">
          <v-progress-linear  color="deep-purple"  height="10"  indeterminate></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="@/assets/laras.jpg"
        ></v-img>

        <v-card-text>
        <div> Name : Laras Wulandari </div>
        <div> Date of Birth : 10 Desember 2000 </div>
        <div> Age  : 20  </div>
        <div> NIM  : 00000040107 </div>
        <div> Email : <u>laras.wulandari@student.umn.ac.id</u></div>
        <div> <v-col cols="12" align="center">
            Motto: <br>
          "Hidup ini penuh kesempatan, 
          ambil kesempatan itu saat kau diberikan, jangan menyia-nyiakan karena kita tidak tahu apakah kita akan mendapatkannya lagi"</v-col></div>
        </v-card-text>

        <v-card-actions >
          <v-col cols="12" align="center">
          <a href="https://github.com/agfaningrum" target="blank">
            <v-btn class="mx-2" fab dark small color="black">    
              <v-icon dark>
                mdi-github
              </v-icon>
            </v-btn>
          </a>
          <a href="https://www.instagram.com/agfawulan/" target="blank">
            <v-btn class="mx-2" fab dark small color="pink">    
              <v-icon dark>
                mdi-instagram
              </v-icon>
            </v-btn>
          </a>
          <a href="https://twitter.com/larasgmail" target="blank">
            <v-btn class="mx-2" fab dark small color="blue">    
              <v-icon dark>
                mdi-twitter
              </v-icon>
            </v-btn>
          </a>
          <!--a href="" target="blank">
            <v-btn class="mx-2" fab dark small color="black">    
              <v-icon dark>
                mdi-linkedin
              </v-icon>
            </v-btn>
          </a-->
          </v-col>
        </v-card-actions>
      </v-card>
      </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
  a{
    text-decoration: none;
  }
</style>
