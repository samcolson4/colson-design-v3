<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
        My work
      </v-flex>
    </v-layout>

    <v-template v-bind:key="item" v-for="(item, i) in items">
      <v-row class="fill-height" align="center" justify="center">
        <v-col :key="i" cols="3" md="4">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <a :href=item.url class="card">
                <v-img :src="item.img" height="500px"> 
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <div class="card_header">
                          <span class="headline white--text">{{
                            item.title
                          }}</span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
              </a>
              <v-card-title primary-title>
                <div>
                  <div class="card_text">
                    {{ item.text }}
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-template>
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
.card {
  text-decoration: none;
}

.card_header {
  background-color: #ff7043;
  padding: 3px;
  text-align: center;
}

.card_image {
  /* border: 1px solid grey */
}

.card .card_image :hover {
  /* box-shadow: 3px 3px; */
}

.card_text {
  word-break: normal;
  font-weight: 300;
  font-size: 80%;
}
</style>
