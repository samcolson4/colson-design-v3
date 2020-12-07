<template>
  <span>
    <v-app-bar fixed app elevate-on-scroll hide-on-scroll color="white">
      <v-toolbar-side-icon class="hidden-md-and-up"> </v-toolbar-side-icon>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/projects">Projects</v-tab>
        <v-tab to="/cv">CV</v-tab>
      </v-tabs>
            
      <v-toolbar-title>
      <a id="app_title" href="/">{{ appTitle }}</a>
      </v-toolbar-title>
   
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

a {
  text-decoration: none;
  color: black;
}

a:visited {
  text-decoration: none;
  color: black;
}
</style>
