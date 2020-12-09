<template>
  <v-container>
    <div v-for="project in projects" v-bind:key="project">
      <v-parallax :src="project.par_img" alt="person at laptop">
        <v-container fluid fill-height>
          <v-layout justify-center align-center column pa-5>
            <div
              class="display-1 font-weight-bold white--text text-xs-center"
              :class="project.color"
              style="max-width: 25em; padding: 1em;"
            >
              {{ project.title }}
            </div>
          </v-layout>
        </v-container>
      </v-parallax>
      <v-row class="justify-center">
        <v-column>
          <v-card max-width="30em" class="ma-5">
            <v-card-title> About {{project.title}} </v-card-title>
            <v-card-text>
            {{ project.intro }}
            </v-card-text>
          </v-card>
        </v-column>
        <v-column>
          <v-card class="ma-5">
          <v-img :src="project.logo"></v-img>
          </v-card>
        </v-column>
      </v-row>
      <v-parallax :src="project.par_img" alt="acebook screenshot"></v-parallax>
    </div>
  </v-container>
</template>

<script>
import data from '../../../data/project_data/acebook.json';
export default {
  name: 'AcebookDetail',
  data() {
    return {
      projects: data
    };
  }
};
</script>

<style scoped></style>
