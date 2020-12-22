<template>
  <v-container>
    <div v-for="project in projects" v-bind:key="project">
      <v-parallax :src="project.par_img1" alt="person at laptop">
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
      <v-row class="justify-center" :class="project.bgcolor">
        <v-column>
          <v-card max-width="30em" class="ma-5">
            <v-card-title> About {{ project.title }} </v-card-title>
            <v-card-text> {{ project.intro1 }} </v-card-text>
            <v-card-text> {{ project.intro2 }} </v-card-text>
          </v-card>
        </v-column>
        <v-column>
          <v-card class="ma-5">
            <v-img :src="project.logo"></v-img>
          </v-card>
        </v-column>
      </v-row>
      <v-parallax :src="project.par_img2" alt="acebook screenshot"></v-parallax>

      <v-row class="justify-center" :class="project.bgcolor">
        <v-column>
          <v-card class="ma-5">
            <v-img :src="project.screen1" max-width="20em"></v-img>
          </v-card>
        </v-column>
        <v-column>
          <v-card max-width="30em" class="ma-5">
            <v-card-title> Technologies </v-card-title>
            <v-card-text> {{ project.tech1 }} </v-card-text>
            <v-card-text> {{ project.tech2 }} </v-card-text>
          </v-card>
        </v-column>
      </v-row>

      <v-row class="justify-center" :class="project.bgcolor">
        <v-column>
          <v-card class="ma-5">
            <v-img :src="project.screen2" max-width="20em"></v-img>
          </v-card>
        </v-column>
        <v-column>
          <v-card max-width="30em" class="ma-5">
            <v-card-title> Teamwork </v-card-title>
            <v-card-text> {{ project.team1 }} </v-card-text>
            <v-card-text> {{ project.team2 }} </v-card-text>
          </v-card>
        </v-column>
      </v-row>

      <v-parallax
        :src="project.par_img3"
        alt="acebook github screenshot"
      ></v-parallax>

      <v-row class="justify-center" :class="project.bgcolor">
        <v-column>
          <v-card min-width="30em" max-width="30em" class="ma-5">
            <v-card-title>More Information</v-card-title>
            <v-card-subtitle
              >Follow the links below to learn more about
              {{ project.title }}.</v-card-subtitle
            >
            <v-btn :href="project.gitlink" class="ma-3 white--text" :class="project.color"
              >GitHub</v-btn
            >
            <v-btn :href="project.link2" class="ma-3 white--text" :class="project.color"
              >Live App</v-btn
            >
          </v-card>
        </v-column>
      </v-row>
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
