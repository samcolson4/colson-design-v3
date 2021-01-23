<template>
  <v-app>
    <div id="content-wrap">
      <app-navigation></app-navigation>
      <v-content transition="slide-x-transition">
        <router-view></router-view>
      </v-content>
    </div>
    <Contact></Contact>
    <Footer id="footer"></Footer>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import Footer from './components/Footer.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
    Footer,
    Contact
  }
};
</script>

<style></style>
