<template>
  <span>
    <c-vupper></c-vupper>
    <CV-body></CV-body>
  </span>
</template>

<script>
import CVBody from '../components/CVBody.vue';
import CVupper from '../components/CVupper.vue';

export default {
  name: 'CV',
  components: {
    CVupper,
    CVBody
  }
};
</script>
