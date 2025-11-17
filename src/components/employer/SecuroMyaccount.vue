<template>
  <section id="myaccount">
    <form id="appointment-form" role="form" method="post" action="#">
      <div class="col-md-12 col-sm-12">
        <div class="col-md-6 col-sm-6">
          <b-message type="is-info" has-icon style="max-width: 550px;">
            <h4>Securo JOBZ invites "{{ d.employer_name }}".</h4>
            <p>Employer's information displayed is duely shared by you</p>
          </b-message>
          <div class="row">
            <ul class="nav navbar-nav navbar-center">
              <li>
                <RouterLink to="/publish">Opportunities(3)</RouterLink>
              </li>
              <li>
                <RouterLink to="/profapplied">Profiles(6)</RouterLink>
              </li>
              <li>
                <RouterLink to="/profconf1">Selected(2)</RouterLink>
              </li>
              <li>
                <RouterLink to="/profappt">Appointed(1)</RouterLink>
              </li>
            </ul>
          </div>
          <h4>My Account<a @click="doedit(d)">(Click to Update)</a></h4>

          <div class="div-Table">
            <div class="div-table-col3">
              <div class="divCell">Employee.Code</div>
              <div class="divCell">Organization</div>
              <div class="divCell">Email.ID</div>
              <div class="divCell">Phone</div>
              <div class="divCell">Incharge</div>
              <div class="divCell">Address</div>
              <div class="divCell">District</div>
              <div class="divCell">State</div>
              <div class="divCell">Pin</div>
            </div>
            <div class="div-table-col2">
              <div class="divCell">{{ d.employer_code }}</div>
              <div class="divCell">{{ d.employer_name }}</div>
              <div class="divCell">{{ d.employer_email }}</div>
              <div class="divCell">{{ d.employer_mob }}</div>
              <div class="divCell">{{ d.employer_incharge }}</div>
              <div class="divCell">{{ d.employer_address }}</div>
              <div class="divCell">{{ d.employer_district }}</div>
              <div class="divCell">{{ d.employer_state }}</div>
              <div class="divCell">{{ d.employer_pin }}</div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-6 col-sm-6">
          
          
           <div class = "row">
            <div class="text-align-center">
                <div class="div-Table">
                  <div class="div-table-row">  
                    <div class="div-table-col6">
                      <b-field>
                        <b-input type="password" placeholder="CHANGE PASSWORD" v-model="echngpwd" password-reveal />
                      </b-field>
                    </div>      
                    <div class="div-table-col6">
                      <b-field>
                        <b-input type="password" placeholder="CONFIRM CHANGE PASSWORD"v-model="econchngpw" password-reveal />
                      </b-field>
                    </div>  
                    <div class="div-table-col">
                        <b-button type="is-success" @click="goToAbout">Submit</b-button>
                    </div>    
                  </div>
                </div>  
            </div>  
       
          </div> 
        </div>   -->
        <div class="col-md-6 col-sm-6" v-if="visible">
          <div class="div-table">

            <div class="row">
              <div class="div-table-col3A">
                <div class="divCell">Code</div>
              </div>
              <div class="div-table-col2A">
                <div class="divCell"> <b-input maxlength="50" v-model="empcode"></b-input></div>
              </div>
            </div>
            <div class="row">
              <div class="div-table-col3A">
                <div class="divCell">Organization</div>
              </div>
              <div class="div-table-col2A">
                <div class="divCell"> <b-input maxlength="100" v-model="name"></b-input></div>
              </div>
            </div>
            <div class="row">
              <div class="div-table-col3A">
                <div class="divCell">Email</div>
              </div>
              <div class="div-table-col2A">
                <div class="divCell"> <b-input  maxlength="100" v-model="email" disabled></b-input></div>
              </div>
            </div>
            <div class="row">
              <div class="div-table-col3A">
                <div class="divCell">phone</div>
              </div>
              <div class="div-table-col2A">
                <div class="divCell"><b-input maxlength="100" v-model="mob"></b-input></div>
              </div>
            </div>
            <div class="row">
              <div class="div-table-col3A">
                <div class="divCell">Incharge</div>
              </div>
              <div class="div-table-col2A">
                <div class="divCell"><b-input maxlength="100" v-model="incharge"></b-input></div>
              </div>
            </div>
            <div class="row">
              <div class="div-table-col3A">
                <div class="divCell">Address</div>
              </div>
              <div class="div-table-col2A">
                <div class="divCell"><b-input maxlength="100" v-model="address"></b-input></div>
              </div>
            </div>
            <div class="row">
              <div class="div-table-col3A">
                <div class="divCell">District</div>
              </div>
              <div class="div-table-col2A">
                <div class="divCell"><b-input maxlength="100" v-model="district"></b-input></div>
              </div>
            </div>
            <div class="row">
              <div class="div-table-col3A">
                <div class="divCell">State</div>
              </div>
              <div class="div-table-col2A">
                <div class="divCell"><b-input maxlength="100" v-model="state"></b-input></div>
              </div>
            </div>
            <div class="row">
              <div class="div-table-col3A">
                <div class="divCell">Pin Code</div>
              </div>
              <div class="div-table-col2A">
                <div class="divCell"><b-input maxlength="100" v-model="pin"></b-input></div>
              </div>
            </div>

            <div class="div-table-col2">
              <!--<div class="divCell"><b-button v-if="canApprove" type="is-success" @click="doApprove">Approve</b-button></div>-->
              <div class="divCell"><b-button type="is-success" @click="doSubmit">Update</b-button></div>

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
      disabledFlag: true,
      canApprove: false,
      visible: false,
      code: "",
      name: "",
      email: "",
      mob: "",
      incharge: "",
      address: "",
      district: "",
      state: "",
      pin: "",

      d:
      {
        id: 1,
        employer_code: 'AFC4834',
        employer_name: 'AFC INDIA LTD',
        employer_email: 'mail@gmail.com',
        employer_mob: '9897676543',
        employer_incharge: 'Ms.Stella Mary',
        employer_address: 'Sector-2 Sriperumbatur',
        employer_district: 'Chennai',
        employer_state: 'Tamilnadu',
        employer_pin: '600232'
      }
    }
  },
  mounted() {

    if (sessionStorage.getItem('loggedEmail') === 'admin@afcindia.com') {
      this.canApprove = true;
    }
  },
  methods: {
    doedit(d) {
      this.visible = true;
      this.disabledFlag = true;
      this.empcode = d.employer_code;
      this.name = d.employer_name;
      this.mob = d.employer_mob;
      this.email = d.employer_email;
      this.address = d.employer_address;
      this.district = d.employer_district;
      this.state = d.employer_state;
      this.pin = d.employer_pin;
      this.incharge=d.employer_incharge;

     // sessionStorage.setItem('jsProfile', d.agent_code);
    },
    viewJd(d) {
      this.disabledFlag = true;
      this.code = d.employer_code;
      this.name = d.employer_name;
      this.email = d.employer_email;
      this.mob = d.employer_mob;

      this.incharge = d.employer_incharge;
      this.address = d.employer_address;
      this.district = d.employer_district;
      this.district = d.employer_state;
      this.pin = d.employer_pin;
      sessionStorage.setItem('jsProfile', d.seeker_id);
      sessionStorage.setItem('empName', d.employer_name);
    },
    doAdd() {
      this.disabledFlag = false;
      // this.seekerId = '';
      this.code = '';
      this.name = '';
      this.email = '';
      this.mob = '';
      this.incharge = '';
      this.address = '';
      this.district = '';
      this.state = '';

      this.pin = '';
    },
    doApprove() {
      console.log("Approve Button clicked !!")
    },
    doSubmit() {
      console.log("Submit Button clicked !!")
    },
  }
}
</script>
