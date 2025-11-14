<template>
    <section id="login">
        <div class="container">
            <div class="col-md-12 col-sm-12">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <b-message type="is-info" has-icon style="font-size: 12px;  max-width: 300px;">
                            <h4></h4>
                            <h2>
                                <a @click="regUser">
                                <span style="color: blue">Login</span>
                                </a>
                            </h2>    
                   

                        </b-message>
                    </div>

                    <div class="col-md-6 col-sm-6 loginForm">
                        <b-carousel>
                            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                                <section :class="`hero is-small is-${carousel.color}`">
                                    <div class="hero-body has-text-centered">
                                        <h1 class="title">{{carousel.text}}</h1>
                                    </div>
                                </section>
                             </b-carousel-item>
                        </b-carousel>
                        
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        methods: {
            regUser() {
                sessionStorage.setItem('loggedEmail', 'E');
                this.$router.push('myaccount');
            },
        },
        data(){
        return {
            carousels: [
                { text: 'Securo JOBZ Welcomes The Employers!!..', color: 'info' },
                { text: 'Securo JOBZ is the smart platform to identify a smart candidate from the wide number of fresh profiles, guaranteed with no replication. Job Postings and search of Job Seekers made easy with appropraite selection process.', color: 'primary' },
            
              
            ]
        }
    }
    }
</script>

