<template>
  <section id="myaccount">
    <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
          <b-message type="is-info" has-icon style="max-width: 550px;">
            <h4>Securo JOBZ.</h4>
            <p>Click one of the below opportunities to view or edit</p>
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
            </ul>
          </div>

           <div class = "row">
                        <h4>Opportunities Published</h4>
                    </div>
                    <div class="row">    
                        <div>
                            <div class="div-table" id="borderLeft">
                                <div class="div-table" style="background-color: seashell;">
                                    <div class="div-table-row" style="background-color: #ccc;">
                                        <div class="div-table-col1"><b>Oppurtunity Code</b></div>
                                        <div class="div-table-col6"><b>Designation</b></div>
                                        <div class="div-table-col1"><b>Last Date</b></div>
                                    </div>

                                    <div class="div-table-row" v-for="d in postdata" :key="d.id">
                                        <div class="div-table-col1">
                                            <a @click="viewJd(d)"><span style="color: blueviolet">{{ d.oppurtunityCode }}</span></a>
                                        </div>

                                        <div class="div-table-col6">{{ d.oppurtunityDesignation}}</div>
                                         <div class="div-table-col1">{{ toUI(d.oppurtunityLastDate)}}</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
                   
        
        <div class="col-md-6 col-sm-6 col-scroll" v-if="!visible">
             <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Code</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="10" v-model="code" />
            </div>
          </div>

          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Designation</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="designation" />
            </div>
          </div>
          <!--Email-->
          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Email</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-field  label=""
             :type="email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'is-danger' : ''"
             :message="email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) 
              ? 'Enter valid Email' 
             : ''">
             <b-input  type="email"  v-model="email"  maxlength="50" placeholder="Enter Email"
             ></b-input>
             </b-field>
            </div>
          </div>

          <!--Phone-->
         <div class="col-md-12 col-sm-12 mb-0">
         <div class="col-md-4 col-sm-4">
          <label class="item">Phone</label><span class="text-danger">*</span>
         </div>
         <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
         <div class="col-md-7 col-sm-7">

         <b-input
           v-model="mob"
          placeholder="Enter 10-digit mobile number"
          type="tel"
           maxlength="10"
          @input="validateMobile"
          :class="{ 'is-danger': mobTouched && (mobError || lengthError) }"/>

          <p v-if="mobTouched && mobError" class="help is-danger">
          Please enter only numbers.
         </p>

         <p v-if="mobTouched && lengthError" class="help is-danger">
         Mobile number must be 10 digits.
         </p>
         </div>
         </div>

         <!--incharge-->
         <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Incharge</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="incharge" />
            </div>
          </div>

          <!--Job Location-->
         <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Job Location</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input maxlength="50" v-model="location" />
            </div>
          </div>

          <div class="col-md-12 col-sm-12 mb-5">
            <div class="col-md-4 col-sm-4">
              <label class="item">Last Date to Apply</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-datepicker v-model="lastDate" placeholder="dd/mm/yyyy" icon="calendar-today"
              :min-date="today" :date-formatter="toUI" :date-parser="str => new Date(str.split('/').reverse().join('-'))">
              </b-datepicker>
        
            </div>
          </div>
          <div class="col-md-12 col-sm-12 mb-0">
            <div class="col-md-4 col-sm-4">
              <label class="item">Job Description</label><span class="text-danger">*</span>
            </div>
            <div class="col-md-1 col-sm-1"><label class="item">:</label></div>
            <div class="col-md-7 col-sm-7">
              <b-input type="textarea" maxlength="500" v-model="description" rows="4"/>
            </div>
          </div>

            <b-button
            class="button-wrapper"
            type="is-success"
           :disabled="!isFormValid"
            @click="doSubmit">Submit</b-button>
          </div>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      oppurtunityEmployerId: "",
      designation: "",
      email: "",
      code: "",
      lastDate: null,
      description: "",
      incharge: "",
      location: "",
      mob: "",
      mobTouched: false,
      mobError: false,
      lengthError: false,
      today: new Date(),
       postdata: [],
          }
       },
    

  computed: {
    emailValid() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },

    isFormValid() {
      return (
        this.designation.trim() !== "" &&
        this.emailValid &&
        this.incharge.trim() !== "" &&
        this.location.trim() !== "" &&
        this.mob.length === 10 &&
        this.description.trim() !== "" &&
        this.lastDate !== null &&
        !this.mobError &&
        !this.lengthError
      );
    },
  },
  
    methods: {
      async fetchAll() {
  try {
    const res = await axios.get(`${this.$hostName}/api/v1/oppurtunity`);
    this.postdata = res.data;
  } catch (err) {
    console.error("Fetch All Error:", err);
  }
},

        viewJd(d) {
  this.visible = false;
  this.code = d.oppurtunityCode;
  this.designation = d.oppurtunityDesignation;
  this.email = d.oppurtunityEmail;
  this.mob = d.oppurtunityPhone;
  this.incharge = d.oppurtunityIncharge;
  this.description = d.oppurtunityJobDescription;
  this.location = d.oppurtunityLocation;
  this.lastDate = new Date(d.oppurtunityLastDate);
  this.postDate = d.oppurtunityCreateDate;

  // Needed for PATCH update
  this.oppurtunityEmployerId = d.oppurtunityId;
},
   
    formatDate(date) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
},
// backend gets proper yyyy-mm-ddT00:00:00
toBackend(dateObj) {
  if (!dateObj) return null;
  return dateObj.toISOString(); 
},
toUI(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  return (
    ("0" + d.getDate()).slice(-2) + "/" +
    ("0" + (d.getMonth() + 1)).slice(-2) + "/" +
    d.getFullYear()
  );
},
    validateMobile(e) {
      this.mobTouched = true;
      let value = e.target.value;
      if (!/^[0-9]*$/.test(value)) {
        this.mobError = true;
      } else {
        this.mobError = false;
      }
      
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
      this.mob = value;
      this.lengthError = value.length > 0 && value.length !== 10;
    },
    
    async fetchEmployer(id) {
      if (!id) return;

      try {
        const res = await axios.get(
          `${this.$hostName}/api/v1/oppurtunity/${id}`
        );

        this.employee_data = res.data;

        this.code = res.data.oppurtunityCode;
        this.designation = res.data.oppurtunityDesignation;
        this.email = res.data.oppurtunityEmail;
        this.description = res.data.oppurtunityJobDescription;
        this.incharge = res.data.oppurtunityIncharge;
        this.location = res.data.oppurtunityLocation;
        this.mob = res.data.oppurtunityPhone;
        const d = new Date (res.data.oppurtunityLastDate);
        this.lastDate = d;
        this.formattedLastDate = this.toUI(res.data.oppurtunityLastDate);

      } catch (err) {
        console.error("Fetch Error:", err);
      }
    },

    async doSubmit() {
      if (!this.isFormValid) {
        this.$buefy.toast.open({
          message: " Please fill all required fields correctly.",
          type: "is-danger",
          duration: 3000,
        });
        return;
      }

      
      this.modData = {
        oppurtunityCode: this.code,
        oppurtunityEmployerId: this.oppurtunityEmployerId || 1,
       oppurtunityDesignation: this.designation,
       oppurtunityJobDescription: this.description,
       oppurtunityLastDate: this.formatDate(this.lastDate),
       oppurtunityEmail: this.email,
       oppurtunityPhone: this.mob,
       oppurtunityIncharge: this.incharge,
       oppurtunityLocation: this.location,
       oppurtunityCreateDate: new Date().toLocaleString()
      };

      try {
        let res;
        if (!this.oppurtunityEmployerId) {
          res = await axios.post(
            `${this.$hostName}/api/v1/oppurtunity`,
            this.modData
          );
         await this.fetchAll();
          this.$buefy.toast.open({
            message: " Record added successfully!",
            type: "is-success",
            duration: 3000,
          });
          return;
        }

  
        res = await axios.patch(
          `${this.$hostName}/api/v1/oppurtunity/${this.oppurtunityEmployerId}`,
         this.modData
        );
        await this.fetchAll();
        this.$buefy.toast.open({
          message: " Updated successfully!",
          type: "is-success",
          duration: 3000,
        });

      } catch (err) {
        console.error("=== API ERROR ===");
        console.log(err.response?.data);

        this.$buefy.toast.open({
          message: " Error saving record.",
          type: "is-danger",
          duration: 3000,
        });
      }
    },
  },

 mounted() {
  this.fetchAll();
},
};
</script>

<style scoped>
.col-scroll {
  max-height: 360px;
  overflow-y: scroll;
}
</style>