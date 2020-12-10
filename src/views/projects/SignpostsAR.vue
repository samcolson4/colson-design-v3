<template>
  <span>
  <signpostsAR></signpostsAR>
  <project-cards></project-cards>
  </span>
</template>

<script>
import ProjectCards from '../../components/ProjectCards.vue';
import signpostsAR from '../../components/projects/signpostsAR'
export default {
  name: 'SignspostsAr',
  components: {
    ProjectCards,
    signpostsAR
  }
}
</script>

<style scoped></style>
