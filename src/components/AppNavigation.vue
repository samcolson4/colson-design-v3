<template>
    <v-app-bar fixed app elevate-on-scroll hide-on-scroll color="white">      
      
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/projects">Projects</v-tab>
        <v-tab to="/cv">CV</v-tab>
      </v-tabs>
  
      <v-btn flat class="hidden-sm-and-down" to="/github"> GitHub </v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/linkedin"> LinkedIn </v-btn>
    </v-app-bar>
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
