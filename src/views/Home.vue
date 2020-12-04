<template>
  <span>
    <main-page></main-page>
    <main-detail></main-detail>
    <!-- <footer></footer> -->
  </span>
</template>

<script>
import MainPage from '../components/MainPage.vue';
import MainDetail from '../components/MainDetail.vue';
// import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    MainPage,
    MainDetail
    // Footer
  }
};
</script>
