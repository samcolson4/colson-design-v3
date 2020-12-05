<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
        >My work</v-flex
      >
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">Signposts AR</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Signposts AR</h3>
              <div>
                An iOS app, built using Swift and RealityKit.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <a class="card" href="/acebook">
            <v-img class="card_image" src="https://i.imgur.com/xvvEZ1s.png" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Acebook</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </a>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Acebook</h3>
              <div>
                A popular social media website, cloned. Built using Ruby on Rails.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-img src="http://source.unsplash.com/1SPu0KT-Ejg" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">Colson Design</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Colson Design</h3>
              <div>
                This website, built in Vue.JS.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomePlans'
};
</script>

<style scoped>
.card {
  text-decoration: none;
}

.card_image {
  border: 2px solid black
}

.card .card_image :hover {
  /* box-shadow: 3px 3px; */
}
</style>
