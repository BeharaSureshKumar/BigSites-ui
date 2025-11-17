<script setup>
    import { RouterLink, useRouter } from 'vue-router'
</script>

<template>
    <nav class="page-menu">
        <!-- lOGO TEXT HERE -->
        <a class="navbar-brand">
            <i style="color: #a5c422;" class="fa fa-h-square"></i>&nbsp;&nbsp;Smart Jobz
            <span v-if="loggedAs !== ''">&nbsp;({{ loggedAs }})</span>
        </a>
<div class="nav navbar-nav navbar-right">
      <ul class="list-inline">
    <li><router-link to="/myaccount" exact-active-class="active">My Account</router-link></li>
    <li><router-link to="/dointerview" exact-active-class="active">Conduct Interview</router-link></li>
    <li><router-link to="/jobseeker" exact-active-class="active">Schedule Interview</router-link></li>
    <li><router-link to="/oppurtunitypost" exact-active-class="active">Add Opportunity</router-link></li>
    <!--<li><router-link to="/publish" exact-active-class="active">Job Description</router-link></li>-->

    <!-- <li><router-link to="/login" exact-active-class="active">Logout</router-link></li> -->

   
  </ul>
</div>
        <!-- <ul class="nav navbar-nav navbar-right">
            <li><RouterLink to="/myaccount">MyAccount</RouterLink></li>
            <li><RouterLink to="/dointerview">Conduct.Interview</RouterLink></li>
            <li><RouterLink to="/jobseeker">Schedule.Interview</RouterLink></li>
            <li><RouterLink to="/jdpost">Publish.Opportunity</RouterLink></li> -->
            <!--<li><RouterLink to="/publish">Job.Description</RouterLink></li>-->
            <!-- <li><RouterLink to="/">Logout</RouterLink></li>
        </ul> -->
    </nav>
</template>

<script>
export default {
    data() {
        return {
            loggedAs: ''
        }
    },
    mounted() {
        this.loggedAs = sessionStorage.getItem('loggedEmail');
        if (this.loggedAs === 'R') {
            this.loggedAs = '';
        } else if (this.loggedAs === '') {
            const router = useRouter();
            router.push({ path: '/' })
        };
    }
};
</script>

<style scoped>
    .txtcenter {
        text-align: center
    }
    .page-menu {
        padding-left: 35px;
    }

    .page-menu ul {
        list-style-type: none;
        padding: 0;
        display: flex;
    }

    .page-menu ul > li {
        font-size: 12px;
        padding: 0px 20px;
    }
    .list-inline {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0px;
}
.list-inline li a {
  text-decoration: none;
  padding: 4px 6px;
  color: black;
}
.list-inline li a.active {
  background-color: #007bff;
  color: white;
  border-radius: 10px;
}
</style>
