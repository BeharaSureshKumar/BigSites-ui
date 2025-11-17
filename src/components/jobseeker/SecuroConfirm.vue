<template>
    <section id="jdpost">
        <div class="col-md-12 col-sm-12">
            <form id="appointment-form" role="form" method="post" action="#">
                <div class="col-md-6 col-sm-6">
                    <b-message type="is-info" has-icon style="font-size: 12px;  max-width: 520px;">
                        <h5>Welcome to Securo JOBZ!!..</h5>
                        <h4>Profile ID and Name- {{ jsprof }} & {{ jsName }}</h4>


                        <h5>Select the Opportunity Code to view the interview detail</h5>
                    </b-message>
                    <h4>List of Interviews</h4>

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
                                <a @click="viewJd(d)"><span style="color: blueviolet">{{ d.oppurtunity_code
                                        }}</span></a>
                            </div>

                            <div class="div-table-col6">{{ d.oppurtunity_desg }}</div>
                            <div class="div-table-col5">{{ d.oppurtunity_interv_final_date }}</div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6" v-if="visible">


                    <h4>Opportunity.Code : {{ jdCode }}</h4>
                    <div class="row">
                        <div class="div-table">

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
                                <!-- <div class="col-md-7 col-sm-7"> -->
                                <!-- {{ location }} -->
                                <!-- <b-input placeholder="Enter Location..." maxlength="1000" v-model="name"></b-input>
                            </div> -->
                            </div>
                            <div class="col-md-12 col-sm-12">
                                <div class="col-md-4 col-sm-4">
                                    <b-label class="flright item">Interview Date</b-label>
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
                                    <b-label class="flright item">Interview Time</b-label>
                                </div>
                                <div class="col-md-1 col-sm-1">
                                    <b-label class="flright item">:</b-label>
                                </div>
                                <div class="col-md-7 col-sm-7">
                                    {{ intvTm }}
                                </div>
                                <!-- <div class="col-md-7 col-sm-7"> -->
                                <!-- {{ intvTm }} -->
                                <!-- <b-field>
                                    <b-timepicker v-model="time" placeholder="Select interview Time..."> -->

                                <!-- <b-button
                label="Now"
                type="is-primary"
                icon-left="clock"
                @click="time = new Date()" />
            <b-button
                label="Clear"
                type="is-danger"
                icon-left="close"
                outlined
                @click="time = null" /> -->
                                <!-- </b-timepicker>
                                </b-field> -->
                                <!-- </div> -->
                            </div>
                            <div class="col-md-12 col-sm-12">
                                <div class="col-md-4 col-sm-4">
                                    <b-label class="flright item">Interview Details</b-label>
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
                                    <b-button :disabled="disabledFlag" class="flright" type="is-success"
                                        @click="doSubmit">
                                        Submit
                                    </b-button>
                                </div>
                                <div class="row">
                                    <a style=" font-size:15px"><b>Important: </b>Confirmation on or before the final
                                        date by
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
export default {
    data() {
        return {
            visible: false,
            disabledFlag: true,
            canApprove: false,
            designation: "",
            location: "",
            jdmsg: "",
            jdCode: "",
            confDt: "",
            proId: "",
            intvDt: "",
            intvfnDt: "",
            intvTm: "",
            cbConfirm: "No",
            jsprof: "",
            jsName:"",
            postdata: [{
                id: 1,
                oppurtunity_code: 'AF47834',
                oppurtunity_desg: 'Mechanic',
                oppurtunity_msg: 'We have considered your resume please confirm us on or before 29-04-2025 to attend the interview',
                oppurtunity_location: 'Taj Nungambakam, Chennai, Tamilnadu',
                oppurtunity_interv_date: '05-05-2025',
                oppurtunity_interv_time: '10am to 12pm',
                oppurtunity_interv_final_date: '29-04-2025',
                oppurtunity_pro_id: 'JS91876345',
                // oppurtunity_pro_conf_date: '',
                oppurtunity_system_date: '2025-04-15',
                oppurtunity_confirm: 'No'
            }, {
                id: 2,
                oppurtunity_code: 'AF47855',
                oppurtunity_desg: 'Chemist',
                oppurtunity_msg: 'We have considered your resume please confirm us on or before 25-04-2025 to attend the interview',
                oppurtunity_location: 'Tidel Park, Sector 2, Chennai, Tamilnadu',
                oppurtunity_interv_date: '09-05-2025',
                oppurtunity_interv_time: '09am to 11pm',
                oppurtunity_interv_final_date: '25-04-2025',
                oppurtunity_pro_id: 'JS91876345',
                // oppurtunity_pro_conf_date: '2025-03-28',
                oppurtunity_system_date: '2025-04-15',
                oppurtunity_confirm: 'Yes'
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
            this.visible = true;
            this.disabledFlag = false;
            this.jdCode = d.oppurtunity_code;
            this.location = d.oppurtunity_location;
            this.designation = d.oppurtunity_desg;
            this.confDt = d.oppurtunity_pro_conf_date;
            this.jdmsg = d.oppurtunity_msg;
            this.proId = d.oppurtunity_pro_id;
            this.intvDt = d.oppurtunity_interv_date;
            this.intvfnDt = d.oppurtunity_interv_final_date;
            this.intvTm = d.oppurtunity_interv_time;
            this.cbConfirm = d.oppurtunity_confirm;
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