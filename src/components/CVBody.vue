<template>
  <v-container class="cv_page">
    <v-row>
      <v-column>
        <div class="image-cropper">
          <v-img
            src="https://avatars0.githubusercontent.com/u/7012161?s=460&u=3fc808de3a1dda9ca3c758091d1bc8b2d7693ebf&v=4"
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
            <v-btn color="black" text @click="reserve">
              Email
            </v-btn>

            <v-btn color="black" text @click="goToGitHub">
              GitHub
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-column>
    </v-row>

    <v-row>
      <v-column>
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
        bullet_one:
          'Utilising my experience working in-house and for a trade association to support the implementation of public affairs strategies across a broad range of sectors.',
        bullet_two:
          'Supporting new business development, including creating pitch decks.',
        bullet_three:
          'During this period, I worked with my previous employer, Grayling.',
        color: '#385F73',
        textcolor: 'white--text'
      },
      {
        title: 'Government Affairs Manager, EMEA',
        employer: 'Hilton',
        dates: 'May 2019 - March 2020',
        bullet_one:
          'Developing EMEA-wide lobbying activity, with a focus on Westminster, the Scottish Government, and the EU.',
        bullet_two:
          'Supporting Hilton executives across EMEA to ensure that policy challenges are communicated with relevant stakeholders.',
        bullet_three:
          'Building coalitions with trade associations in the UK (including London First, the CBI and UKHospitality) and across EMEA.',
        color: 'black',
        textcolor: 'white--text'
      },
      {
        title: 'Senior Campaigns Advisor',
        employer: 'CBI',
        dates: 'July 2018 - May 2019',
        bullet_one:
          'Providing political intelligence and insight both internally within the CBI and externally for the membership.',
        bullet_two:
          'Leading on the development and implementation of an internal stakeholder management database.',
        bullet_three:
          'Acting as the Secretariat for the CBI’s Under 35 Committee. This role includes writing briefings in collaboration with a number of teams, planning events and meetings, and publicising the work of the committee.',
        color: '#2D78C9',
        textcolor: 'white--text'
      },
      {
        title: 'Account Executive',
        employer: 'Grayling',
        dates: 'August 2016 - June 2018',
        bullet_one:
          'Organising engagement programmes and events for a number of companies, including at party conferences.',
        bullet_two:
          'Monitoring both parliament and the media for sector developments on behalf of a number of clients across EMEA.',
        bullet_three:
          "I was the winner alongside two colleagues of the 2017 Grayling 'Creating Advantage' awards, a global internal competition assessing who has best delivered for clients in the business",
        color: '#c8055c',
        textcolor: 'white--text'
      },
      {
        title: 'Parliamentary Assistant',
        employer: 'House of Commons',
        dates: 'TBC',
        bullet_one: '',
        bullet_two: '',
        bullet_three: '',
        color: '#749c63',
        textcolor: 'white--text'
      }
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
  margin: 15px 15px 15px 15px;
  padding: 10px;
  color: white;
}

.inner-divider {
  border-color: rgba(228, 228, 228, 0.384);
  margin: 4px;
}
</style>
