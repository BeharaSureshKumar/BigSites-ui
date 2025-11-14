<template>
    <section id="jdpostup">
        <form id="appointment-form" role="form" method="post" action="#">
          <div class="col-md-12 col-sm-12">
            <div class="col-md-6 col-sm-6">
                <h4>Update JD Code - AF47822</h4>
                <div class="div-Table">
                  <div class="div-table-col3">
                    <div  class="divCell">Designation</div>
                    <div  class="divCell">PostDate</div>
                    <div  class="divCell">LastDate</div>
                    
                    <div  class="divCell">Incharge</div>
                    <div  class="divCell">Email.ID</div>
                    <div  class="divCell">Description</div>
                  </div>
                  <div class="div-table-col2">
                    <div class="divCell">UX Designer</div>
                    <div class="divCell">29-01-2025</div>
                    <div class="divCell">30-02-2025</div>
                    
                    <div class="divCell">Ms.Stella</div>
                    <div class="divCell">hr@afcindia.com</div>
                    <div class="divCell"><p style="text-align: justify;">The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.</p></div>
                  </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
                <b-field label="Update the Designation 'Offered'" Vertical>
                    <b-input maxlength="18" v-model="name"></b-input>
                </b-field>
                
                <b-field label="Copy and paste updated text for 'Job Description'" Vertical>
                    <b-input maxlength="1000" type="textarea"></b-input>          
                </b-field>
                <b-field label="Enter the Last date for submission of 'Resume'">
                      <b-datepicker
                        v-model="selected"
                        :show-week-number="showWeekNumber"
                        :locale="locale"
                        placeholder="Click to select..."
                        icon="calendar-today"
                        :icon-right="selected ? 'close-circle' : ''"
                        icon-right-clickable
                        @icon-right-click="clearDate"
                        trap-focus>
                      </b-datepicker>
                    </b-field>
                <b-button type="is-success" @click="goToAbout">Update</b-button>
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
