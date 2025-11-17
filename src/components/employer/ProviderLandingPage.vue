<script setup>
    import { RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <header class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <p>Welcome to Resource Management System</p>
          </div>

          <div class="col-md-8 col-sm-7 text-align-right">
            <span class="phone-icon"><i class="fa fa-phone"></i> 010-060-0160</span>
            <span class="date-icon"><i class="fa fa-calendar-plus-o"></i> 6:00 AM - 10:00 PM (Mon-Fri)</span>
            <span class="email-icon"><i class="fa fa-envelope-o"></i> <a href="#">info@bigsitesindia.com</a></span>
           <span ><i class="fa fa-sign-out logoutsize"></i> <RouterLink to="/login" >Logout</RouterLink></span>

          </div>
        </div>
      </div>
    </header>

    <main class="page-content">
      <RouterView />
    </main>

    <footer class="page-footer">
      <span class="cpright-text">
        Copyright &copy; 2025 Securo JOBZ | Design:
            <a href="http://www.bigsitesindia.com" target="blank">
                Bigsites India
            </a>
      </span>

      <span class="careers-text">
        <a href="#">Careers</a>
      </span>
    </footer>
  </div>
</template>

<script>
export default {
    mounted() {
        sessionStorage.setItem('loggedEmail', "");
    }
};
</script>

<style scoped>
  

  .line-top {
    border-top: 1px solid rgb(242, 242, 242)
  }

  .cpright-text {
    float: left;
    font-size: 12px;
    line-height: 24px;
    padding: 12px;
  }

  .careers-text {
    float: right;
    font-size: 12px;
    line-height: 24px;
    padding: 12px;
  }

  .page-header {
    grid-area: header;
    padding: 1px;
    display: flex;
    margin: 0;
    align-items: center;
  }


  .page-content {
    grid-area: content;
    padding: 10px;
    overflow: scroll;
  }

  .page-footer {
    grid-area: footer;
    text-align: center;
    padding: 10px;
  }

  .page-header, .page-footer {
    background-color: lightblue;
    color: navy;
  }

  .layout {
    position: fixed;
    top: 0; left: 0;
    bottom: 0; right: 0;

    display: grid;
    grid-template-rows: 0.3fr 0.15fr 3.45fr 0.1fr;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      "header header"
      "menu menu"
      "content content"
      "footer footer";
  }

 

  .cpright-text {
    float: left;
    font-size: 12px;
    line-height: 24px;
    padding: 12px;
  }

  .careers-text {
    float: right;
    font-size: 12px;
    line-height: 24px;
    padding: 12px;
  }

  .page-header {
    grid-area: header;
    padding: 1px;
    display: flex;
    margin: 0;
    align-items: center;
  }

  .page-header h1 {
    margin: 0;
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

  .page-content {
    grid-area: content;
    padding: 10px;
    overflow: scroll;
  }

  .page-footer {
    grid-area: footer;
    text-align: center;
    padding: 10px;
  }

  .page-header, .page-footer {
    background-color: lightblue;
    color: navy;
  }
  .logoutsize {
  font-size: 15px;
  color: red;
  margin-left: 20px;
  padding-left: 10px;
  display: inline-block;
  vertical-align: middle;
  flex-wrap: wrap;
  
  
}
</style>
