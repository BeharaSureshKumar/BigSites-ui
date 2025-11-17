<script setup>
  import { RouterLink, RouterView } from 'vue-router'
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
            <span class="phone-icon"><i class="fa fa-phone"></i>Valid till 25-04-2026</span>
            <span class="date-icon"><i class="fa fa-calendar-plus-o"></i> 6:00 AM - 10:00 PM (Mon-Fri)</span>
            <span class="email-icon"><i class="fa fa-envelope-o"></i> <a href="#">info@bigsitesindia.com</a></span>
            <!-- <span ><i class="fa fa-sign-out logoutsize"></i> <RouterLink to="/" >Logout</RouterLink></span> -->
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

<style scoped>
  .layout {
    position: fixed;
    top: 0; left: 0;
    bottom: 0; right: 0;
    display: grid;
    grid-template-rows: 0.3fr 3.55fr 0.15fr;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      "header header"
      "content content"
      "footer footer";
  }

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

  .page-header h1 {
    margin: 0;
  }

  .page-content {
    grid-area: content;
    padding: 10px;
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
  /* .logoutsize {
    font-size: 15px;
    color: red;
    margin-left: 20px;
    padding-left: 10px;
    display: inline-block;
    vertical-align: middle;
    flex-wrap: wrap;
  } */
</style>
