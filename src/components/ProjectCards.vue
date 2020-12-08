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
                  min-height="40em"
                  max-height="40em"
                >
                  <a :href="item.url">
                    <v-img :src="item.img" height="30em">
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
                  <v-card-subtitle><strong>{{ item.technologies }}</strong></v-card-subtitle>
                  <v-card-text>{{ item.text }}</v-card-text>
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
import projects from '../../data/project_cards.json';
export default {
  name: 'ProjectCards',
  data() {
    return {
      items: projects
    };
  }
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
