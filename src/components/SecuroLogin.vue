
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
                            v-model="logemail" @input="validateEmail" required>
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
            targetUrl: "",
            errMessage: "",
            logemail: "",
            logpassword: "",
            successMessage: "",
        }
    },
    mounted() {
        sessionStorage.removeItem('loggedUser');
        sessionStorage.removeItem('agentDetails');
    },
    methods: {
        regUser() {
            sessionStorage.setItem('loggedEmail', 'R');
            this.$router.push('registration');
        },
        async fetchUser() {
            const cred = encodeBase64(this.logemail + "~~" + encodeBase64(this.logpassword));
            const url = this.$hostName + '/api/v1/users/cred';

            try {
                const res = await axios.get(url, {
                    headers: { credentials: cred }
                });

                if (!res.data || res.data.length === 0) {
                    this.errMessage = "Invalid Email / Password...";
                    return;
                }

                console.log('Logged User: ', res.data);
                sessionStorage.setItem('loggedUser', JSON.stringify(res.data));

                // 🔹 Redirect based on userType
                switch (res.data.userType) {
                    case "A":   // Agent
                        this.targetUrl = '/agent/myaccount';
                        this.$buefy.toast.open({
            message: "Welcome Agent! Successfully logged in.",
            type: "is-success"
        });
                        break;
                    case "J":   // Jobseeker
                        this.targetUrl = '/jobseeker/details';
                        this.$buefy.toast.open({
            message: "Welcome Job Seeker! Successfully logged in.",
            type: "is-success"
        });
                        break;
                        case "E":   // Employee
                        this.targetUrl = '/employer/myaccount';
                        this.$buefy.toast.open({
            message: "Welcome User! Successfully logged in.",
            type: "is-success",
        });
                        break;
                    default:
                        this.errMessage = "User type not recognized.";
                        return;
                }

                this.$router.push(this.targetUrl);
                // 🔹 Show SUCCESS popup
        // this.$buefy.toast.open({
        //     message: "Successfully logged in!",
        //     type: "is-success",
        //     duration: 2000, // shows for 2 seconds
        //     position: "is-top" // top of the page
        // });

        // // 🔹 Redirect after small delay
        // setTimeout(() => {
        //     this.$router.push(this.targetUrl);
        // }, 1000);

    } catch (err) {
        this.$buefy.toast.open({
            message: "Service cannot be reached...",
            type: "is-danger"
        });
        console.error('Error fetching user: ', err);
    }
    
    }
}
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
