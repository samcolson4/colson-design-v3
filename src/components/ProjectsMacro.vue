<template>
  <v-container fluid fill-height class="projects-page">
    <v-layout justify-center align-center column pa-5>
      <div
        class="display-1 font-weight-bold deep-orange lighten-1 white--text text-xs-center"
        style="max-width: 25em; padding: 1em;"
      >
        I want to build things that matter.
      </div>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'ProjectsMacro'
};
</script>

<style scoped>
.projects-page {
  background: url('https://i.imgur.com/oBMBsul.jpg');
  background-size: cover;
  width: 100%;
  height: 66%;
}
</style>
