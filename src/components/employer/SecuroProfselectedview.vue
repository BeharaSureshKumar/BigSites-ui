<template>
    <section id="jobseekerview">
      <form id="appointment-form" role="form" method="post" action="#">
        <div class="col-md-12 col-sm-12">
            <div class="col-md-6 col-sm-6">
              <h4>Profiles Selected</h4>
                <h5>Set of profiles shown interest for the Job Code selected</h5>
              <br>
              <div class="div-table">
                <div class="div-table-row">
                  <div class="div-table-col"><b>ProfileID</b></div>
                  <div class="div-table-col"><b>Gender</b></div>
                  <div class="div-table-col"><b>Appln.Date</b></div>
                  <div class="div-table-col"><b>Interested</b></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col">JS91876345</div>
                  <div class="div-table-col">Male</div>
                  <div class="div-table-col">12-01-2025</div>
                  <div class="div-table-col5"><RouterLink to="/profselectedview1"><b>View</b></RouterLink></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col">JS91876333</div>
                  <div class="div-table-col">Male</div>
                  <div class="div-table-col">12-01-2025</div>
                  <div class="div-table-col5"><RouterLink to="/profselectedview2"><b>View</b></RouterLink></div>
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
