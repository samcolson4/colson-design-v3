<template>
  <v-container class="cv_page">
    <div class="civ_page_div">
      <v-row justify="center">
        <v-card class="mx-4 pa-4" max-width="70em">
          <v-column>
            <div class="image-cropper">
              <v-img
                src="https://avatars0.githubusercontent.com/u/7012161?s=460&u=3fc808de3a1dda9ca3c758091d1bc8b2d7693ebf&v=4"
                max-height="250"
                max-width="250"
              ></v-img>
            </div>
          </v-column>

          <!-- <v-divider vertical></v-divider> -->

          <v-column>
            <v-card-text
              >I recently completed a three month Makers Bootcamp where I taught
              myself Ruby, JavaScript and Swift by building a range of
              applications and websites. In my previous roles, I always pushed
              myself to learn more and to take ownership in as many areas as
              possible. I want to bring this attitude and my experience from
              Makers to my next role, building an outstanding product with
              clean, well-tested code, whilst continuing to develop my own
              engineering skills.
            </v-card-text>
          </v-column>
        </v-card>
      </v-row>

      <v-row justify="center">
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
              <v-card-title :class="job.textcolor">{{
                job.title
              }}</v-card-title>
              <v-card-subtitle class="mx-0 white--text"
                ><strong>{{ job.employer }}</strong> |
                {{ job.dates }}</v-card-subtitle
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
              <v-card-subtitle :class="era.textcolor"
                ><strong>{{ era.course }} </strong>|
                {{ era.dates }}</v-card-subtitle
              >
              <v-divider class="inner-divider"></v-divider>
              <v-card-text :class="era.textcolor" class="my-0">
                {{ era.bullet_one }}
              </v-card-text>
              <v-card-text :class="era.textcolor" class="my-0">
                {{ era.bullet_two }}
              </v-card-text>
              <v-card-text :class="era.textcolor" class="my-0">
                {{ era.bullet_three }}
              </v-card-text>
            </v-card>
          </div>

          <v-flex class="display-1 text-center my-5">Skills</v-flex>

          <div v-for="skill in skills" v-bind:key="skill">
            <v-card
              min-width="500px"
              max-width="500px"
              class="job_card"
              elevation="6"
              outlined
            >
              <v-card-title class="black--text">{{ skill.title }}</v-card-title>
              <v-card-subtitle>{{ skill.description }}</v-card-subtitle>
            </v-card>
          </div>
        </v-column>
      </v-row>
      <div class="footer_padding"></div>
    </div>
  </v-container>
</template>

<script>
import jobs from '../../data/cv.json';
import education from '../../data/education.json';
import skills from '../../data/skills.json';
export default {
  name: 'CVDetail',
  data() {
    return {
      jobs: jobs,
      education: education,
      skills: skills
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

/* .cv_page_div {
  width: 90%;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
} */

.footer_padding {
  padding-top: 5em;
}

.job_card {
  margin: 15px 15px 15px 15px;
  padding: 10px;
}

.inner-divider {
  border-color: rgba(228, 228, 228, 0.384);
  margin: 4px;
}
</style>
