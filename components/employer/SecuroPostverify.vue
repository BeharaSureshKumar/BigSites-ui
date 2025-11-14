<template>
  <section id="publish">
    <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
          <h4>JD Posts Verify</h4>
          <h5>Verify JDs to Approve or Hold</h5>
          <br>
          <div class="div-table">
            <div class="div-table-row">
              <div class="div-table-col5"><b>Jd.Code</b></div>
              <div class="div-table-col6"><b>Designation</b></div>
              <div class="div-table-col"><b>Last.Dt</b></div>
              <div class="div-table-col5"><b>Status</b></div>
            </div>
            <!-- <div v-if="jd_status"> -->
            <div class="div-table-row" v-for="d in postdata" :key="d.id">
              <div class="div-table-col5" style="font-size: 10px;">
                
                <div class="div-table-col6" style="font-size: 10px;">{{ d.jd_code }}</div>
                <div class="div-table-col6" style="font-size: 10px;">{{ d.jd_desg }}</div>
                <div class="div-table-col" style="font-size: 10px;">{{ d.jd_resume_last_subm_date }}</div>

                <div class="div-table-col6"><a @click="viewJd"><b>View</b></a></div>

                <!-- <button @click="getData">Get Data</button> -->
              </div>
              <!-- </div> -->
            </div>

          </div>
        </div>


        <table v-if="tableData.length > 0">
          <thead>
            <tr>
              <th>JD Code</th>
              <th>JD Desc</th>
              <th>JD Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
              <td>{{ item.jd_code }}</td>
              <td>{{ item.jd_desc }}</td>
              <td>{{ item.jd_desg }}</td>

            </tr>
          </tbody>
        </table>
      </div>

    </form>
  </section>
</template>
<script>

export default {
  data() {
    return {
      tableData: [],

      disabledFlag: true,
      canApprove: false,
      designation: "",
      location: "",
      jdesc: "",
      jdCode: "",
      status: "",
      jd_status: 1,
      postdata: [
        { 'id': 1, 'jd_code': 'AF47834', 'jd_desg': 'Mechanic', 'jd_resume_last_subm_date': '28-02-2025', 'jd_status': '0' },
        { 'id': 2, 'jd_code': 'AF48623', 'jd_desg': 'Chemist', 'jd_resume_last_subm_date': '20-02-2025', 'jd_status': '1' },
        { 'id': 3, 'jd_code': 'AF17555', 'jd_desg': 'Marketing', 'jd_resume_last_subm_date': '28-01-2025', 'jd_status': '1' }
      ],


    }
  },

  methods: {
   
    viewJd() {
      
      this.tableData = [
        
        { 'id': 1, 'jd_code': 'AF47834', 'jd_desc': 'work on web pages ', 'jd_desg': 'Mechanic', 'jd_location': 'Chennai, Tamilnadu', 'jd_resume_last_subm_date': '28-02-2025', 'jd_approved_date': '2025-03-12' },
        { 'id': 2, 'jd_code': 'AF48623', 'jd_desc': 'work on html ', 'jd_desg': 'Chemist', 'jd_location': 'Hyderabad, Andhra', 'jd_resume_last_subm_date': '20-02-2025' },
        { 'id': 3, 'jd_code': 'AF17555', 'jd_desc': 'work on css ', 'jd_desg': 'Marketing', 'jd_location': 'Villiyanur, Puducherry', 'jd_resume_last_subm_date': '28-01-2025', 'jd_approved_date': '2025-03-12' }
      ];
    },


  }
}</script>
