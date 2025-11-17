<template>
    <section id="registration">
        <form id="appointment-form" role="form" method="post" action="#">
            <div class="col-md-12 col-sm-12">
                <div class="col-md-6 col-sm-6">
                    <h2>Registration</h2>
                    <p>First step to enroll with us as Bussiness Partners.</p>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="col-md-12 col-sm-12">
                        <span style="color: red">*&nbsp;</span>
                        <strong>Email:</strong>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        <b-field>
                            <b-input type="email"
                                v-model="myemail"
                                required
                                maxlength="30">
                            </b-input>
                        </b-field>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        &nbsp;
                    </div>

                    <div class="col-md-12 col-sm-12">
                        <span style="color: red">*&nbsp;</span>
                        <strong>Password:</strong>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        <b-field>
                            <b-input type="password"
                                v-model="mypassword"
                                required
                                password-reveal>
                            </b-input>
                        </b-field>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        &nbsp;
                    </div>

                    <div class="col-md-12 col-sm-12">
                        <span style="color: red">*&nbsp;</span>
                        <strong>Confirm Password</strong>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        <b-field>
                            <b-input type="password"
                                v-model="myconfpassword"
                                required
                                password-reveal>
                            </b-input>
                        </b-field>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        &nbsp;
                    </div>

                    <b-button type="is-success" @click="registerUser">Submit</b-button>

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
            myemail: '',
            mypassword: '',
            myconfpassword: '',
            errMessage: ''
        }
    },
    methods: {
        registerUser() {
            if (this.myemail === '' || this.mypassword === '' || this.myconfpassword === '') {
                this.errMessage = "Required fields are missing...";
            } else if (this.mypassword === this.myconfpassword) {
                axios
                    .post('http://localhost:8187/api/v1/users', {
                        userEmail: this.myemail,
                        userPass: encodeBase64(this.mypassword),
                        userType: 'E'
                    })
                    .then(res => {
                        console.log(res.data);
                        this.$router.push('/');
                    })
                    .catch(err => {
                        this.errMessage = "Service cannot be reached or returned an error...";
                        console.error('Error fetching user: ', err)
                })
            } else {
                this.errMessage = "Passwords do not match";
            }
        },
    },
}
</script>
