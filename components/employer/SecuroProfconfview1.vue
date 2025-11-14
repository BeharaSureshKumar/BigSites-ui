<template>
    <section id="jobseekerview">
      <form id="appointment-form" role="form" method="post" action="#">
        <div class="col-md-12 col-sm-12">
            <div class="col-md-6 col-sm-6">
              <h4>JD Code-AF47834(Mechanic)</h4>
              <h5>Set of profiles shown interest for the Job Code confirmed</h5>
              <br>
              <div class="div-table">
                <div class="div-table-row">
                  <div class="div-table-col"><b>ProfileID</b></div>
                  <div class="div-table-col"><b>Gender</b></div>
                  <div class="div-table-col"><b>Appln.Date</b></div>
                  <div class="div-table-col"><b>Shortlisted</b></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col">JS91876345</div>
                  <div class="div-table-col">Male</div>
                  <div class="div-table-col">12-01-2025</div>
                  <div class="div-table-col"><b>=></b></div>
                
                </div>
                <div class="div-table-row">
                  <div class="div-table-col">JS91876333</div>
                  <div class="div-table-col">Male</div>
                  <div class="div-table-col">14-01-2025</div>
                  <div class="div-table-col"><b>View</b></div>
                </div>
                
              </div>  
            </div>
            <div class="col-md-6 col-sm-6">
              <h3>Profile ID - JS91876345</h3> 
                  <b-button type="is-success"><RouterLink to="/profconf"><b>Close</b></RouterLink></b-button>
              &nbsp<b-button type="is-warning"><RouterLink to="/profselectedview1"><b>Hold</b></RouterLink></b-button>
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
