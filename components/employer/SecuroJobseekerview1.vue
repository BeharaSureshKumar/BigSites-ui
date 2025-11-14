<template>
    <section id="jobseekerview">
      <form id="appointment-form" role="form" method="post" action="#">
        <div class="col-md-12 col-sm-12">
            <div class="col-md-6 col-sm-6">
              <h4>Profiles(s)</h4>
                <h5>View profiles shown interest for the list of JDs published</h5>
                <br>
            <div class="div-table">
                <div class="div-table-row">
                  <div class="div-table-col3"><b>JD Code</b></div>
                  <div class="div-table-col3"><b>Designation</b></div>
                  <div class="div-table-col3"><b>Prof ID</b></div>
              
                </div>
                <div class="div-table-row">
                  <div class="div-table-col3"><RouterLink to="/jobseeker"><span style="color: blue">AF47834</span></RouterLink></div>
                  <div class="div-table-col3">Mechanic</div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col3">AF47834</div>
                  <div class="div-table-col3">Mechanic</div>
                  <div class="div-table-col3"><RouterLink to="/jobseekerview1"><span style="color: blue">JS91876345</span></RouterLink></div>
                 </div>
                 <div class="div-table-row">
                  <div class="div-table-col3">AF47834</div>
                  <div class="div-table-col3">Mechanic</div>
                  <div class="div-table-col3"><span style="color: blueviolet">JS91876355</span></div>
             
                 </div>
                 <div class="div-table-row">
                  <div class="div-table-col3">AF47834</div>
                  <div class="div-table-col3">Mechanic</div>
                  <div class="div-table-col3"><span style="color: blueviolet">JS91876366</span></div>
     
                 </div>
                 <div class="div-table-row">
                  <div class="div-table-col3"><RouterLink to="/jobseekerv2"><span style="color: blueviolet">AF48623</span></RouterLink></div>
                  <div class="div-table-col3">Chemist</div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col3"><RouterLink to="/jobseekerv3"><span style="color: blueviolet">AF17555</span></RouterLink></div>
                  <div class="div-table-col3">Marketting</div>
                </div>
            </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <h3>Profile ID - JS91876345</h3> 
                  <b-button type="is-success"><RouterLink to="/jobseekershl1"><b>Short List</b></RouterLink></b-button>
              &nbsp<b-button type="is-warning"><RouterLink to="/jobseekerview"><b>Hold</b></RouterLink></b-button>
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
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    }
</script>
