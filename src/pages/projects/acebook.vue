<template>
  <span>
    <acebook-detail></acebook-detail>
    <project-cards></project-cards>
  </span>
</template>

<script>
import AcebookDetail from '../../components/AcebookDetail.vue';
import ProjectCards from '../../components/ProjectCards.vue';
export default {
  name: 'Acebook',
  components: {
    ProjectCards,
    AcebookDetail
  }
};
</script>

<style scoped></style>
