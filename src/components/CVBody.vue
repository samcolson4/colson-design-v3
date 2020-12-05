<template>
  <v-container class="cv_page">
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

    <v-row>
      <v-column>

      <div v-for="job in jobs" v-bind:key="job">
          <v-card min-width="500px" max-width="500px" class="job_card" elevation="2" outlined>
          <v-card-title >{{job.title}}</v-card-title>
          <v-card-subtitle class="mx-0">{{job.employer}}</v-card-subtitle>
          <v-card-text><i>{{job.dates}}</i></v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text> • {{job.bullet_one}} </v-card-text>
          <v-card-text> • {{job.bullet_two}} </v-card-text>
          <v-card-text> • {{job.bullet_three}} </v-card-text>
          </v-card>
      </div>
      
      </v-column>
      <v-divider
        vertical class="pa-md-0 mx-10"
      ></v-divider>
      <v-column>
      Skills and that
      </v-column>

      
    </v-row>
    <div class="footer_padding"></div>
  </v-container>
</template>

<script>
export default {
  name: 'CVDetail',
  data: () => ({
  jobs: [
      {
        title: 'Freelancer - Public Affairs',
        dates: 'March 2020 - August 2020',
        bullet_one: 'Text one',
        bullet_two: 'Text two',
        bullet_three: 'Text three'
      },
      {
        title: 'Government Affairs Manager, EMEA',
        employer: 'Hilton',
        dates: 'May 2019 - March 2020',
        bullet_one: 'Text one',
        bullet_two: 'Text two',
        bullet_three: 'Text three'
      },
       {
        title: 'Senior Campaigns Advisor',
        employer: 'CBI',
        dates: 'July 2018 - May 2019',
        bullet_one: 'Text one',
        bullet_two: 'Text two',
        bullet_three: 'Text three'
      },
      {
        title: 'Account Executive',
        employer: 'Grayling',
        dates: 'August 2016 - June 2018',
        bullet_one: 'Text one',
        bullet_two: 'Text two',
        bullet_three: 'Text three'
      },
    ] 
  })
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

.cv_page {
  max-width: 90%;
}

.footer_padding {
  padding-top: 5em;
}

.job_card {
  margin: 10px 10px 10px 10px;
  padding: 10px;
}

</style>
