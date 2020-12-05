<template>
  <v-footer padless class="footer">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="blue-grey lighten-3 py-4 text-center white--text" cols="12">
        <strong>© Sam Colson</strong> - {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'footer',
  links: [{ Home: '/' }, { Projects: '/projects' }]
};
</script>

<style scoped>
.footer {
  bottom: 0;
  min-width: 100%;
  position: fixed;
}
</style>
