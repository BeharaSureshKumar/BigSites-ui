<template>
    <section id="jdrecview">
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
                    <div class="div-table-col3">3</div>
                    <div class="div-table-col3">2</div>
                    <div class="div-table-col3">1</div>
                </div>
              </div>
            </div>
          </div>
            <div class="row">
              <h4>Job Description(s)</h4>
             </div> 
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
             <div class="row">
                <h5>View list of JDs Approved</h5>
                <br>
              <div class="div-table">
                <div class="div-table-row">
                  <div class="div-table-col3"><b>JD Code</b></div>
                  <div class="div-table-col3"><b>Designation</b></div>
                </div>
                <div class="div-table-row" v-for="securopublishdata in postdataofJd" :key="securopublishdata.id">
                  <div class="div-table-col3"><RouterLink to="/pubrecview"><span style="color: blue">{{securopublishdata.jd_code}}</span></RouterLink></div>
                  <div class="div-table-col3">{{securopublishdata.jd_desg}}</div>
                 </div>
                <!-- <div class="div-table-row">
                  <div class="div-table-col3"><RouterLink to="/pubrecview"><span style="color: blueviolet">AF48623</span></RouterLink></div>
                  <div class="div-table-col3">Chemist</div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col3"><RouterLink to="/pubrecview"><span style="color: blueviolet">AF17555</span></RouterLink></div>
                  <div class="div-table-col3">Marketting</div>
                </div> -->
              </div>
              </div>      
            </div>
            <div class="col-md-6 col-sm-6">
              <h3>JD Code - {{jd_code}}</h3>
              
                <p style="text-align: justify;"><b>Information displayed in this page is duely approved, and in use.
                  <br>For further changes do not hesitate to contact your 'head-incharge'</b></p><br>
                  <div class="div-Table">
                  <div class="div-table-col3">
                    <div  class="divCell">Designation</div>
                    <div  class="divCell">PostDate</div>
                    <div  class="divCell">LastDate</div>
                    <div  class="divCell">Incharge</div>
                    <div  class="divCell">Email ID</div>
                    <div  class="divCell">Description</div>
                    
                  </div>
                  <div class="div-table-col2" v-for="securopublishdatainfo in postdataofinfo" :key="securopublishdatainfo.id">
                    <div class="divCell">{{securopublishdatainfo.designation}}</div>
                    <div class="divCell">{{securopublishdatainfo.postDate}}</div>
                    <div class="divCell">{{securopublishdatainfo.lastDate}}</div>
                    
                    <div class="divCell">{{securopublishdatainfo.incharge}}</div>
                    <div class="divCell">{{securopublishdatainfo.emailId}}</div>
                    <div class="divCell"><p style="text-align: justify;">{{ securopublishdatainfo.description }}</p></div>
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
jd_code:'AF47834',
     // postdata1: [],
      postdataofJd: [
        { 'id': 1, 'jd_code': 'AF47834', 'jd_desg': 'Software Engineer', 'jd_resume_last_subm_date': '20-03-2025' },
        { 'id': 2, 'jd_code': 'AF48623', 'jd_desg': 'Scrum Master', 'jd_resume_last_subm_date': '21-03-2025' },
        { 'id': 3, 'jd_code': 'AF17555', 'jd_desg': 'Technical Lead', 'jd_resume_last_subm_date': '22-03-2025' },
      ],
      postdataofinfo: [
        { 'id': 1, 'designation': 'Software engineer', 'postDate': '29-01-2025', 'lastDate': '30-02-2025','incharge':'Ms.Stella','emailId':'hr@afcindia.com','description':'job title for software engineer developer' },
        //{ 'id': 2, 'jd_code': 'AF48623', 'jd_desg': 'Scrum Master', 'jd_resume_last_subm_date': '21-03-2025' },
        //{ 'id': 3, 'jd_code': 'AF17555', 'jd_desg': 'Technical Lead', 'jd_resume_last_subm_date': '22-03-2025' },
      ],
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    }
  }
}

</script>
