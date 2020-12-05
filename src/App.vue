<template>
  <v-app>
    <app-navigation></app-navigation>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <br /><br /><br />
    <Footer class="footer"></Footer>
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

<style>
.footer {
  /* margin-top: 10em; */
}
</style>
