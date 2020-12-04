<template>
  <v-container fluid fill-height class="main-page">
    <v-layout justify-center align-center column pa-5>
      <div
        class="display-1 font-weight-bold blue darken-3 white--text text-xs-center"
        style="max-width: 25em; padding: 1em;">
        I changed careers to become a developer because I want to build something new.
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MainPage'
};
</script>

<style scoped>
.main-page {
  background: url('https://i.imgur.com/zbDuqun.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
