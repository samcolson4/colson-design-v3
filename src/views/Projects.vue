<template>
  <span>
    <projects-macro></projects-macro>
    <project-cards></project-cards>
  </span>
</template>

<script>
import ProjectsMacro from '../components/ProjectsMacro.vue';
import ProjectCards from '../components/ProjectCards2.vue';

export default {
  name: 'Projects',
  components: {
    ProjectsMacro,
    ProjectCards
  }
};
</script>
