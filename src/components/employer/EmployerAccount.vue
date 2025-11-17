<template>
  <section id="myaccount">
    <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
          <b-message type="is-info" has-icon style="max-width: 550px;">
            <h4>Securo JOBZ invites "{{ employerEmail }}".</h4>
            <p>Employer's information displayed is duely shared by you</p>
          </b-message>
          <div class="row">
            <ul class="nav navbar-nav navbar-center">
              <li>
                <!-- Opportunities(3) -->
                <RouterLink to="/publish">Opportunities(3)</RouterLink>
              </li>
              <li>
                <!-- Profiles(6) -->
                <RouterLink to="/profselected">Profiles(6)</RouterLink>
              </li>
              <li>
                <!-- Selected(2) -->
                <RouterLink to="/profconf1">Selected(2)</RouterLink>
              </li>
              <li>
                <!-- Appointed(1) -->
                <!-- <RouterLink to="/profappt">Appointed(1)</RouterLink> -->
              </li>
            </ul>
          </div>
          <h4>My Account<a @click="viewJd(employee_data)">(Click to Edit)</a></h4>

          <div class="div-Table">
            <div class="div-table-col3">
              <div class="divCell">Employee.Code:</div>
              <div class="divCell">Organization :</div>
              <div class="divCell">Email.ID :</div>
              <div class="divCell">Phone :</div>
              <div class="divCell">Incharge :</div>
              <div class="divCell">Address :</div>
              <div class="divCell">District :</div>
              <div class="divCell">State :</div>
              <div class="divCell">Pin :</div>
            </div>
            <div class="div-table-col2">
              <div class="divCell">{{ employee_data?.employer_code }}</div>
              <div class="divCell">{{ employee_data?.empNm }}</div>
              <div class="divCell">{{ employee_data?.employer_email }}</div>
              <div class="divCell">{{ employee_data?.employerEmail }}</div>
              <div class="divCell">{{ employee_data?.empIncharge }}</div>
              <div class="divCell">{{ employee_data?.empAddress }}</div>
              <div class="divCell">{{ employee_data?.empDistrict }}</div>
              <div class="divCell">{{ employee_data?.empState }}</div>
              <div class="divCell">{{ employee_data?.empPin }}</div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 col-sm-6 col-scroll" v-if="visible">
          
             <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Code</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="code" />
            </div>
          </div>
          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Organization</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="name" />
            </div>
          </div>
          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Email</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="email" />
            </div>
          </div>
