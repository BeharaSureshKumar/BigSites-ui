<template>
  <section id="agent-menu">
    <nav class="page-menu">
      <div class="navbar-header">
        <!-- lOGO TEXT HERE -->
        <a class="navbar-brand">
          <i style="color: #a5c422;" class="fa fa-h-square"></i>&nbsp;&nbsp;Securo Jobz
        </a>
      </div>

      <div class="nav navbar-nav navbar-right">
        <ul class="list-inline">
          <li><router-link to="/employer/myaccount" exact-active-class="active">My Account</router-link></li>
          <li><router-link to="/employer/dointerview" exact-active-class="active">Conduct Interview</router-link></li>
          <li><router-link to="/employer/schedulelist" exact-active-class="active">Schedule Interview</router-link></li>
          <li><router-link to="/employer/jdpost" exact-active-class="active">Publish Opportunity</router-link></li>
          <li><router-link to="/employer/publish" exact-active-class="active">Job Description</router-link></li>
   <li><i class="fa fa-sign-out logoutsize"></i> <router-link to="/" >Logout</router-link></li>

        </ul>
      </div>
    </nav>
  </section>
</template>

<style scoped>
.logoutsize {
    font-size: 15px;
    color: red;
    margin-left: 20px;
    padding-left: 10px;
    display: inline-block;
    vertical-align: middle;
    flex-wrap: wrap;
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

  .page-menu {
    grid-area: menu;
    padding-left: 35px;
    padding-top: 10px;
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

</style>
