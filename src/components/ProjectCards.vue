<template>
  <v-container class="projects_page" align="center">
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
        My work
      </v-flex>
    </v-layout>

    <div>
      <v-template>
        <v-row class="fill-height" align="center" justify="center">
          <div v-for="(item, i) in items" v-bind:key="item" class="card">
            <v-col :key="i">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
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
                    <div class="card_header">
                      <span class="headline black--text">{{ item.title }}</span>
                    </div>
                    <div class="card_text">
                      {{ item.text }}
                    </div>
                  </v-card-title>
                </v-card>
              </v-hover>
            </v-col>
          </div>
        </v-row>
      </v-template>
    </div>
    <br /><br />
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
        img:
          'https://raw.githubusercontent.com/samcolson4/signposts-AR/main/screenshots/Savesign.png',
        url: '/signposts-ar'
      },
      {
        title: 'Acebook',
        text:
          'A popular social media website, cloned. Built using Ruby on Rails.',
        img: 'https://i.imgur.com/xvvEZ1s.png',
        url: '/acebook'
      },
      {
        title: 'Colson Design',
        text: 'This website, built in Vue.JS and Vuetify.',
        img: 'https://i.imgur.com/xvvEZ1s.png',
        url: '/about-colson-design'
      }
    ]
  })
};
</script>

<style scoped>
.projects_page {
  max-width: 90%;
}

.card {
  text-decoration: none;
  max-width: 20em;
  min-width: 10em;
}

a {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

.card_header {
  padding: 3px;
  text-align: center;
}

.card_text {
  word-break: normal;
  font-weight: 300;
  font-size: 80%;
}
</style>