<div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Phone</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="mob" />
            </div>
          </div>
          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Incharge</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="incharge" />
            </div>
          </div>
          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Address</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="address" />
            </div>
          </div>
          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">District</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="district" />
            </div>
          </div>
          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">State</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="state" />
            </div>
          </div>
          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Pin Code</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="pin" />
            </div>
          </div>
           <!-- :disabled="!isFormValid" -->
            <b-button
            class="button-wrapper"
            type="is-success"
           
            @click="doSubmit">Submit</b-button>
          </div>
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      disabledFlag: true,
      canApprove: false,
      visible: false,
      empId: "",
      employee_data: null,
      modData: {},
      code: "",
      organization: "",
      employerEmail: '',
      mob: "",
      incharge: "",
      address: "",
      district: "",
      state: "",
      pin: "",

    }
  },
  computed: {
    isFormValid() {
      return (
        this.organization.trim() &&
        this.email.trim() &&
        this.incharge &&
        this.mob.trim() &&
        this.district.trim() &&
        this.address.trim() &&
        this.state.trim() &&
        this.pin.trim() 
      );
    },
  },
  // mounted() {
  //   const storedLoggedUser = sessionStorage.getItem('loggedUser');
  //   if (null === storedLoggedUser || undefined === storedLoggedUser || storedLoggedUser.length === 0) {
  //     this.$router.push('');
  //   } else {
  //     let loggedUserObject = null;
  //     if (storedLoggedUser) {
  //         try {
  //           loggedUserObject = JSON.parse(storedLoggedUser);
  //         } catch (e) {
  //           loggedUserObject = null;
  //         }
  //     }

  //     if (null === loggedUserObject || undefined === loggedUserObject || loggedUserObject.length === 0) {
  //       console.error("Error parsing JSON from sessionStorage:", e);
  //     } else {
  //       if (loggedUserObject.userType !== 'E') {
  //         this.$router.push('');
  //       } else {
  //         this.employerEmail = loggedUserObject.userEmail;
  //         this.fetchEmployer(loggedUserObject.userId);
  //       }
  //     }
  //   }
  // },
  mounted() {
    const storedLoggedUser = sessionStorage.getItem("loggedUser");
    if (!storedLoggedUser) {
      this.$router.push("");
      return;
    }

    let loggedUserObject = null;
    try {
      loggedUserObject = JSON.parse(storedLoggedUser);
    } catch (e) {
      console.error("Error parsing logged user:", e);
    }

    if (!loggedUserObject || loggedUserObject.userType !== "E") {
      this.$router.push("");
      return;
    }

    this.userId = loggedUserObject.userId;
    this.employerEmail = loggedUserObject.userEmail;
    //this.fetchProfileData(loggedUserObject.userId);
    this.fetchEmployer(this.empId);
  },

  methods: {
    async fetchEmployer(empId) {
      console.log("gettingg fetch temployee id",empId);
      const url = this.$hostName + '/api/v1/employers/' + empId;
      await axios
      .get(url)
      .then(res => {
        console.log('=====>>> ', res.data)
        sessionStorage.setItem("employerDetails", JSON.stringify(res.data));
        this.employer_data = res.data
      })
      .catch(err => {
        this.employer_data = null;
        console.error('Error fetching employer: ', err)
      })
    },
    
populateFormFields(data) {
      if (!data) return;
      this.organization = data.empNm || "";
      this.employerEmail=data.empEmail
      this.address = data.empAddress || "";
      this.district = data.empDistrict || "";
      this.pin = data.empPin || "";
      this.state = data.empState || "";
      this.incharge = data.empIncharge || "";
    },
     viewJd(d) {
      this.disabledFlag = true;
      this.visible = true;
      this.populateFormFields(d);
    },


    async doSubmit() {
      // if (!this.isFormValid) {
      //   this.$buefy.toast.open({
      //     message
      //       : "⚠️ Please fill all required fields before submitting.",
      //     type: "is-danger",
      //     duration: 3000,
      //   });
      //   return;
      // }

      const storedLoggedUser = sessionStorage.getItem("loggedUser");
      const loggedUserObject = JSON.parse(storedLoggedUser);

      this.modData = {
        empId: this.empId,
        empCd:this.code,
        empEmail: this.employerEmail,
        empNm: this.organization,
        empAddress: this.address,
        empDistrict: this.district,
        empPin: this.pin,
        empState: this.state,
        empIncharge: this.incharge,
        empApprovalFlag:'Y',
        empCreateDate:'',
        empDeleteFlag:'N',
        empMob:this.mob
       
      };

      try {
        let res;
       // console.log("res.data.empId",res.data.empId);
       // console.log("id",this.empId);
        if (this.empId) {
          const url = `${this.$hostName}/api/v1/employers/${this.empId}`;
          res = await axios.patch(url, this.modData);
        } else {
          const url = `${this.$hostName}/api/v1/employers`;
          res = await axios.post(url, this.modData);
        }

        this.empId = res.data.empId;
        await this.fetchEmployer(this.empId);

        this.$buefy.toast.open({
          message: "✅ Record saved successfully!",
          type: "is-success",
          duration: 3000,
        });

        this.visible = false;
      } catch (err) {
        console.error("Error saving profile:", err);
        this.$buefy.toast.open({
          message: "❌ Error saving record. Please try again.",
          type: "is-danger",
          duration: 3000,
        });
      }
    },
  }
}
</script>
<style scoped>
.col-scroll {
  max-height: 360px;
  overflow-y: scroll;
}
</style>