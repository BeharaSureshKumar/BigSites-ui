<template>
  <section id="jobseeker">
    <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
          <b-message type="is-info" has-icon style="max-width: 550px;">
            <h4>Securo JOBZ invites "Employer name?".</h4>
            <p>Conduct Interview for the profiles who have shown interest</p>
          </b-message>
          <h4>Interview on Process</h4>

          <div class="col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4"><b>Opportunity Code</b></div>
            <div class="col-md-8 col-sm-8"><b>Designation</b></div>

            <div v-for="(collapse, index) in postdata" :key="index">
              <div class="col-md-12 col-sm-12 jd-header" style="cursor: pointer;" @click="toggleCollapse(index)">
                <div class="col-md-4 col-sm-4" style="color: blueviolet">{{ collapse.jdCode }}</div>
                <div class="col-md-8 col-sm-8">{{ collapse.desg }}</div>
              </div>

              <transition name="slide-fade">
                <div v-if="collapseStates[index]" >
                  <!-- scroll-wrapper -->
                   <!-- :class="{ 'scroll-enabled': collapse.profilers.length >= 2 }" -->
                  <div class="div-table "  style="background-color: SeaShell;">
                    <div class="div-table-row1" style="background-color: #ccc ">
                      <!-- <div class="col-md-12 col-sm-12"> -->
                      <div class="div-table-col5"><b>Profile ID</b></div>
                      <div class="div-table-col6"><b>Name</b></div>
                      <!-- </div> -->
                    </div>
                   <div>
                    <div class="div-table-row" v-for="(prof, ndx) in collapse.profilers" :key="ndx">
                      <div class="div-table-col5">
                        <a @click="viewProfile(prof)" class="profile-link"> {{ prof.id }}</a>
                      </div>
                      <div class="div-table-col6">
                        {{ prof.name }}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <!-- <div class="col-md-6 col-sm-6" v-if="visible">
                <b-field label="Profile Id" Vertical>
                    <b-input :disabled="disabledFlag" maxlength="15" v-model="profId"></b-input>
                </b-field>

                <b-field label="Name" Vertical>
                    <b-input :disabled="disabledFlag" maxlength="100" v-model="profName"></b-input>
                </b-field>

                <b-field label="Gender" Vertical>
                    <b-input :disabled="disabledFlag" maxlength="15" v-model="profGender"></b-input>
                </b-field>
            </div> -->

        <div class="col-md-6 col-sm-6" v-if="visible">
          <!-- <div class="row">
                        <h6><b>Important: </b>Details of Approved Profile</h6>
                    </div> -->
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
                  {{ profName }}
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
                  {{ profGender }}
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
                  {{ profMobile }}
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
                  <b-label class="flright item">Address</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-md-7 col-sm-7">
                  {{ profAddress }}
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
                  {{ profDistrict }}
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
                  {{ profstate }}
                </div>
              </div>
              <div class="col-md-12 col-sm-12">
                <div class="col-md-4 col-sm-4">
                  <b-label class="flright item">Pin code</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-md-7 col-sm-7">
                  {{ profPincode }}
                </div>
              </div>
              <!-- <div class="col-md-12 col-sm-12">
                <div class="col-md-4 col-sm-4">
                  <b-label class="flright item">Interview Status</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-sm-1 col-sm-1">
                  <b-field horizontal>
                    <b-select>
                      <option value="1">Selected</option>
                      <option value="2">Hold</option>
                      <option value="3">Reject</option>
                      <option value="3">Not attended</option>

                    </b-select>
                  </b-field>
                </div>
                <br>
                <br>
              </div> -->
              <div class="col-md-12 col-sm-12">
                <div class="col-md-4 col-sm-4">
                  <b-label class="flright item">Interview Status</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-md-7 col-sm-7">
                  <b-select v-model="interviewStatus" placeholder="Select status">
                    <option value="1">Selected</option>
                    <option value="2">Hold</option>
                    <option value="3">Rejected</option>
                    <option value="4">Not attended</option>
                  </b-select>
                </div>
                <br>
                <br>
              </div>

              <!-- <div class="col-md-12 col-sm-12">
                <div class="col-md-4 col-sm-4">
                  <b-label class="flright item">Remarks</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-md-7 col-sm-7">
                  <b-field horizontal>
                    <b-input v-model="address" type="textarea"></b-input>
                  </b-field>
                </div>
              </div> -->
              <div class="col-md-12 col-sm-12">
                <div class="col-md-4 col-sm-4">
                  <b-label class="flright item">Remarks</b-label>
                </div>
                <div class="col-md-1 col-sm-1">
                  <b-label class="flright item">:</b-label>
                </div>
                <div class="col-md-7 col-sm-7">
                  <b-input v-model="remarks" type="textarea" rows="2"></b-input>
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
      profName: "",
      profGender: "",
      profMail: "",
      profMobile: "",
      profState: "",
      profDistrict: "",
      profPincode: "",
      profAddress: "",
      profdob: "",

      collapseStates: [],
      postdata: [
        {
          jdCode: 'AF47834',
          desg: 'Mechanic',
          profilers: [
            {
              id: 'JS91876345',
              name: 'Uma',
              gender: 'Female',
              address: 'f-201 , hyderabad',
              mobile: '9890987890',
              state: 'Telangana',
              district: 'Hyderabad',
              pincode: '500049',
              dob: '12-11-2002',
              email: 'uma@gmail.com'

            },
            {
              id: 'JS91876366',
              name: 'Balu',
              gender: 'Male',
              address: 'Balaji appartments',
              mobile: '9845645679',
              state: 'Karnataka',
              district: 'Bangalore',
              pincode: '500032',
              dob: '12-11-1993',
              email: 'balu@gmail.com'

            },
            {
              id: 'JS91876368',
              name: 'Suresh',
              gender: 'Male',
              address: '12/89/0 , Divisha colony',
              mobile: '6785679098',
              state: 'AndraPradesh',
              district: 'Godavari',
              pincode: '67898',
              dob: '09-01-1989',
              email: 'suresh@gmail.com'
            }
          ]
        },
        {
          jdCode: 'AF48623',
          desg: 'Chemist',
          profilers: [
            {
              id: 'JS92876368',
              name: 'Ramesh',
              gender: 'Male',
              address: '294/1/2',
              mobile: '7678954567',
              state: 'Mumbai',
              district: 'Thane',
              pincode: '89065',
              dob: '12-09-2002',
              email: 'ramesh@gmail.com'
            },
            {
              id: 'JS92876354',
              name: 'Shylaja',
              gender: 'Female',
              address: 'Twin olives , Ammerpet',
              mobile: '7656789043',
              state: 'Telangana',
              district: 'Hyderabad',
              pincode: '50098',
              dob: '20-03-1999',
              email: 'shylaja@gmail.com'
            }
          ]
        },
        {
          jdCode: 'AF17555',
          desg: 'Marketing',
          profilers: [
            {
              id: 'JS93876371',
              name: 'Kamesh',
              gender: 'Male',
              address: 'Sr Nagar , Mythrivanam',
              mobile: '8912908789',
              state: 'Bhuvaneswar',
              district: 'Odhisa',
              pincode: '89098',
              dob: '28-12-1998',
              email: 'kamesh@gmail.com'
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
      this.profId = p.id;
      this.profName = p.name;
      this.profGender = p.gender;
      this.profAddress = p.address;
      this.profMobile = p.mobile;
      this.profdob = p.dob;
      this.profemail = p.email;
      this.profDistrict = p.district;
      this.profstate = p.state;
      this.profPincode = p.pincode;

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
.profile-list-scroll {
  max-height: 200px; /* Adjust height as needed */
  overflow-y: auto;
  margin-top: 5px;
  border-top: 1px solid #ddd;
}
/* .scroll-wrapper {
  max-height: none;
  overflow-y: hidden;
}

.scroll-wrapper.scroll-enabled {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding-right: 4px;
} */
</style>