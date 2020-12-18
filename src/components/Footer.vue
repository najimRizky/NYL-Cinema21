<template>
    <div>
        <v-footer color="black" dark >
            <v-row>
                <v-col cols="12" align="center">
                    <v-btn text to="/about" >
                        <span class="mt-1 ">About Us </span>
                        <v-icon>mdi-account-group</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-card-text align="center">
                Website ini merupakan website yang dibuat untuk memenuhi nilai Ujian Akhir Semester semester 3 tahun 2020 di Universitas Multimedia Nusantara pada mata kuliah Pengantar Teknologi Internet. 
                Adapun framework yang digunakan untuk mengembangkan website ini adalah dengan Vue JS.
                Seluruh data yang ada pada website ini berasal dari API movieDB. Silahkan kunjungi laman movieDB jika ingin menggunakan API tersebut.
            </v-card-text>
            <v-col cols="12">
                <hr style="background-color: white; height: 0.1px; border: none">
            </v-col>
            <v-row>
                <v-col cols="12" align='center'>
                    <h4 style="color: white">Copyright ©2020 NYL Cinema21</h4>
                </v-col>
            </v-row>
            
        </v-footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>