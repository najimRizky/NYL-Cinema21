<template>
    <div>
        <v-container>
            <v-col cols="12" align="center">
                <h2>Filter Search</h2>
                <v-row>
                    <v-col cols="12"  style="margin-bottom: -30px">
                        <v-select :items="genres" label="Genre 1" outlined></v-select>
                    </v-col>
                    <v-col cols="12" style="margin-bottom: -30px">
                        <v-select :items="items" label="Genre 2" outlined></v-select>
                    </v-col>
                    <v-col cols="12"  style="margin-bottom: -30px">
                        <v-select :items="years" label="Year" outlined></v-select>
                    </v-col>
                    <v-col cols="12" style="margin-bottom: -30px">
                        <v-select :items="countries" label="Country" outlined></v-select>
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
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>