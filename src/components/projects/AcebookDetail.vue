<template>
<v-container>
  <div v-for="project in projects" v-bind:key="project">
    <v-parallax
      class="cv_upper"
      :src="project.par_img"
      alt="acebook screenshot"
    >
      <v-container fluid fill-height>
        <v-layout justify-center align-center column pa-5>
          <div
            class="display-1 font-weight-bold white--text text-xs-center" :class="project.color"
            style="max-width: 25em; padding: 1em;"
          >                {{ project.title }}

          </div>
        </v-layout>
      </v-container>
    </v-parallax>

    {{ project.intro }}


  </div>
  </v-container>
</template>

<script>
import data from '../../../data/project_data/acebook.json'
export default {
  name: 'AcebookDetail',
  data() {
    return {
      projects: data,
    }
  }
}
</script>

<style scoped></style>
