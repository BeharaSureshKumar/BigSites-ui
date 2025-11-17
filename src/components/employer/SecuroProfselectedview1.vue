<template>
    <section id="jobseeker">
      <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
              <h4>JD Code-AF47834(Mechanic)</h4>
              <div class="row">
            <div class="text-align-center">
              <div class="div-Table">
                <div class="div-table-row">  
                  
                    <div class="div-table-col1"><RouterLink to="/publish"><b>Job.Desc</b></RouterLink></div>
                    <div class="div-table-col"><RouterLink to="/profapplied"><b>Shortlisted</b></RouterLink></div>
                    <div class="div-table-col"><RouterLink to="/profconf1"><b>Confirmed</b></RouterLink></div>
                    <div class="div-table-col"><RouterLink to="/profappt"><b>Appointed</b></RouterLink></div>
                </div>  
                <div class="div-table-row1">
                    <div class="div-table-col1">3</div>
                    <div class="div-table-col">6</div>
                    <div class="div-table-col">2</div>
                    <div class="div-table-col">1</div>
                </div>
              </div>
            </div>
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
                  <div class="div-table-col3"><RouterLink to="/profselectedview2"><b><span style="color: blueviolet">JS91876345</span></b></RouterLink></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col3">AF47834</div>
                  <div class="div-table-col3">Mechanic</div>
                  <div class="div-table-col3"><span style="color: blueviolet">JS91876355</span></div>
                </div>
              </div>   
            </div>
            <div class="col-md-6 col-sm-6">
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
