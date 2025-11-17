<template>
    <section id="jdrecview">
      <form id="appointment-form" role="form" method="post" action="#">
        <div class="col-md-12 col-sm-12">
          <div class="col-md-6 col-sm-6">
                <h4>JD View</h4>
                <h5>JD Posted would be 'On Hold' till it is verified and Approved.</h5>
                <br>
                <div class="div-table">
                <div class="div-table-row">
                  <div class="div-table-col5"><b>Jd.Code</b></div>
                  <div class="div-table-col6"><b>Designation</b></div>
                  <div class="div-table-col"><b>Last.Dt</b></div>
                  <div class="div-table-col5"><b>Status</b></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col5">AF47822</div>
                  <div class="div-table-col6">UX Designer</div>
                  <div class="div-table-col">30-02-2025</div>
                  <div class="div-table-col5"><b>=></b></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col5">AF42762</div>
                  <div class="div-table-col6">Java Programmer</div>
                  <div class="div-table-col">20-02-2025</div>
                  <div class="div-table-col5"><b>View</b></div>
                </div>
                <div class="div-table-row">
                  <div class="div-table-col5">AF43534</div>
                  <div class="div-table-col6">Marketting</div>
                  <div class="div-table-col">28-02-2025</div>
                  <div class="div-table-col5"><b>View</b></div>
                </div>
              </div>  
            </div>
            <div class="col-md-6 col-sm-6">
              <h3>JD Code - AF47822</h3>
              <b-button type="is-success"><RouterLink to="/publish"><b>Approve</b></RouterLink></b-button>
              &nbsp<b-button type="is-warning"><RouterLink to="/postupdate"><b>Update</b></RouterLink></b-button>
                <p style="text-align: justify;"><b>Information displayed in this page is duely approved, and in use.
                  <br>For further changes do not hesitate to contact your 'head-incharge'</b></p><br>
                    <table>
                      <thead>
                        <tr>
                          <th>Designation</th>
                          <th><b>: UX Designer</b></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PostDate</td>
                          <td><b>: 29-01-2025</b></td>
                        </tr>
                        <tr>
                          <td>LastDate</td>
                          <td><b>: 30-02-2025</b></td>
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td><p style="text-align: justify;">The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.</p></td>
                        </tr>
                        <tr>
                          <td>Incharge</td>
                          <td><b>: Ms.Stella</b></td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td><p style="text-align: justify;">101, Road 10C, Block C, Sidco Industrial Estate, Chennai: 600072</p></td>
                        </tr>
                        <tr>
                          <td>Email Id</td>
                          <td><b>: hr@afcindia.com</b></td>
                        </tr>
                        <tr>
                          <td>Contact No.</td>
                          <td><b>: 91.7353748474</b></td>
                        </tr>
                      </tbody>
                    </table>
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
