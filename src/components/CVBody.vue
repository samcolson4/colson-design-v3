<template>
  <v-container class="cv_page">
    <v-row>
      <v-column>
        <v-card min-width="40em">
          <div class="image-cropper">
            <v-img
              src="https://avatars0.githubusercontent.com/u/7012161?s=460&u=3fc808de3a1dda9ca3c758091d1bc8b2d7693ebf&v=4"
              max-height="250"
              max-width="250"
            ></v-img>
          </div>

          <v-column class="column_padding"></v-column>

          <v-column>
            <v-card-text
              >Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt, doloremque. Alias culpa, est eum non placeat veniam
              neque rem possimus nihil ratione corrupti suscipit cupiditate
              numquam iusto, aspernatur perferendis iste?
            </v-card-text>
          </v-column>
        </v-card>
      </v-column>
    </v-row>

    <v-row>
      <v-column>
        <v-flex class="display-1 text-center my-5">Experience</v-flex>
        <div v-for="job in jobs" v-bind:key="job">
          <v-card
            min-width="500px"
            max-width="500px"
            class="job_card"
            elevation="6"
            outlined
            :color="job.color"
          >
            <v-card-title>{{ job.title }}</v-card-title>
            <v-card-subtitle class="mx-0 white--text">{{
              job.employer
            }}</v-card-subtitle>
            <v-card-text :class="job.textcolor"
              ><i>{{ job.dates }}</i></v-card-text
            >
            <v-divider class="inner-divider"></v-divider>
            <v-card-text :class="job.textcolor">
              • {{ job.bullet_one }}
            </v-card-text>
            <v-card-text :class="job.textcolor">
              • {{ job.bullet_two }}
            </v-card-text>
            <v-card-text :class="job.textcolor">
              • {{ job.bullet_three }}
            </v-card-text>
          </v-card>
        </div>
      </v-column>

      <v-divider vertical class="pa-md-0 mx-10"></v-divider>

      <v-column>
        <v-flex class="display-1 text-center my-5">Education</v-flex>

        <div v-for="era in education" v-bind:key="era">
          <v-card
            min-width="500px"
            max-width="500px"
            class="job_card"
            elevation="6"
            outlined
            :color="era.color"
          >
            <v-card-title :class="era.textcolor">{{
              era.institution
            }}</v-card-title>
            <v-card-text :class="era.textcolor"
              ><i>{{ era.dates }}</i></v-card-text
            >
            <v-divider class="inner-divider"></v-divider>
            <v-card-text :class="era.textcolor">
              {{ era.bullet_one }}
            </v-card-text>
            <v-card-text :class="era.textcolor">
              {{ era.bullet_two }}
            </v-card-text>
            <v-card-text :class="era.textcolor">
              {{ era.bullet_three }}
            </v-card-text>
          </v-card>
        </div>
      </v-column>
    </v-row>
    <div class="footer_padding"></div>
  </v-container>
</template>

<script>
import jobs from '../../data/cv.json';
import education from '../../data/education.json';
export default {
  name: 'CVDetail',
  data() {
    return {
      jobs: jobs,
      education: education
    };
  }
};
</script>

<style scoped>
.image-cropper {
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  border: 6px solid black;
  border-radius: 50%;
}

.column_padding {
  padding-left: 4%;
}

.cv_page {
  max-width: 90%;
}

.footer_padding {
  padding-top: 5em;
}

.job_card {
  margin: 15px 15px 15px 15px;
  padding: 10px;
  color: white;
}

.inner-divider {
  border-color: rgba(228, 228, 228, 0.384);
  margin: 4px;
}
</style>
