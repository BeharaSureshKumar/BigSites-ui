
<template>
    <section id="login">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <h4>Why Securo JOBZ ?</h4>
                    <h5>Securo JOBZ is smart platform to identify a smart candidate from the wide number of fresh profiles, guaranteed with no replication. Job Postings and search of Job Seekers made easy with appropraite selection process.</h5>
                </div>

                <div class="col-md-6 col-sm-6 loginForm">
                    <div class="row">
                        &nbsp;
                    </div>
                    
                    <b-field label="Email">
                        <b-input type="email"
                            v-model="logemail">
                        </b-input>
                    </b-field>

                    <b-field label="Password">
                        <b-input type="password"
                            v-model="logpassword"
                            password-reveal>
                        </b-input>
                    </b-field>
                    <div class="row">
                        <div class="col-md-3 col-sm-3">
                            <b-button type="is-success" @click="fetchUser">Sign in</b-button>
                            <!-- <b-button type="is-success" @click="login(logemail)">Sign in</b-button> -->
                        </div>
                        <div class="col-md-5 col-sm-5">
							<a @click="regUser" class="toRegister">Not a member yet 'Join Us'</a>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <a href="#" class="toRegister">Forgot Password</a>
                        </div>
                    </div>
                    <div class="row" v-if="errMessage !== ''">
                        <b-message type="is-danger">
                            {{ errMessage }}
                        </b-message>
                    </div>
                    <div class="row" v-else>
                        &nbsp;
                    </div>
                    
                </div>
            </div>
        </div>
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
            errMessage: "",
            logemail: "",
            logpassword: ""
        }
    },
    mounted() {
        sessionStorage.removeItem('loggedEmail');
    },
    methods: {
        regUser() {
            sessionStorage.setItem('loggedEmail', 'R');
            this.$router.push('registration');
        },
        async fetchUser() {
            const cred = encodeBase64(this.logemail + "~~" + encodeBase64(this.logpassword));
            await axios
                .get('http://localhost:8187/api/v1/users/cred', {
                    headers: {
                        credentials: cred,
                    },
                })
                .then(res => {
                    if (res.data === null || res.data === undefined || res.data.length === 0) {
                        this.errMessage = "Invalid Email / Password...";
                    } else {
                        if (res.data.userType === "E" || res.data.userType === "A") {
                            sessionStorage.setItem('loggedEmail', this.logemail);
                            this.$router.push('myaccount');
                        } else {
                            this.errMessage = "Email / Password invalid...";
                        }
                    }
                })
                .catch(err => {
                    this.errMessage = "Service cannot be reached or returned an error...";
                    console.error('Error fetching user: ', err)
            })
        },
    },
}
</script>

<style scoped>
    .loginForm {
        background-color: beige;
        border-radius: 25px;
    }
    .toRegister {
        font-size: 12px;
    }
</style>
