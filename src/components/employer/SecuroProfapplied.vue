modified



<template>
  <section id="jobseeker">
    <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
          <b-message type="is-info" has-icon style="max-width: 650px;">
            <h4>Securo JOBZ invites "Employer name?".</h4>
            <p>Profiles show intrested for opportunities published</p>
          </b-message>
          
          <h4>Profiles Applied</h4>

          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4"><b>Opportunity Code</b></div>
            <div class="col-md-8 col-sm-8"><b>Designation</b></div>

            <div v-for="(collapse, index) in postdata" :key="index">
              <div class="col-md-12 col-sm-12 jd-header" style="cursor: pointer;" @click="toggleCollapse(index)">
                <div class="col-md-4 col-sm-4" style="color: blueviolet">{{ collapse.jdCode }}</div>
                <div class="col-md-8 col-sm-8">{{ collapse.desg }}</div>
              </div>

              <transition name="slide-fade">
                <div v-if="collapseStates[index]">
                  <div class="div-table" style="background-color: SeaShell;">
                    <div class="div-table-row1" style="background-color: #ccc ">
                      <!-- <div class="col-md-12 col-sm-12"> -->
                      <div class="div-table-col5"><b>Profile ID</b></div>
                      <div class="div-table-col6"><b>Name</b></div>
                      <div class="div-table-col3A"><b>Appld.Dt</b></div>
                      <!-- </div> -->
                    </div>
                    <div class="div-table-row" v-for="(prof, ndx) in collapse.profilers" :key="ndx">
                      <div class="div-table-col5">
                        <a @click="viewProfile(prof)" class="profile-link">{{ prof.profile_id }}</a>
                      </div>
                      <div class="div-table-col6">
                        {{ prof.profile_name }}
                      </div>
                      <div class="div-table-col3A">
                        {{ prof.oppurtunity_select_create_date }}
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>


        <div class="col-md-6 col-sm-6" v-if="visible">
          <h4 style="color: slateblue;">Profile Code - {{ profId }} </h4>

          <div class="div-table">
            <div class="div-table-row">

              <div class="col-md-12 col-sm-12">
                <div class="col-md-4 col-sm-4">
                  <b-label class="flright item">Name</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-md-7 col-sm-7">
                  {{ profname }}
                </div>
              </div>
              <div class="col-md-12 col-sm-12">
                <div class="col-md-4 col-sm-4">
                  <b-label class="flright item">Date of birth</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-md-7 col-sm-7">
                  {{ profdob }}
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
                  {{ profgender }}
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
                  {{ profmob }}
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
                  {{ profemail }}
                </div>
              </div>
              <div class="col-md-12 col-sm-12">
                <div class="col-md-4 col-sm-4">
                  <b-label class="flright item">Education</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-md-7 col-sm-7">
                  {{ profedu }}
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
                  {{ profexp }}
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
                  {{ profresume }}
                </div>
              </div>
              <div class="col-md-12 col-sm-12">
                <div class="col-md-4 col-sm-4">
                  <b-label class="flright item">Applied Date</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-md-7 col-sm-7">
                  {{ applcreadt }}
                </div>
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
      profId: "",
      profname: "",
      profgender: "",
      profemail: "",
      profmob: "",
      profstate: "",
      profdist: "",
      profpin: "",
      profaddr: "",
      profdob: "",
       profexp: "",
      profresume: "",
      applcreadt: "",

      collapseStates: [],
      postdata: [
        {
          jdCode: 'AF47834',
          desg: 'Mechanic',
          profilers: [
            {
              profile_id: 'JS91876345',
              profile_name: 'Uma',
              profile_gender: 'Female',
              profile_address: 'f-201 , hyderabad',
              profile_mobile: '9890987890',
              profile_state: 'Telangana',
              profile_district: 'Hyderabad',
              profile_pincode: '500049',
              profile_dob: '12-11-2002',
              profile_email: 'uma@gmail.com',
              profile_education:'MBA',
              profile_experience:'Fresher',
              oppurtunity_select_create_date:'17-05-2025',
              profile_resume:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.'

            },
            {
              profile_id: 'JS91876366',
              profile_name: 'Balu',
              profile_gender: 'Male',
              profile_address: 'Balaji appartments',
              profile_mobile: '9845645679',
              profile_state: 'Karnataka',
              profile_district: 'Bangalore',
              profile_pincode: '500032',
              profile_dob: '12-11-1993',
              profile_email: 'balu@gmail.com',
              profile_education:'Btech',
              profile_experience:'Experience',
              oppurtunity_select_create_date:'07-02-2025',
              profile_resume:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,'

            },
            {
              profile_id: 'JS91876368',
              profile_name: 'Suresh',
              profile_gender: 'Male',
              profile_address: '12/89/0 , Divisha colony',
              profile_mobile: '6785679098',
              profile_state: 'AndraPradesh',
              profile_district: 'Godavari',
              profile_pincode: '67898',
              profile_dob: '09-01-1989',
              profile_email: 'suresh@gmail.com',
              profile_education:'Degree',
              profile_experience:'Fresher',
              oppurtunity_select_create_date:'07-01-2025',
              profile_resume:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,'
            }
          ]
        },
        {
          jdCode: 'AF48623',
          desg: 'Chemist',
          profilers: [
            {
              profile_id: 'JS92876368',
              profile_name: 'Ramesh',
              profile_gender: 'Male',
              profile_address: '294/1/2',
              profile_mobile: '7678954567',
              profile_state: 'Mumbai',
              profile_district: 'Thane',
              profile_pincode: '89065',
              profile_dob: '12-09-2002',
              profile_email: 'ramesh@gmail.com',
              profile_education:'Sales',
              profile_experience:'Experience',
              oppurtunity_select_create_date:'09-01-2025',
              profile_resume:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,'
            },
            {
              profile_id: 'JS92876354',
              profile_name: 'Shylaja',
              profile_gender: 'Female',
              profile_address: 'Twin olives , Ammerpet',
              profile_mobile: '7656789043',
              profile_state: 'Telangana',
              profile_district: 'Hyderabad',
              profile_pincode: '50098',
              profile_dob: '20-03-1999',
              profile_email: 'shylaja@gmail.com',
              profile_education:'MBA',
              profile_experience:'Fresher',
              oppurtunity_select_create_date:'21-04-2025',
              profile_resume:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,'
            }
          ]
        },
        {
          jdCode: 'AF17555',
          desg: 'Marketing',
          profilers: [
            {
              profile_id: 'JS93876371',
              profile_name: 'Kamesh',
              profile_gender: 'Male',
              profile_address: 'Sr Nagar , Mythrivanam',
              profile_mobile: '8912908789',
              profile_state: 'Bhuvaneswar',
              profile_district: 'Odhisa',
              profile_pincode: '89098',
              profile_dob: '28-12-1998',
              profile_email: 'kamesh@gmail.com',
              profile_education:'Btech',
              profile_experience:'Junior',
              oppurtunity_select_create_date:'28-02-2025',
              profile_resume:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,'
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.collapseStates = this.postdata.map(() => false);
  },
  methods: {
    viewProfile(p) {
      this.visible = true;
      this.profId = p.profile_id;
      this.profname = p.profile_name;
      this.profgender = p.profile_gender;
      this.profaddr = p.profile_address;
      this.profmob = p.profile_mobile;
      this.profdob = p.profile_dob;
      this.profemail = p.profile_email;
      this.profdist = p.profile_district;
      this.profstate = p.profile_state;
      this.profpin = p.profile_pincode;
      this.profedu= p.profile_education;
      this.profexp= p.profile_experience;
      this.applcreadt= p.oppurtunity_select_create_date;
      this.profresume= p.profile_resume


    },
    toggleCollapse(index) {
      this.collapseStates[index] = !this.collapseStates[index];
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

.profile-row {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: #f9f9f9;
  margin: 4px 0;
  border-radius: 2px;
  align-items: center;
}

.profile-col-id {
  width: 40%;
  color: #007BFF;
  font-weight: 600;
}

.profile-col-name {
  width: 55%;
  font-weight: 500;
}

.profile-link {
  cursor: pointer;
  text-decoration: underline;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>