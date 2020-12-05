<template>
  <v-container>
    <v-row>
      <v-column>
        <div class="image-cropper">
          <v-img src="https://avatars0.githubusercontent.com/u/7012161?s=460&u=3fc808de3a1dda9ca3c758091d1bc8b2d7693ebf&v=4" 
          max-height="250"
          max-width="250"
          ></v-img>
        </div>
      </v-column>

      <v-column class="column_padding"></v-column>

      <v-column>
        <v-card max-width="500px" min-width="500px">
          <v-card-title>Contact</v-card-title>
          <v-card-text>Text here</v-card-text>

          <v-card-actions>
            <v-btn
              color="black"
              text
              @click="reserve"
            >
            Email
            </v-btn>

            <v-btn
              color="black"
              text
              @click="goToGitHub"
              >
              GitHub
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-column>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CVDetail'
};
</script>

<style scoped>
.image-cropper {
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  /* border: 6px solid #43a047; */
  border: 6px solid black;
  border-radius: 50%;
}

.column_padding {
  padding-left: 4%;
}

</style>
