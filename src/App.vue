<template>
  <v-app>
    <app-navigation></app-navigation>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <Footer></Footer>

  </v-app>

</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
    Footer
}
};
</script>

<style></style>
