<template>
    <section id="jobseekerview">
      <form id="appointment-form" role="form" method="post" action="#">
        <div class="col-md-12 col-sm-12">
          <div class="col-md-6 col-sm-6">
              <h4>JD Code-AF47834(Mechanic)</h4>
              <div class="row">
                  <div class="text-align-center">
                    <div class="div-Table">
                      <div class="div-table-row">  
                        
                          <div class="div-table-col1"><RouterLink to="/publish"><b>Job.Desc</b></RouterLink></div>
                          <div class="div-table-col"><RouterLink to="/profselected"><b>Shortlisted</b></RouterLink></div>
                          <div class="div-table-col"><RouterLink to="/profconf1"><b>Confirmed</b></RouterLink></div>
                          <div class="div-table-col"><RouterLink to="/profappt"><b>Appointed</b></RouterLink></div>
                      </div>  
                      <div class="div-table-row1">
                          <div class="div-table-col1">3</div>
                          <div class="div-table-col">3</div>
                          <div class="div-table-col">2</div>
                          <div class="div-table-col">1</div>
                      </div>
                    </div>
                  </div>
              </div>
              <h5>Set of profiles selected for the Job Code selecteddd</h5>
              <br>
              <div class="div-table">
                <div class="div-table-row">
                  <div class="div-table-col3"><b>JD Code</b></div>
                  <div class="div-table-col3"><b>Designation</b></div>
                  <div class="div-table-col3"><b>Prof ID</b></div>
                </div>
 
                <div class="div-table-row" v-for="d in postdata" :key="d.id">
                  <div class="div-table-col3">{{d.jd_code}}</div>
                  <div class="div-table-col3">{{d.designation}}</div>
                  <div class="div-table-col3"><RouterLink to="/profconfview2"><b><span style="color: blue">JS91876345</span></b></RouterLink></div>
                </div>
                <!-- <div class="div-table-row">
                  <div class="div-table-col3">AF47834</div>
                  <div class="div-table-col3">Mechanic</div>
                  <div class="div-table-col3"><span style="color: blueviolet">JS91876355</span></div>
                </div> -->
              </div>   
            </div>
            <div class="col-md-6 col-sm-6">
              <h3>Profile ID - JS91876345</h3> 
                 
                  <p style="text-align: justify;"><b>Verify the authenticity of Profile' posted</b></p>
                    <div class="div-Table">
                      <div class="div-table-col3">
                        <div  class="divCell">Name</div>
                        <div  class="divCell">Qualification</div>
                        <div  class="divCell">DOB</div>
                        <div  class="divCell">Experience</div>
                        <div  class="divCell">Resume</div>
                      </div>
                      <div class="div-table-col2">
                        <div class="divCell">JS Nandha Kishore</div>
                        <div class="divCell">B.Tech-Mechanical</div>
                        <div class="divCell">06-02-2001</div>
                        <div class="divCell">Fresher</div>
                        <div class="divCell">
                          You can use the overflow property when you want to have better
                          control of the layout. The default value is visible.better control
                          of the layout. The default value is visible.better control of the
                          layout. The default value is visible.better control of the layout.
                          The default value is visible.better control of the layout. The
                          default value is visible.better control of the layout. The default
                          value is visible.better
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
          disabledFlag: true,
          canApprove: false,
          jdCode:"",
          designation: "",
          postDate: "",
          lastDate: "",
          incharge: "",
          emailId:"",
          description:"",

          postdata: [
          { 'id': 1, 'jd_code': 'AF47834','designation': 'Engineer', 'postDate': '29-01-2025', 'lastDate': '30-02-2025','incharge':'Ms.Stella','emailId':'hr@afcindia.com','description':'job title for  UI Developer' },
          { 'id': 1, 'jd_code': 'AF48623','designation': 'Sr Engineer', 'postDate': '30-01-2025', 'lastDate': '01-02-2025','incharge':'Ms.Stella','emailId':'hr@afcindia.com','description':'job title for Java Developer' },
          { 'id': 1, 'jd_code': 'AF17555','designation': 'Jr.Engineer', 'postDate': '31-01-2025', 'lastDate': '02-02-2025','incharge':'Ms.Stella','emailId':'hr@afcindia.com','description':'job title for Testing' },
          
        ],
      }
  },
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    }
</script>
