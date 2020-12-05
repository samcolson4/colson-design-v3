<template>
  <span>
    <v-app-bar fixed app color="white">
      <v-toolbar-side-icon class="hidden-md-and-up"> </v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title class="site-title"
        ><a id="app_title" href="/">{{ appTitle }}</a></v-toolbar-title
      >
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down" to="/"> Home </v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/projects"> Projects </v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/cv"> CV </v-btn>

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
      appTitle: 'Colson Design'
    };
  }
};
</script>

<style scoped>
.site-title {
  color: black;
}
a {
  text-decoration: none;
  color: black;
}

a:visited {
  text-decoration: none;
  color: black;
}

#app_title:hover {
  text-shadow: 1px 1px orange;
}
</style>
