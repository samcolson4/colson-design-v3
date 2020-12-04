<template>
  <v-footer
    padless
    fixed
  >
    <v-row
      justify="center"
      no-gutters
    >
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
      <v-col
        class="amber lighten-3 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Sam Colson</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'footer'
  };
</script>

<style scoped>
</style>
