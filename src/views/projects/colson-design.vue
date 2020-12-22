<template>
  <span>
    <about-colson-design></about-colson-design>
    <br />
    <hr />
    <project-cards></project-cards>
  </span>
</template>

<script>
import ProjectCards from '../../components/ProjectCards.vue';
import AboutColsonDesign from '../../components/projects/aboutColsonDesign.vue';

export default {
  name: 'About Colson Design',
  components: {
    ProjectCards,
    AboutColsonDesign
  }
};
</script>
