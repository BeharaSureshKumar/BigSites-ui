<template>
    <section id="jobseekerview">
      <form id="appointment-form" role="form" method="post" action="#">
        <div class="col-md-12 col-sm-12">
            <div class="col-md-6 col-sm-6">
              <div class="row">
                <div class="text-align-center">
                    <div class="div-Table">
                      <div class="div-table-row">  
                        <div class="div-table-col3"><RouterLink to="/publish"><b>Job.Desc</b></RouterLink></div>
                        <div class="div-table-col3"><RouterLink to="/profapplied"><b>Shortlisted</b></RouterLink></div>
                        <div class="div-table-col3"><RouterLink to="/profconf1"><b>Confirmed</b></RouterLink></div>
                        <div class="div-table-col3"><RouterLink to="/profappt"><b>Appointed</b></RouterLink></div>
                      </div>  
                      <div class="div-table-row1">
                        <div class="div-table-col3">3</div>
                        <div class="div-table-col3">6</div>
                        <div class="div-table-col3">2</div>
                        <div class="div-table-col3">1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              <div class="row">
                <h4>JD Code-AF47834(Mechanic)</h4>
              </div>
              
              <h5>Set of profiles selected for the Job Code selected</h5>
              <br>
              <div class="div-table">
                <div class="div-table-row">
                  <div class="div-table-col3"><b>JD Code</b></div>
                  <div class="div-table-col3"><b>Designation</b></div>
                  <div class="div-table-col3"><b>Prof ID</b></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col3"><RouterLink to="/profselected"><span style="color: blue">AF47834</span></RouterLink></div>
                  <div class="div-table-col3">Mechanic</div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col3">AF47834</div>
                  <div class="div-table-col3">Mechanic</div>
                  <div class="div-table-col3"><RouterLink to="/profselectedview2"><b><span style="color: blue">JS91876345</span></b></RouterLink></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col3">AF47834</div>
                  <div class="div-table-col3">Mechanic</div>
                  <div class="div-table-col3"><span style="color: blueviolet">JS91876355</span></div>
                </div>
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
        </form>
    </section>
</template>
<script>
    export default {
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    }
</script>
