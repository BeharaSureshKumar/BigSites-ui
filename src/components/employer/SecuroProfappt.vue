<template>
  <section id="profileview">
    <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
           <b-message type="is-info" has-icon>
              <h4>Securo JOBZ invites "Employer name?".</h4>
                  <p>Appointed list of profiles for the Opportunities interviewed</p>
          </b-message>
                  
          <div class = "row">
              <h4>Profiles Appointed</h4>
          </div>
          
          <div class="row">
            <div class="div-table" id="borderLeft">
                <div class="div-table" style="background-color: seashell;">
                  <div class="div-table-row" style="background-color: #ccc;">
                  <div class="div-table-col3A"><b>Oppor.Code</b></div>  
                  <div class="div-table-col1A"><b>Designation</b></div>
                  <div class="div-table-col6"><b>Profile Name</b></div>
               
                </div>
                <div class="div-table-row" v-for="d in postdata" :key="d.appointment_id">
                  
                  <div class="div-table-col3A">{{ d.oppurtunity_code }}</div>
                  <div class="div-table-col1A">{{ d.oppurtunity_designation }}</div>
                  <div class="div-table-col6">
                    <a @click="viewJd(d)"><span style="color: blueviolet">{{ d.profile_name }}</span></a>
                  </div>
                  
                </div>
            </div>
            </div>
          </div>
        </div>
        
        <div v-if="visible">
            <h4 style="color: slateblue;">Profile Code - {{ profId }}</h4>
          
        <div class="div-table" >
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
              <b-label class="flright item">Address</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ addr }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">District</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ dist }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">State</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ state }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">Pincode</b-label>
            </div>
            <div class="col-md-1 col-sm-1">
              <b-label class="flright item">:</b-label>
            </div>
            <div class="col-md-7 col-sm-7">
              {{ pin }}
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4">
              <b-label class="flright item">Email ID</b-label>
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
      gender: "",
      mobile: "",
      email: "",
      addr: "",
      dist:"",
      state:'',
      pin: "",
      qualification: "",
      experience: "",
      resume: "",
      dob: "",
profId:"",
      postdata: [
        {
          id: 1,
          profile_code: 'JS91876345',
          oppurtunity_code: 'AF47834',
          oppurtunity_designation: 'Manager',
          profile_name: 'Nanda Kishore',
          profile_email: 'nanda@gmail.com',
          profile_gender: 'Male',
          profile_mobile: '8987873452',
          profile_address: '89-234-23/67, Road No10, Jublili Hills',
          profile_district: 'Hyderabad',
           profile_state: 'Telangana',
          profile_pin: '500033',
          profile_education: 'B.Tech',
          profile_experience: 'Fresher',
          profile_dob: '12-11-1995',
          profile_resume: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like',
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
      this.email = d.profile_email;
       this.mobile = d.profile_mobile;
       this.addr = d.profile_address;
       this.dist = d.profile_district;
        this.state = d.profile_state;
       this.pin = d.profile_pin; 
      this.qualification = d.profile_education;
      this.dob = d.profile_dob;
      this.experience = d.profile_experience;
      this.resume = d.profile_resume;
      this.opCode = d.oppurtunity_code;
       this.designation = d.oppurtunity_designation;
      this.profId=d.profile_code
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