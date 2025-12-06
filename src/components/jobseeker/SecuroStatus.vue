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
                    <div class="heading" style="background-color: SeaShell;" >
                        <div class="div-table-row" style="background-color: #ccc;">
                            <div class="div-table-col3"><b>Opportunity.Code</b></div>
                            <div class="div-table-col6"><b>Employer.Name</b></div>
                            <div class="div-table-col1"><b>Designation</b></div>
                           
  
                        </div>

                        <div class="div-table-row" v-for="d in allpostData" :key="d.id">
                            <div class="div-table-col3">
                                <a @click="viewJd(d)"><span style="color: blueviolet">{{ d.oppurtunityCode }}</span></a>
                            </div>
                            <div class="div-table-col6">{{ d.profileNm}}</div>
                            <div class="div-table-col1">{{ d.oppurtunityDesignation}}</div>
  
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
            
        }
    },
    mounted() {
      this.profileId = sessionStorage.getItem('profileId');
      
    this.fetchOpp();
//   }
    },
    methods: {

async fetchOpp() {
      const url = this.$hostName + "/api/v1/oppurtunity";

      try {
        const res = await axios.get(url);

        this.allpostData = res.data;
        console.log("res",res.data);
      } catch (err) {
        console.error("Error fetching opportunities:", err);
      }
    },
         populateFormFields(d) {
      if (!d) return;
      this.opCode = d.oppurtunityCode || "";
      this.designation=d.oppurtunityDesignation
      
    },

    viewJd(d) {
      this.visible = true;
      this.oppurtunityId = d.oppurtunityId;

      this.populateFormFields(d);

     
    },
        doSubmit() {
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
.heading{
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: seashell;
  font-family: Arial, sans-serif;
}

.div-table-row {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 6px 10px;
  box-sizing: border-box;
  align-items: center;
}

.div-table-row:last-child {
  border-bottom: none;
}

.div-table-row.header {
  background-color: #ccc;
  font-weight: bold;
}

.div-table-col3 {
  width: 30%;  /* Opportunity Code */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.div-table-col6 {
  width: 50%;  /* Designation */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.div-table-col5 {
  width: auto;  /* Last Date */
  text-align: right;
  white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}
.opp-code-value {
  color: blueviolet;
  cursor: pointer;
}
</style>