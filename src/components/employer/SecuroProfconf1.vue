<template>
  <section id="profileview">
    <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
                     <b-message type="is-info" has-icon style="max-width: 550px;">
                         <h4>Securo JOBZ invites "Employer name?".</h4>
                        <p>To view profiles selected through Interview </p>
                    </b-message>
                    <div class = "row">
                        <ul class="nav navbar-nav navbar-center"> 
                            <li><RouterLink to="/publish">Opportunities(3)</RouterLink></li>
                            <li><RouterLink to="/profapplied">Profiles(6)</RouterLink></li>
                            <li><RouterLink to="/profconf1">Selected(2)</RouterLink></li>
                            <li><RouterLink to="/profappt">Appointed(1)</RouterLink></li>
                        </ul>
                    </div>
                    <div class = "row">
                        <h4>Profiles Selected</h4>
                    </div>
       
          <div class="row">
            <div class="div-table" id="borderLeft">
              <div class="div-table" style="background-color: seashell;">
                <div class="div-table-row" style="background-color: #ccc;">
                 
                  <div class="div-table-col3A"><b>Oppor.Code</b></div>
                  <div class="div-table-col1A"><b>Designation</b></div>
                   <div class="div-table-col6"><b>Profile.Name</b></div>
                </div>
                <div class="div-table-row" v-for="d in postdata" :key="d.appointment_id">
                    
                    <div class="div-table-col3A">{{ d.oppurtunity_code }}</div>
                    <div class="div-table-col1A">{{ d.oppurtunity_designation }}</div>
                    <div class="div-table-col6">
                      <a @click="viewJd(d)"><span style="color: blueviolet">{{ d.profile_name
                          }}</span></a>
                    </div>
                </div>
              </div>
            </div>
          </div>


        </div>
       
          <div  v-if="visible">
            <h4 style="color: slateblue;">Profile Code - {{ profId }}</h4>
         
        <div class="div-table">
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">Name</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ name }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">Gender</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ gender }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">Qualification</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ qualification }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">D.O.B</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ dob }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">Experience</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ experience }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">Mobile</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ mobile }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">Email</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ email }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">Resume</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ resume }}
            </div>
          </div>
        </div>
        </div>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      disabledFlag: true,
      canApprove: false,
      opCode: "",
      designation: "",
      name: "",
      mobile: "",
      email: "",
      gender: "",
      qualification: "",
      experience: "",
      resume: "",
      dob: "",
      profId: "",
      

      postdata: [
        {
          appointment_id: 1,
          profile_code: 'JS91876345',
          oppurtunity_code: 'AF47834',
         
          oppurtunity_designation: 'Engineer',
          profile_name: 'Nanda Kishore',
          profile_gender: 'Male',
          profile_email: 'nanda@gmail.com',
          profile_mobile: '9898987656',
          profile_education: 'B-tech',
          profile_experience: 'Fresher',
          profile_dob: '12-11-1995',
          profile_resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },

        {
          appointment_id: 2,
          profile_code: 'JS91876355',
          oppurtunity_code: 'AF48623',
          
          oppurtunity_designation: 'Sr Engineer',
          profile_name: 'Spandana',
          profile_gender: 'Female',
          profile_email: 'span@gmail.com',
          profile_mobile: '9898985436',
          profile_education: 'B-tech',
          profile_experience: 'Experiened',
          profile_dob: '11-05-1996',
          profile_resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },

      ],
    }
  },
  methods: {
    viewJd(d) {
      this.visible = true;
      this.disabledFlag = true;
      this.name = d.profile_name;
      this.gender = d.profile_gender;
      this.qualification = d.profile_education;
      this.dob = d.profile_dob;
      this.experience = d.profile_experience;
      this.resume = d.profile_resume;
      this.email = d.profile_email;
      this.mobile = d.profile_mobile;
      this.opCode = d.appointment_oppurtunity_code;
      this.profId=d.profile_code;
    },
    clickMe() {
      this.$buefy.notification.open('Clicked!!')
    }
  }
}
</script>
<style scoped>
.padding8 {
    padding-top: 8px;
}

.flright {
    float: left;
}

.item {
    font-weight: 700;
    display: flex;
}

</style>