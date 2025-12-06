<template>
    <section id="publish"> 
        <form id="appointment-form" role="form" method="post" action="#">
            <div class="col-md-12 col-sm-12">
                <div class="col-md-6 col-sm-6">
                     <b-message type="is-info" has-icon style="font-size: 12px; max-width: 600px;">
                <h5>Welcome to Securo JOBZ!!..</h5>
                <h4>
                  Employeer Email-ID :
                  <a @click="viewJd()">{{ employerEmail }}</a>
                </h4>
                <h5>Click the above "Email-ID" to update</h5>
              </b-message>
                    
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

         
             
                    <div v-if="visible">
                    <h4 style="color: slateblue;">Opportunity Code - {{ jdcode }}</h4>
                   
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
                                {{toUI(postDate) }}
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
                                {{ toUI(lastDate) }}
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
                                {{ email }}
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
                                {{ mob }}
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
import axios from "axios";
export default {
    data() {
        return {
            employerEmail:"",
            visible: false,
            jdcode : "",
            postDate : "",
            designation: "",
            email: "",
            lastDate: " ",
            description: "",
            incharge: "",
            location: "",
            mob: "",
            postdata: [],
        };
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
  this.visible = true;
  this.jdcode = d.oppurtunityCode;
  this.designation = d.oppurtunityDesignation;
  this.email = d.oppurtunityEmail;
  this.mob = d.oppurtunityPhone;
  this.incharge = d.oppurtunityIncharge;
  this.description = d.oppurtunityJobDescription;
  this.location = d.oppurtunityLocation;
  this.lastDate = d.oppurtunityLastDate;
  this.postDate = d.oppurtunityCreateDate;
},

toUI(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return (
    ("0" + d.getDate()).slice(-2) + "/" +
    ("0" + (d.getMonth() + 1)).slice(-2) + "/" +
    d.getFullYear()
  );
}
},
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
    this.employerEmail=loggedUserObject.userEmail;
  this.fetchAll();
}
};
</script>
<style scoped>
.item {
    font-weight: 700;
    display: flex;
}
</style>