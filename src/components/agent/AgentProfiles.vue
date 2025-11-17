<template>
  <section id="jdpost">
    <div class="col-md-12 col-sm-12">
      <form id="appointment-form" role="form" method="post" action="#">
        <div class="col-md-6 col-sm-6">
          <CommonHead
            :agentNm = "agentNm"
            :agentEmail = "agentEmail"
          />
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="col-md-3 col-sm-3">All Profiles :</div>
              <div class="col-md-1 col-sm-1">
                <a @click=doAllProfView>{{ countdata[0] }}</a>
              </div>
              <div class="col-md-3 col-sm-3">Approved :</div>
              <div class="col-md-1 col-sm-1">
                <a @click=doApprProfView>{{ countdata[1] }}</a>
              </div>
              <div class="col-md-3 col-sm-3">UnApproved :</div>
              <div class="col-md-1 col-sm-1">
                <a @click=doUnapprProfView>{{ countdata[2] }}</a>
              </div>
            </div>

            <div v-if="profVisible === 'P'">
              <h4>All Profiles - <a @click="doAdd">(Click to Add New Profiles)</a> </h4>
              <div class="col-md-12 col-sm-12 profile-table-head">
                <div class="col-md-4 col-sm-4 page-font"><b>Profile Email</b></div>
                <div class="col-md-4 col-sm-4 page-font"><b>Name</b></div>
                <div class="col-md-2 col-sm-2 page-font"><b>Approved</b></div>
                <div class="col-md-2 col-sm-2 page-font"><b>Comm</b></div>
              </div>

              <div class=" profile-table">
                <div class="col-md-12 col-sm-12" v-for="d in allProfileData" :key="d?.profileId">
                  <div class="col-md-4 col-sm-4 page-font">
                    <a @click="viewJd(d)">
                      <span style="color: blueviolet">{{ d?.profileEmail }}</span>
                    </a>
                  </div>
                  <div class="col-md-4 col-sm-4 page-font">{{ d?.profileNm }}</div>
                  <div class="col-md-2 col-sm-2 page-font">{{ d?.profileApproveFlag }}</div>
                  <div class="col-md-2 col-sm-2 page-font">{{ d?.profileCommissionFlag }}</div>
                </div>
              </div>
            </div>

            <div v-else-if="profVisible === 'A'">
              <h4>Profiles(Approved)</h4>
              <div class="col-md-12 col-sm-12 profile-table-head">
                <div class="col-md-4 col-sm-4 page-font"><b>Profile Email</b></div>
                <div class="col-md-4 col-sm-4 page-font"><b>Name</b></div>
                <div class="col-md-2 col-sm-2 page-font"><b>Approved</b></div>
                <div class="col-md-2 col-sm-2 page-font"><b>Comm</b></div>
              </div>

              <div class=" profile-table">
                <div class="col-md-12 col-sm-12" v-for="d in apprProfileData" :key="d?.profileId">
                  <div class="col-md-4 col-sm-4 page-font">
                    <a @click="viewJd(d)">
                      <span style="color: blueviolet">{{ d?.profileEmail }}</span>
                    </a>
                  </div>
                  <div class="col-md-4 col-sm-4 page-font">{{ d?.profileNm }}</div>
                  <div class="col-md-2 col-sm-2 page-font">{{ d?.profileApproveFlag }}</div>
                  <div class="col-md-2 col-sm-2 page-font">{{ d?.profileCommissionFlag }}</div>
                </div>
              </div>
            </div>

            <div v-else-if="profVisible === 'U'">
              <h4>Profiles(Unapproved)</h4>
              <div class="col-md-12 col-sm-12 profile-table-head">
                <div class="col-md-4 col-sm-4 page-font"><b>Profile Email</b></div>
                <div class="col-md-4 col-sm-4 page-font"><b>Name</b></div>
                <div class="col-md-2 col-sm-2 page-font"><b>Approved</b></div>
                <div class="col-md-2 col-sm-2 page-font"><b>Comm</b></div>
              </div>

              <div class=" profile-table">
                <div class="col-md-12 col-sm-12" v-for="d in unapprProfileData" :key="d?.profileId">
                  <div class="col-md-4 col-sm-4 page-font">
                    <a @click="viewJd(d)">
                      <span style="color: blueviolet">{{ d?.profileEmail }}</span>
                    </a>
                  </div>
                  <div class="col-md-4 col-sm-4 page-font">{{ d?.profileNm }}</div>
                  <div class="col-md-2 col-sm-2 page-font">{{ d?.profileApproveFlag }}</div>
                  <div class="col-md-2 col-sm-2 page-font">{{ d?.profileCommissionFlag }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-scroll" v-if="visible">
          <h4 style="color: slateblue;">Profile Details
            <span v-if="profVisible === 'U'">
              <a @click="toggleEdit($event)">
                <span v-if="isEditing">(Click to View)</span>
                <span v-else>(Click to Update)</span>
              </a>
            </span>
          </h4>

          <div class="row">
            <div class="col-md-12 col-sm-12 mb-0">
              <div class="col-md-4 col-sm-4">
                <label class="item">Name</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-input maxlength="50" v-model="name"></b-input>
                </div>
                <div v-else>
                  {{ name }}
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 mb-0">
              <div class="col-md-4 col-sm-4">
                <label class="item">Date Of Birth</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-input maxlength="10" v-model="dob"></b-input>
                </div>
                <div v-else>
                  {{ dob }}
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 mb-2">
              <div class="col-md-4 col-sm-4">
                <label class="item">Gender</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-select v-model="gender">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="T">Transgender</option>
                  </b-select>
                </div>
                <div v-else>
                  <span v-if="gender==='M'">Male</span>
                  <span v-else-if="gender==='F'">Female</span>
                  <span v-else>Transgender</span>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 mb-2">
              <div class="col-md-4 col-sm-4">
                <label class="item">Mobile</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-input v-model="mobile"></b-input>
                </div>
                <div v-else>
                  {{ mobile }}
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 mb-2">
              <div class="col-md-4 col-sm-4">
                <label class="item">Email</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-input placeholder="Email" type="email" v-model="email"></b-input>
                </div>
                <div v-else>
                  {{ email }}
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 mb-2">
              <div class="col-md-4 col-sm-4">
                <label class="item">Address</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-input type="textarea" v-model="address"></b-input>
                </div>
                <div v-else>
                  <b-input type="textarea" v-model="address" readonly></b-input>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 mb-2">
              <div class="col-md-4 col-sm-4">
                <label class="item">District</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-input v-model="district"></b-input>
                </div>
                <div v-else>
                  {{ district }}
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 mb-2">
              <div class="col-md-4 col-sm-4">
                <label class="item">State</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-input v-model="state"></b-input>
                </div>
                <div v-else>
                  {{ state }}
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 mb-2">
              <div class="col-md-4 col-sm-4">
                <label class="item">Pincode</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-input v-model="pincode"></b-input>
                </div>
                <div v-else>
                  {{ pincode }}
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 mb-2">
              <div class="col-md-4 col-sm-4">
                <label class="item">Resume</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                <div v-if="isEditing">
                  <b-input type="textarea" v-model="resume"></b-input>
                </div>
                <div v-else>
                  <b-input type="textarea" v-model="resume" readonly></b-input>
                </div>
              </div>
            </div>

            <div v-if="!addVisible" class="col-md-12 col-sm-12 mb-2">
              <div class="col-md-4 col-sm-4">
                <label class="item">Created Date</label>
              </div>
              <div class="col-md-1 col-sm-1">
                <label class="item">:</label>
              </div>
              <div class="col-md-7 col-sm-7">
                {{ createDate }}
              </div>
            </div>
          </div>

          <span v-if="isEditing">
            <b-button class="button-wrapper" type="is-success" @click="doSubmit">
              <span v-if="addVisible">Submit</span>
              <span v-else>Update</span>
            </b-button>
          </span>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import CommonHead from './CommonHead.vue';
export default {
  components: {
    CommonHead,
  },
  data() {
    return {
      visible: false,
      addVisible: false,
      disabledFlag: true,
      canApprove: false,
      isEditing: false,
      profileId: -1,
      agentId: -1,
      agentNm: "",
      agentEmail: "",
      successMessage: "",
      profVisible: 'P',
      agentProfileData: {},
      name: "",
      mobile: "",
      email: "",
      address: "",
      district: "",
      state: "",
      resume: "",
      pincode: "",
      createDate: "",
      proapr: "",
      commflg: "",
      upiid: "",
      bankAccount: "",
      cbConfirm: "No",
      ifscCode: "",
      dob: "",
      resume: "",
      gender: "",
      jsprof: "",
      countdata: ["", "", ""],
      allProfileData: [],
      apprProfileData: [],
      unapprProfileData: [],
    };
  },
  mounted() {
    this.extractFromStorage('loggedUser');
    if ("SUCCESS" === this.successMessage) {
      this.extractFromStorage('agentDetails');
      if ("SUCCESS" === this.successMessage) {
        this.fetchProfileCounts(this.agentId);
        this.fetchProfiles(this.agentId);
      }
    }
  },
  methods: {
    extractFromStorage(o) {
      this.successMessage = "";
      const sessionObject = sessionStorage.getItem(o);
      if (null === sessionObject || undefined === sessionObject || sessionObject.length === 0) {
        if (o === 'loggedUser') {
          this.$router.push('');
        }
      } else {
        let storedObject = null;
        if (sessionObject) {
          try {
            storedObject = JSON.parse(sessionObject);
          } catch (e) {
            storedObject = null;
          }
        }

        if (null === storedObject || undefined === storedObject || storedObject.length === 0) {
          console.error("Error parsing JSON from sessionStorage:", e);
        } else {
          if (o === 'loggedUser') {
            if (storedObject.userType === 'A') {
              this.agentEmail = storedObject.userEmail;
              this.successMessage = "SUCCESS";
            } else {
              this.$router.push('');
            }
          } else if (o === 'agentDetails') {
            this.agentId = storedObject.agentId;
            this.agentNm = storedObject.agentNm;
            this.successMessage = "SUCCESS";
          }
        }
      }
    },

    async fetchProfileCounts(id) {
      const url = this.$hostName + '/api/v1/agents/profileCounts/' + id;
      await axios.get(url)
      .then(res => {
        console.log('=====>>> ', res.data)
        this.countdata = res.data
      })
      .catch(err => {
        this.countdata = ["0", "0", "0"];
        console.error('Error fetching counts: ', err)
      })
    },

    async fetchProfiles(id) {
      const url = this.$hostName + '/api/v1/agents/profiles/' + id;

      await axios.get(url)
      .then(res => {
        console.log('=====>>> ', res.data)
        this.allProfileData = res.data
      })
      .catch(err => {
        this.allProfileData = [];
        console.error('Error fetching profiles: ', err)
      })
    },

    async fetchProfilesAppr(id) {
      const url = this.$hostName + '/api/v1/agents/profilesApprove/' + id;
      await axios.get(url)
      .then(res => {
        console.log('=====>>> ', res.data)
        this.apprProfileData = res.data
      })
      .catch(err => {
        this.apprProfileData = [];
        console.error('Error fetching Approved profiles: ', err)
      })
    },

    async fetchProfilesUnappr(id) {
      const url = this.$hostName + '/api/v1/agents/profilesUnapprove/' + id;

      await axios.get(url)
      .then(res => {
        console.log('=====>>> ', res.data)
        this.unapprProfileData = res.data
      })
      .catch(err => {
        this.unapprProfileData = [];
        console.error('Error fetching Unapproved profiles: ', err)
      })
    },

    toggleEdit(event) {
      event.preventDefault();
      this.isEditing = !this.isEditing;
    },

    viewJd(d) {
      this.visible = true;
      this.addVisible = false;
      this.disabledFlag = false;
      this.profileId = d.profileId;
      this.name = d.profileNm;
      this.mobile = d.profileMob;
      this.email = d.profileEmail;
      this.address = d.profileAddr;
      this.district = d.profileDist;
      this.state = d.profileState;
      this.resume = d.profileResume;
      this.pincode = d.profilePin;
      this.createDate = d.profileCreateDate;
      this.proapr = d.profileApproveFlag;
      this.commflg = d.profileCommissionFlag;
      this.dob = d.profileDob;
      this.gender = d.profileGender;
    },

    doAllProfView() {
      this.profVisible = 'P'
      this.visible = false
      this.addVisible = false
      this.disabledFlag = true
      this.canApprove = false
      this.isEditing = false
      this.fetchProfiles(this.agentId)
    },

    doApprProfView() {
      this.profVisible = 'A'
      this.visible = false
      this.addVisible = false
      this.disabledFlag = true
      this.canApprove = false
      this.isEditing = false
      this.fetchProfilesAppr(this.agentId)
    },

    doUnapprProfView() {
      this.profVisible = 'U'
      this.visible = false
      this.addVisible = false
      this.disabledFlag = true
      this.canApprove = false
      this.isEditing = false
      this.fetchProfilesUnappr(this.agentId)
    },

    doAdd() {
      this.addVisible = true;
      this.visible = true;
      this.isEditing = true
      this.name = "";
      this.dob = "";
      this.gender = "";
      this.mobile = "";
      this.resume = "";
      this.email = "";
      this.address = "";
      this.district = "";
      this.state = "";
      this.resume = "";
      this.pincode = "";
    },

    async doSubmit() {
      this.agentProfileData.profileNm = this.name;
      this.agentProfileData.profileDob = this.dob;
      this.agentProfileData.profileGender = this.gender;
      this.agentProfileData.profileMob = this.mobile;
      this.agentProfileData.profileEmail = this.email;
      this.agentProfileData.profileAddr = this.address;
      this.agentProfileData.profileDist = this.district;
      this.agentProfileData.profileState = this.state;
      this.agentProfileData.profilePin = this.pincode;
      this.agentProfileData.profileResume = this.resume;

      if (this.addVisible) {
        console.log("Insert Profile Record: Agent Id ===>> ", this.agentId);
        if (0 < this.agentId) {
          const url = this.$hostName + '/api/v1/agents/profiles/' + this.agentId;
          await axios
          .post(url, this.agentProfileData)
          .then(res => {
            console.log('=====>>> ', res.data)
            this.doUnapprProfView()
          })
          .catch(err => {
            console.error('Error creating agent profile: ', err)
          })
        }
      } else {
        console.log("Update Profile Record: Profile Id ===>> ", this.profileId);
        if (0 < this.profileId) {
          const url = this.$hostName + '/api/v1/profiles/agent/' + this.profileId;
          await axios
          .patch(url, this.agentProfileData)
          .then(res => {
            console.log('=====>>> ', res.data)
            this.doUnapprProfView()
          })
          .catch(err => {
            console.error('Error modifying agent profile: ', err)
          })
        }
      }
    },
  },
};
</script>

<style scoped>
  .padding8 {
    padding-top: 8px;
  }

  .item {
    font-weight: 700;
    display: flex;
  }

  .col-scroll {
    max-height: 360px;
    overflow-y: scroll;
  }

  .profile-table-head {
    background-color: #ccc;
    border: 1px solid;
    display: flex;
  }

  .profile-table {
    overflow-y: scroll;
    max-height: 150px;
    border: 1px solid;
    background-color: SeaShell;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .page-font {
    font-size: 14px;
  }

  .compact-field {
    margin-bottom: 0.25rem;
    /* tighter spacing when editing */
  }
</style>