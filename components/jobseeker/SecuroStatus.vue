<template>
    <section id="jdpost">
        <div class="col-md-12 col-sm-12">
            <form id="appointment-form" role="form" method="post" action="#">
                <div class="col-md-6 col-sm-6">
                    <b-message type="is-info" has-icon style="font-size: 12px;  max-width: 600px;">
                        <h5>Welcome to Securo JOBZ!!..</h5>
                        <h4 >Profile ID and Name- {{ profileId }} & {{profileNm}}</h4>
                        <h5>Status for the interview Attended</h5>
                    </b-message>
                     <h4 >Selected Status</h4>
                    <!--<b-button type="is-success" @click="doAdd">Add</b-button>-->

                    <div class="div-table" style="background-color: SeaShell;" >
                        <div class="div-table-row" style="background-color: #ccc;">
                            <div class="div-table-col3"><b>Opportunity.Code</b></div>
                            <div class="div-table-col6"><b>Employer.Name</b></div>
                            <div class="div-table-col1"><b>Designation</b></div>
                           
  
                        </div>

                        <div class="div-table-row" v-for="d in allpostData" :key="d.profileCd">
                            <div class="div-table-col3">
                                <!-- <RouterLink :to="`/jobseekerview/${d.id}`" to="/"><b>{{ d.jd_code }}</b></RouterLink> -->
                                <a @click="viewJd(d)"><span style="color: blueviolet">{{ d.profileCd }}</span></a>
                            </div>
                            <div class="div-table-col6">{{ d.profileNm}}</div>
                            <div class="div-table-col1">{{ d.profileEdu}}</div>
  
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6" v-if="visible">
                   
                    
                    <h4 >Opportunity.Code :  {{ opCode }}</h4>
                    <div class="row">
                    <div class="div-table">
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Employer.Name</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ empname }}
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Designation</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ designation }}
                            </div>
                        </div>
                        
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Interviewed Date</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ intvDt }}
                            </div>
                            <!-- <div class="col-md-7 col-sm-7"> -->
                                <!-- //  {{ intvDt }} -->
                                <!-- <b-field>
                                    <b-datepicker ref="datepicker" expanded placeholder="Select a date">
                                    </b-datepicker>
                                    <b-button @click="$refs.datepicker.toggle()" icon-left="calendar-today"
                                        type="is-primary" />
                                </b-field> -->

                            <!-- </div> -->
                        </div>
                        
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Interview Status</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ jdmsg }}
                            </div>
                            <!-- <div class="col-md-7 col-sm-7"> -->
                                <!-- {{ jdmsg }} -->
                                <!-- <b-input placeholder="Enter Interview Details..." maxlength="2000"
                                    v-model="name"></b-input> -->

                            <!-- </div> -->
                        </div>
                        <!-- <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Confirmed on</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ confDt }}
                            </div>
                        </div> -->
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item padding8">Confirm</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-2 col-sm-2">
                                <b-field>
                                    <b-checkbox v-model="cbConfirm" true-value="Yes" false-value="No">
                                        {{ cbConfirm }}
                                    </b-checkbox>
                                </b-field>
                            </div>
                            <div class="col-md-5 col-sm-5">
                                <b-button :disabled="disabledFlag" class="flright" type="is-success" @click="doSubmit">
                                    Submit
                                </b-button>
                            </div>
                             <div class="row">
                                <a style=" font-size:15px"><b>Important: </b>Confirmation on or before the final date by
                                clicking the "Check box"</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            visible: false,
            disabledFlag: true,
            canApprove: false,
            profileCd: "",
            empname: "",
            location: "",
            jdmsg: "",
            opCode: "",
            confDt: "",
            proId: "",
            intvDt: "",
      profilesData: {},
     
            cbConfirm: "No",
            profileId: "",
            jsName:"",
            allpostData:[],
            // postdata: [{
            //     interview_select_id: 1,
            //     oppurtunity_code: 'AF47834',
            //     employer_name: 'AFC India Limited',
            //     oppurtunity_designation: 'Manager',
            //     interview_select_remark: 'Congratulations!, We have selected your profile for the post of Manager, please meet our Hr at AFC India Limited office with all your credentials before 15-06-2025. ',
            //     interview_select_create_date: '05-05-2025',
            //     interview_select_profile_id: 'JS91876345',
            
            //     jd_confirm: 'No'
            // }, {
            //     interview_select_id: 2,
            //     oppurtunity_code: 'AF47855',
            //     employer_name: 'Britania Limited',
            //     oppurtunity_designation: 'Sales Head',
            //     interview_select_remark: 'Congratulations!, We have selected your profile for the post of Sales Head , please meet our Hr at Britania Limited office with all your credentials before 18-06-2025. ',
            //     interview_select_create_date: '05-05-2025',
            //     interview_select_profile_id: 'JS91876345',
             
            //     jd_confirm: 'Yes'
            // }],
        }
    },
    mounted() {
      this.profileId = sessionStorage.getItem('profileId');
       //this.jsName = sessionStorage.getItem('jsName');
        // this.jsName=sessionStorgage.getItem('jsName');
        // if (sessionStorage.getItem('loggedEmail') === 'admin@afcindia.com') {
        //     this.canApprove = true;
        // }
        //this.fetchProfiles();
        // const profId = sessionStorage.getItem('profileId');  
//   if (profId) {
    this.fetchProfiles();
//   }
    },
    methods: {
//         async fetchProfiles(id) {
//             console.log('hostName',this.$hostName);
//       const url = this.$hostName + '/api/v1/jobseekers/1';
// console.log("iddd",id);
//       await axios.get(url)
//       .then(res => {
//         console.log('=====>>> ', res.data)
//         this.allpostData = res.data
//       })
//       .catch(err => {
//         this.allpostData = [];
//         console.error('Error fetching profiles: ', err)
//       })
//     },
async fetchProfiles(id) {
  try {
    const url = this.$hostName + '/api/v1/jobseekers/'+id;
    const res = await axios.get(url);
    console.log('=====>>> ', res.data);

    // ensure it's always an array
    this.allpostData = Array.isArray(res.data) ? res.data : [res.data];
  } catch (err) {
    this.allpostData = [];
    console.error('Error fetching profiles: ', err);
  }
},
        viewJd(d) {
            this.visible = true;
            this.disabledFlag = false;
            this.profileCd = d.profileCd;
  this.empname = d.profileNm;   // using profileNm as Employer Name substitute
  this.designation = d.profileEdu; // maybe use Education as placeholder
            // this.profileCd = d.profileCd;
            // this.empname = d.employer_name;
         
            // this.designation = d.oppurtunity_designation;
   
            this.jdmsg = d.interview_select_remark;
            this.proId = d.interview_select_profile_id;
            this.intvDt = d.interview_select_create_date;
          
          
            this.cbConfirm = d.jd_confirm;
        },
        doSubmit() {
            // designation: "",
            // empname: "",
            // location: "",
            // jdmsg: "",
            // opCode: "",
            // confDt: "",
            // proId: "",
            // intvDt: "",
            // this.opCode = d.oppurtunity_code;
            // this.empname = d.employer_name;
         
            // this.designation = d.oppurtunity_designation;
   
            // this.jdmsg = d.interview_select_remark;
            // this.proId = d.interview_select_profile_id;
            // this.intvDt = d.interview_select_create_date;
          
          
            // this.cbConfirm = d.jd_confirm;
            this.profilesData.profileCd=this.profileCd
            console.log("Submit Button clicked !!")
        },
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