<template>
  <v-app>
    <div id="content-wrap">
      <app-navigation></app-navigation>
      <v-content transition="slide-x-transition">
        <router-view></router-view>
      </v-content>
    </div>
    <Contact></Contact>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
    Contact
  }
};
</script>

<style></style>
