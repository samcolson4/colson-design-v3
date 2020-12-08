<template>
  <v-container class="projects_page" align="center">
    <v-layout row>
      <v-flex class="display-2 text-xs-center my-5">My Work</v-flex>
    </v-layout>

    <div>
      <v-template>
        <v-row class="fill-height" id="row" justify="center">
          <div v-for="(item, i) in items" v-bind:key="item">
            <v-col :key="i">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  min-width="15em"
                  max-width="22em"
                  min-height="38em"
                >
                  <a :href="item.url">
                    <v-img :src="item.img" height="500px">
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox> </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                  </a>
                  <v-card-title primary-title>
                      <span class="headline black--text">{{ item.title }}</span>
                  </v-card-title>
                  <v-card-subtitle>{{ item.text }}</v-card-subtitle>

                </v-card>
              </v-hover>
            </v-col>
          </div>
        </v-row>
      </v-template>
    </div>
    <div class="footer_padding"></div>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectCards',
  data: () => ({
    items: [
      {
        title: 'Signposts AR',
        text: 'An iOS app, built using Swift and RealityKit.',
        img: 'https://i.imgur.com/87LgrIq.png',
        url: '/projects/signposts-ar'
      },
      {
        title: 'Acebook',
        text:
          'A popular social media website, cloned. Built using Ruby on Rails.',
        img: 'https://i.imgur.com/m7Lbeyq.png',
        url: '/projects/acebook'
      },
      {
        title: 'Colson Design',
        text: 'My personal website, built in Vue.JS and Vuetify.',
        img: 'https://i.imgur.com/ddqG122.png',
        url: '/projects/about-colson-design'
      }
    ]
  })
};
</script>

<style scoped>
.projects_page {
  max-width: 90%;
}

.footer_padding {
  padding-top: 5em;
  padding-bottom: 5em;
}
</style>
