<template>
  <v-app>
    <div id="content-wrap">
      <app-navigation></app-navigation>
      <v-content transition="slide-x-transition">
        <router-view></router-view>
      </v-content>
    </div>
    <Footer id="footer"></Footer>
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
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
