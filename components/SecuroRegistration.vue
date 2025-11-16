<template>
    <section id="registration">
        <form id="appointment-form" role="form" method="post" action="#">
            <div class="col-md-6 col-sm-6">
                <h2>Register</h2>
                <p>First step to enroll with us as a Bussiness Partners.</p>
            </div>
            <div class="col-md-6 col-sm-6">
                <b-field label="Partner with us as">
                    <b-select
                        placeholder="Partner"
                        v-model="utype"
                        icon="user"
                        icon-pack="fa">
                        <option value="0">-- Select --</option>
                        <option value="E">Employer / Job Provider</option>
                        <option value="J">Job Seeker</option>
                        <option value="A">Agent</option>
                    </b-select>
                </b-field>

               <!--email-->
             <div class="col-md-4 col-sm-4">
             <label class="item">Email</label><span class="text-danger">*</span>
             </div>
             <b-field  label=""
             :type="myemail.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(myemail) ? 'is-danger' : ''"
             :message="myemail.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(myemail) 
              ? 'Enter valid Email' 
             : ''">
             <b-input  type="email"  v-model="myemail"  maxlength="50" placeholder="Enter Email"
             ></b-input>
             </b-field>

                <b-field label="Password">
                    <b-input type="password"
                        v-model="mypassword"
                        password-reveal>
                    </b-input>
                </b-field>

                <b-field label="Confirm Password">
                    <b-input type="password"
                        v-model="myconfpassword"
                        password-reveal>
                    </b-input>
                </b-field>
                <div class="row">
                    <div class="col-md-3 col-sm-3">
                <b-button type="is-success" @click="doRegister">Submit</b-button>
                </div>
                <div class="col-md-5 col-sm-5">
                    <b-button type="is-primary" @click="goToLogin" class="toRegister">
                        Already a member? Login
                    </b-button>
                    </div>
                </div>
            </div>

        </form>
    </section>
</template>

<script>
import axios from 'axios'
function encodeBase64(str) {
    try {
        return btoa(decodeURIComponent(encodeURIComponent(str)));
    } catch (e) {
        return 'Error: Could not encode the string.';
    }
}

export default {
  data() {
    return {
        utype: "0",
        myemail: "",
        mypassword: "",
        myconfpassword: "",
        targetUrl: "",
        userData: {}
    }
  },
  methods: {
    async doRegister() {
    this.userData.userEmail = this.myemail;
    this.userData.userPass = encodeBase64(this.mypassword);
    this.userData.userType = this.utype;

    const url = this.$hostName + '/api/v1/users';

    try {
        const res = await axios.post(url, this.userData);

        // ✅ Show Buefy success message
        this.$buefy.toast.open({
            message: 'Registration successful! Please login.',
            type: 'is-success',
            duration: 2000
        });

        // ✅ Wait and redirect to login page
        setTimeout(() => {
            this.$router.push('/');
        }, 1500);

    } catch (err) {
        console.error('Error creating user: ', err);

        // ✅ Optional error toast
        this.$buefy.toast.open({
            message: 'Registration failed! Try again.',
            type: 'is-danger'
        });
    }
},
    // async doRegister() {
    //     this.userData.userEmail = this.myemail;
    //     this.userData.userPass = encodeBase64(this.mypassword);
    //     this.userData.userType = this.utype;

    //     const url = this.$hostName + '/api/v1/users';
    //     await axios
    //     .post(url, this.userData)
    //     .then(res => {
    //         console.log('=====>>> ', res.data)
    //         switch(this.utype) {
    //             case "A":
    //                 this.targetUrl = '/agent/myaccount';
    //                 break;
    //             default:
    //                 break;
    //         }
    //         switch(this.utype) {
    //             case "J":
    //                 this.targetUrl = '/jobseeker/details';
    //                 break;
    //             default:
    //                 break;
    //         }
    //          switch(this.utype) {
    //             case "E":
    //                 this.targetUrl = '/employer/jdpost';
    //                 break;
    //             default:
    //                 break;
    //         }
    //         this.$router.push(this.targetUrl);
    //     })
    //     .catch(err => {
    //         console.error('Error creating user: ', err)
    //     })
    // },
    goToLogin() {
        this.$router.push('/');
    }
  },
}
</script>
