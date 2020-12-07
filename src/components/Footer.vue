<template>
  <v-footer padless class="footer">
    <v-row no-gutters>
      <v-col class="blue-grey lighten-3 py-4 white--text" cols="12">
        <span class="site_title text-left"><strong>Colson Design </strong>| </span>
        <span class="f_name text-right">
          © Sam Colson - {{ new Date().getFullYear() }}
        </span>
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

.f_name {
  margin-right: 2em;
}

.site_title {
  margin-left: 2em;
}
</style>
