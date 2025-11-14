<template>
    <section id="jdpost">
        <div class="col-md-12 col-sm-12">
            <form id="appointment-form" role="form" method="post" action="#">
                <div class="col-md-6 col-sm-6">
                   
                    <b-message type="is-info" has-icon style="max-width: 550px;">
                        <h4>Securo JOBZ invites {{empName}}.</h4>
                      <p>To Add, View and Publish New Opportunities.</p>
                    </b-message>
                    <h4><a @click="doAdd">Click here to add New Oppurtunity</a></h4>
      
                    <!-- <b-button type="is-success" @click="doAdd">Add</b-button> -->
                    <div class="div-table" id="borderLeft">
                        <div class="div-table" style="background-color: seashell;">
                            <div class="div-table-row" style="background-color: #ccc;">
                                <div class="div-table-col3A"><b>Oppor.Code</b></div>
                                <div class="div-table-col6"><b>Designation</b></div>
                                <div class="div-table-col5A"><b>Public</b></div>
                                <div class="div-table-col3A"><b>Last Date</b></div>
                            </div>
                            <div class="div-table-row" v-for="d in postdata" :key="d.oppurtunity_id">
                                <div class="div-table-col3A"><a @click="viewJd(d)"><span style="color: blueviolet">{{
                                    d.oppurtunity_code }}</span></a></div>
                                <div class="div-table-col6">{{ d.oppurtunity_designation }}</div>
                                <div class="div-table-col5A">{{ d.oppurtunity_approve_flg }}</div>
                                <div class="div-table-col3A">{{ d.oppurtunity_last_date }}                       </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6" v-if="visible">
                    <b-field label="Opportunity Code" Vertical>
                        <b-input :disabled="disabledFlag" maxlength="10" v-model="jdCode"></b-input>
                    </b-field>

                    <b-field label="Update the Designation 'Offered'" Vertical>
                        <b-input maxlength="50" v-model="designation"></b-input>
                    </b-field>

                    <b-field label="Location" Vertical>
                        <b-input maxlength="100" v-model="location"></b-input>
                    </b-field>

                    <b-field label="Copy and paste updated text for 'Job Description'" Vertical>
                        <b-input maxlength="2000" type="textarea" v-model="description"></b-input>
                    </b-field>

                    <b-field label="Enter the Last date for submission of 'Resume'">
                        <b-datepicker v-model="selected" :show-week-number="showWeekNumber" :locale="locale"
                            placeholder="Click to select..." icon="calendar-today"
                            :icon-right="selected ? 'close-circle' : ''" icon-right-clickable
                            @icon-right-click="clearDate" trap-focus>
                        </b-datepicker>
                    </b-field>
                    <b-button v-if="canApprove" type="is-success" @click="doApprove">Approve</b-button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b-button type="is-success" @click="doSubmit">Add</b-button>
                    <b-button v-if="canApprove" type="is-success" @click="doApprove">Approve</b-button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b-button type="is-success" @click="doSubmit">Publish</b-button>
                </div>
            </form>
        </div>
    </section>
</template>
<script>

export default {
    data() {
        return {
            visible:false,
            disabledFlag: true,
            canApprove: false,
            jdCode: "",
            designation: "",
            description: "",
            location: "",
            postDate:"",
            lastdate:"",
            appflg:"",
            empName:"",

            postdata: [
                {
                    oppurtunity_id: 1,
                    oppurtunity_code: 'AF47834',
                    oppurtunity_designation: 'Mechanic',
                    oppurtunity_job_description: 'We are looking for right candidte',
                    oppurtunity_location: 'Villiyanur, Puducherry',
                    oppurtunity_create_date: '28-01-2025',
                    oppurtunity_approve_flg: 'N',
                    oppurtunity_last_date: '12-04-2025',
                },
                {
                    oppurtunity_id: 2,
                    oppurtunity_code: 'AF48623',
                    oppurtunity_designation: 'Chemist',
                    oppurtunity_job_description: 'Expecting hands on experience in ecommerce',
                    oppurtunity_location: 'Villiyanur, Puducherry',
                    oppurtunity_create_date: '28-01-2025',
                    oppurtunity_approve_flg: 'Y',
                    oppurtunity_last_date: '12-04-2025',
                },
                {
                    oppurtunity_id: 3,
                    oppurtunity_code: 'AF17555',
                    oppurtunity_designation: 'Marketing',
                    oppurtunity_job_description: 'Expecting hands on experience in ecommerce',
                    oppurtunity_location: 'Villiyanur, Puducherry',
                    oppurtunity_create_date: '28-01-2025',
                    oppurtunity_approve_flg: 'N',
                    oppurtunity_last_date: '12-04-2025',
                }
            ],
        }
    },
    mounted() {
         this.empName = sessionStorage.getItem('empName');
        if (sessionStorage.getItem('loggedEmail') === 'admin@afcindia.com') {
            this.canApprove = true;
        }
    },
    methods: {
        viewJd(d) {
            this.visible=true;
            this.disabledFlag = true;
            this.jdCode = d.oppurtunity_code;
            this.designation = d.oppurtunity_designation;
            this.description = d.oppurtunity_job_description;
            this.location = d.oppurtunity_location;
            this.postDate = d.oppurtunity_create_date;
            this.appflg = d.oppurtunity_approve_flg;
            this.lastDate = d.oppurtunity_last_date;
         
        },
        doAdd() {
            this.disabledFlag = false;
            this.jdCode = '';
            this.designation = '';
            this.description = '';
            this.location = '';
            this.postDate = '';
            this.lastDate = '';
            this.appflg = '';
        },
        doApprove() {
            console.log("Approve Button clicked !!")
        },
        doSubmit() {
            console.log("Submit Button clicked !!")
        },
    }
}
</script>
