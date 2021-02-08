<template>
  <v-app-bar fixed app elevate-on-scroll color="white">
    <v-tabs fixed-tabs>
      <v-tab to="/">Home</v-tab>
      <v-tab to="/projects">Projects</v-tab>
      <v-tab to="/cv">CV</v-tab>

      <v-tab
        to="/github"
        target="_blank"
        @mouseover="active = true"
        @mouseleave="active = false"
        >GitHub<span v-if="active"
          ><v-img src="../assets/link_arrow.png" max-width="10px"></v-img
        ></span>
        <span v-if="!active"
          ><v-img src="../assets/white_box.png" max-width="10px"></v-img
        ></span>
      </v-tab>
      <v-tab
        to="/linkedin"
        target="_blank"
        @mouseover="l_active = true"
        @mouseleave="l_active = false"
        >LinkedIn<span v-if="l_active"
          ><v-img src="../assets/link_arrow.png" max-width="10px"></v-img></span
        ><span v-if="!l_active"
          ><v-img src="../assets/white_box.png" max-width="10px"></v-img
        ></span>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'Colson Design',
      active: false,
      l_active: false
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
