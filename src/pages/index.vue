<template>
  <span>
    <main-page></main-page>
    <main-detail></main-detail>
  </span>
</template>

<script>
import MainPage from '../components/MainPage.vue';
import MainDetail from '../components/MainDetail.vue';
export default {
  name: 'home',
  components: {
    MainPage,
    MainDetail
  }
};
</script>
