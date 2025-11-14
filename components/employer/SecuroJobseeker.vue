<template>
    <section id="jobseeker">
      <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
          <h4>Profiles</h4>
                <h5>View profiles shown interest for the list of JDs published</h5>
                <br>
              <div class="div-table">
                
                <div class="div-table-row">
                  <div class="div-table-col3"><b>JD Code</b></div>
                  <div class="div-table-col3"><b>Designation</b></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col3"><RouterLink to="/jobseekerv1"><span style="color: blueviolet">AF47834</span></RouterLink></div>
                  <div class="div-table-col3">Mechanic</div>
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
        </div>
      </div>  
      </form>
    </section>
</template>

