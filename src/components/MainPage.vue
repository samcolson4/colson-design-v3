<template>
  <v-parallax class="main-page" src="https://i.imgur.com/zbDuqun.jpg" alt="underwater">
    <v-container fluid fill-height>
      <v-layout justify-center align-center column pa-5>
        <div
          class="display-1 font-weight-bold blue darken-3 white--text text-xs-center"
          style="max-width: 25em; padding: 1em;"
        >
          I changed careers to become a developer.
        </div>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'MainPage'
};
</script>

<style scoped>
.main-page {
  width: 100%;
  height: 66vh;
}
</style>
