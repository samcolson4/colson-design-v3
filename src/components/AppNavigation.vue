<template>
  <span>
    <v-app-bar fixed app color="white">
      <v-toolbar-side-icon class="hidden-md-and-up"> </v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title class="site-title">{{ appTitle }}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down" to="/"> Home </v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/projects"> Projects </v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down" to="/github"> GitHub </v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/linkedin"> LinkedIn </v-btn>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'Colson Design',
      drawer: false,
      items: [{ title: 'Home' }, { title: 'Projects' }]
    };
  }
};
</script>

<style scoped>
.site-title {
  color: black;
}
</style>
