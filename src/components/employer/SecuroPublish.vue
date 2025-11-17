<template>
    <section id="publish"> 
        <form id="appointment-form" role="form" method="post" action="#">
            <div class="col-md-12 col-sm-12">
                <div class="col-md-6 col-sm-6">
                     <b-message type="is-info" has-icon style="max-width: 550px;">
                        <h4>Securo JOBZ invites "Employer name?".</h4>
                        <p>To view oppurtunies published </p>
                    </b-message>
                    <div class = "row">
                        <ul class="nav navbar-nav navbar-center"> 
                            <li><RouterLink to="/publish">Opportunities(3)</RouterLink></li>
                            <li><RouterLink to="/profapplied">Profiles(6)</RouterLink></li>
                            <li><RouterLink to="/profconf1">Selected(2)</RouterLink></li>
                            <li><RouterLink to="/profappt">Appointed(1)</RouterLink></li>
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
                                        <div class="div-table-col3"><b>Opportunity.Code</b></div>
                                        <div class="div-table-col6"><b>Designation</b></div>
                                        <div class="div-table-col3A"><b>Publish.Dt</b></div>

                                    </div>

                                    <div class="div-table-row" v-for="d in postdata" :key="d.id">
                                        <div class="div-table-col3">
                                            <a @click="viewJd(d)"><span style="color: blueviolet">{{ d.oppurtunity_code }}</span></a>
                                        </div>

                                        <div class="div-table-col6">{{ d.oppurtunity_designation }}</div>
                                         <div class="div-table-col3A">{{ d.oppurtunity_postDate }}</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

         
             
                    <div v-if="visible">
                    <h4 style="color: slateblue;">Opportunity.Code - {{ jdcode }}</h4>
                   
                <div class="div-table" >
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
                                <b-label class="flright item">Post Date </b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ postDate }}
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Last Date to Apply</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ lastDate }}
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Job.Description</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ description }}
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Email Id</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ emailId }}
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-4 col-sm-4">
                                <b-label class="flright item">Phone</b-label>
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
                                <b-label class="flright item">Incharge</b-label>
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <b-label class="flright item">:</b-label>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                {{ incharge }}
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
            jdcode : "",
            empname: "",
            postDate : "",
            lastDate : "",
            incharge : "",
            designation : "",
            emailId : "",
            mobile : "",
            description : "",
            location : "",

            postdata: [
                {
                    oppurtunity_id: 1,
                    oppurtunity_code: 'AF16555',
                    employer_name: 'AFC INDIA LIMITED',
                    oppurtunity_designation: 'Jr.Engineer',
                    oppurtunity_postDate: '29-01-2025',
                    oppurtunity_lastDate: '02-02-2025',
                    oppurtunity_incharge: 'Ms.Stella',
                    oppurtunity_email: 'hr@afcindia.com',
                    oppurtunity_mob: '9856272522',
                    oppurtunity_description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                },
                {
                    oppurtunity_id: 2,
                    oppurtunity_code: 'AF17545',
                    employer_name: 'AFC INDIA LIMITED',
                    oppurtunity_designation: 'Mechnanic',
                    oppurtunity_postDate: '29-01-2025',
                    oppurtunity_lastDate: '02-02-2025',
                    oppurtunity_incharge: 'Ms.Stella',
                    oppurtunity_email: 'hr@afcindia.com',
                    oppurtunity_mob: '9856272522',
                    oppurtunity_description: 'job title for Testing'
                },
                {
                    oppurtunity_id: 3,
                    oppurtunity_code: 'AF17555',
                    employer_name: 'AFC INDIA LIMITED',
                    oppurtunity_designation: 'Chemist',
                    oppurtunity_postDate: '29-01-2025',
                    oppurtunity_lastDate: '02-02-2025',
                    oppurtunity_incharge: 'Ms.Stella',
                    oppurtunity_email: 'hr@afcindia.com',
                    oppurtunity_mob: '9856272522',
                    oppurtunity_description: 'job title for Testing'
                },
            ],
        }
    },
    mounted() {
        if (sessionStorage.getItem('loggedEmail') === 'admin@afcindia.com') {
            this.canApprove = true;
        }
    },
    methods: {
        viewJd(d) {
            this.visible = true;
            this.disabledFlag = true;
            this.jdcode = d.oppurtunity_code;
             this.empname = d.employer_name;
            this.postDate = d.oppurtunity_postDate;
            this.lastDate = d.oppurtunity_lastDate;
            this.incharge = d.oppurtunity_incharge;
            this.designation = d.oppurtunity_designation;
            this.emailId = d.oppurtunity_email;
            this.mobile = d.oppurtunity_mob;
            this.description = d.oppurtunity_description
            this.location = d.oppurtunity_location
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
.center {
  text-align: center;
  /* border: 1px solid green; */
}
</style>