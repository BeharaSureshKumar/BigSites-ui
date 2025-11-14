<template>
    <section id="jdpost">
        <div class="col-md-12 col-sm-12">
            <form id="appointment-form" role="form" method="post" action="#">
                <div class="col-md-6 col-sm-6">
                    
                    <b-message type="is-info" has-icon style="font-size: 12px;  max-width: 650px;">
                        <h5>Welcome to Securo JOBZ!!..</h5>
                        <h4 >Profile ID and Name- {{ jsprof }} & {{jsName}}</h4>
                        <h5>Job Seekers could view Opportunities by selecting Opportunity Code! </h5>
                    </b-message>
                     <h4 >List of Opportunities</h4>
                    <!--<b-button type="is-success" @click="doAdd">Add</b-button>-->
                    <div class="div-table" style="background-color: SeaShell;">
                        <div class="div-table-row" style="background-color: #ccc;">
                            <div class="div-table-col3"><b>Opportunity.Code</b></div>
                            <div class="div-table-col6"><b>Designation</b></div>
                            <div class="div-table-col5"><b>Last Date</b></div>
                        </div>
                        <div class="div-table-row" v-for="d in postdata" :key="d.id">
                            <div class="div-table-col3">
                                <!-- <RouterLink :to="`/jobseekerview/${d.id}`" to="/"><b>{{ d.oppurtunity_code }}</b></RouterLink> -->
                                <a @click="viewJd(d)" v-b-tooltip.hover title="Click here for Details"><span
                                        style="color: blueviolet">{{ d.oppurtunity_code }}</span></a>
                            </div>

                            <div class="div-table-col6">{{ d.oppurtunity_desg }}</div>
                            <div class="div-table-col5">{{ d.oppurtunity_resume_last_subm_date }}</div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6" v-if="visible">
                    
                    <h4 >Opportunity.Code:  {{ jdCode }}</h4>
                    <div class="div-table">
 <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Employer Name</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ empName }}
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
                                <b-label class="flright item">Location</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ location }}
                            </div>
                        </div>

                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Description</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ jdesc }}
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Last.Dt</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ lastDt }}
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Interested</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                <div class="divCell">
                                    <p>
                                        <b-field>
                                            <b-checkbox v-model="cbConfirm" true-value="Yes" false-value="No">
                                                {{ cbConfirm }}
                                            </b-checkbox>
                                        </b-field>
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                        <a style=" font-size:15px"><b>Important: </b>If interested click yes in the check box to apply for the oppurtunity</a>
                    </div>
                        </div>

                        <br>

                    </div>

                    <!-- </div> -->


                </div>

            </form>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            visible: false,
            disabledFlag: true,
            canApprove: false,
            designation: "",
            location: "",
            jdesc: "",
            jdCode: "",
            lastDt: "",
            cbConfirm: "No",
            jsprof: "",
            jsName:"",
            empName:"",

            // postdata: [
            //     { 'id': 1, 'oppurtunity_code': 'AF47834', 'oppurtunity_desg': 'Mechanic', 'oppurtunity_desc': 'Hara Hara Sankara Hara Hara Mahadeva', 'oppurtunity_location': 'Chennai, Tamilnadu', 
            // 'oppurtunity_resume_last_subm_date': '28-02-2025', 'oppurtunity_approved_date': '2025-03-12' },
            //     { 'id': 2, 'oppurtunity_code': 'AF48623', 'oppurtunity_desg': 'Chemist', 'oppurtunity_desc': 'Hara Hara Sankara Hara Hara Mahadeva', 'oppurtunity_location': 'Hyderabad, Andhra', 'oppurtunity_resume_last_subm_date': '20-02-2025' },
            //     { 'id': 3, 'oppurtunity_code': 'AF17555', 'oppurtunity_desg': 'Marketing', 'oppurtunity_desc': 'Hara Hara Sankara Hara Hara Mahadeva', 'oppurtunity_location': 'Villiyanur, Puducherry', 'oppurtunity_resume_last_subm_date': '28-01-2025', 'oppurtunity_approved_date': '2025-03-12' }
            // ],
            postdata: [{
                id: 1,
                oppurtunity_code: 'AF47834',
                employer_Name:'AFC India',
                oppurtunity_desg: 'Mechanic',
                oppurtunity_desc: 'We have considered your resume please confirm us on or before 05-05-2025 to attend the interview',
                oppurtunity_location: 'Taj Nungambakam, Chennai, Tamilnadu',
                oppurtunity_resume_last_subm_date: '05-05-2025',
                oppurtunity_approved_date: '05-04-2025',
                oppurtunity_pro_id: 'JS91876345',
                oppurtunity_confirm: 'No'
                // oppurtunity_pro_id: 'JS91876345',
                // oppurtunity_pro_conf_date: '',
                // oppurtunity_system_date: '2025-04-15'
            }, {
                id: 2,
                oppurtunity_code: 'AF47855',
                employer_Name:'Asian pvt ltd',
                oppurtunity_desg: 'Chemist',
                oppurtunity_desc: 'We have considered your resume please confirm us on or before 09-05-2025 to attend the interview',
                oppurtunity_location: 'Tidel Park, Sector 2, Chennai, Tamilnadu',
                oppurtunity_resume_last_subm_date: '09-05-2025',
                oppurtunity_approved_date: '09-04-2025',
                oppurtunity_pro_id: 'JS91876345',
                oppurtunity_confirm: 'Yes'
                // oppurtunity_pro_id: 'JS91876345',
                // oppurtunity_pro_conf_date: '2025-03-28',
                // oppurtunity_system_date: '2025-04-15'
            }],
        }
    },
    mounted() {
        this.jsprof = sessionStorage.getItem('jsProfile');
        this.jsName = sessionStorage.getItem('jsName');
        if (sessionStorage.getItem('loggedEmail') === 'admin@afcindia.com') {
            this.canApprove = true;
        }
    },
    methods: {
        viewJd(d) {
            this.visible = true,
                this.disabledFlag = true;
            this.jdCode = d.oppurtunity_code;
            this.jdesc = d.oppurtunity_desc;
            this.location = d.oppurtunity_location;
            this.designation = d.oppurtunity_desg;
            this.empName=d.employer_Name;
            this.lastDt = d.oppurtunity_resume_last_subm_date;
            this.cbConfirm = d.oppurtunity_confirm;
        },
        doAdd() {
            this.disabledFlag = false;
            this.jdCode = '';
            this.location = '';
            this.designation = '';
            this.jdesc = '';
            this.lastDt = '';

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