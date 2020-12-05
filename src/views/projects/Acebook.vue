<template>
  <span>
    <acebook-detail></acebook-detail>
    <br />
    <hr />
    <project-cards></project-cards>
  </span>
</template>

<script>
import AcebookDetail from '../../components/projects/AcebookDetail.vue';
import ProjectCards from '../../components/ProjectCards.vue';

export default {
  name: 'Acebook',
  components: {
    ProjectCards,
    AcebookDetail
  }
};
</script>
