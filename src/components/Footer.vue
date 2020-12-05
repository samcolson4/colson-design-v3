<template>
  <v-footer padless class="footer">
    <v-row no-gutters>
      <!-- <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        <a :href="link.url">{{ link.title }}</a>
      </v-btn> -->
      <v-col class="blue-grey lighten-3 py-4 text-right white--text" cols="12">
        <span class="f_name"
          ><strong>© Sam Colson</strong> - {{ new Date().getFullYear() }}</span
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'footer',
  data: () => ({
    links: [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'Projects',
        url: '/projects'
      }
    ]
  })
};
</script>

<style scoped>
/* .footer {
  bottom: 0;
  min-width: 100%;
  position: absolute;
} */

.f_name {
  margin-right: 2em;
}
</style>
