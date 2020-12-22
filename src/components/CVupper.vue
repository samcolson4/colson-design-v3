<template>
  <v-parallax
    class="cv_upper"
    src="https://cdn.pixabay.com/photo/2017/12/01/20/56/tree-tops-2991743_1280.jpg"
    alt="woods"
  >
    <v-container fluid fill-height>
      <v-layout justify-center align-center column pa-5>
        <div
          class="display-1 font-weight-bold green darken-1 white--text text-xs-center"
          style="max-width: 25em; padding: 1em;"
        >
          C.V.
        </div>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'cv_upper'
};
</script>

<style scoped>
.cv-upper {
  height: 66vh;
  width: 100%;
}
</style>
