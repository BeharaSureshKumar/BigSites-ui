<template>
    <section id="jobseekerview">
      <form id="appointment-form" role="form" method="post" action="#">
        <div class="col-md-12 col-sm-12">
            <div class="col-md-6 col-sm-6">
              <h4>JD Code-{{jobCode}}-{{desgination}}</h4>
                <h5>Priliminary screening to initiate the Selection Process</h5>
              <br>
              <div class="div-table">
                <div class="div-table-row">
                  <div class="div-table-col"><b>ProfileID</b></div>
                  <div class="div-table-col"><b>Gender</b></div>
                  <div class="div-table-col"><b>Appln.Date</b></div>
                  <div class="div-table-col"><b>Action</b></div>
                </div>
                
                <div class="div-table-row" v-for="candidateScreening in postData" :key="candidateScreening.id">
                  <div class="div-table-col6" style="font-size: 12px;">{{ candidateScreening.profile_id }}</div>
              <div class="div-table-col6" style="font-size: 12px;">{{ candidateScreening.gender }}</div>
              <div class="div-table-col" style="font-size: 12px;">{{ candidateScreening.application_Date }}</div>
              <div class="div-table-col5">
                <RouterLink ><b>View</b></RouterLink>
              </div>
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
      data(){
        return{
          jobCode:'AF47834',
          desgination:'Software Engineer',
          postData: [
    { 'id': 1,  'profile_id': 'JS91876345', 'gender': 'Male', 'application_Date': '20-03-2025' },
    { 'id': 2, 'profile_id': 'JS91876333', 'gender': 'Female', 'application_Date': '21-03-2025' },

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
