<template>
  <span>
    <main-page></main-page>
    <main-detail></main-detail>
    <contact></contact>
  </span>
</template>

<script>
import MainPage from '../components/MainPage.vue';
import MainDetail from '../components/MainDetail.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'home',
  components: {
    MainPage,
    MainDetail,
    Contact
  }
};
</script>
