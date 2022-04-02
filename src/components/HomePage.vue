<template>
  <div>
    <div id="home-page">
      <nav id="nav-bar" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="#" class="navbar-brand"> CONFERENCE </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bvetur.config.jss-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" class="nav-item nav-link active"> Home </a>
              <a href="#" class="nav-item nav-link"> Profiles </a>
              <a href="#" class="nav-item nav-link"> Messages </a>
              <a href="#" class="nav-item nav-link"> Reports </a>
            </div>
          </div>
        </div>
      </nav>

      <section class="search-sec">
        <div class="container">
          <form action="#" method="post" novalidate="novalidate">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>Select Building</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>Select Room</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select
                      class="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>Select Presenter</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <button type="button" class="btn btn-danger wrn-btn">
                      Schedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
    <div id="About" class="bg-warning p-4"> <b> About </b></div>
    <div id="Contact" class="bg-info p-4"> <b> Contact </b></div>
    <div id="Footer" class="bg-primary p-4"> <b> Info </b></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#home-page {
  background-color: #0a090a;
  background: url("../assets/conference.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
}
#about {
  min-height: 10vh;
}
#contact {
  background-color: #ffffff;
}
#footer {
  background-color: #050101;
}
.search-sec div {
  margin: 1rem;
  padding: 1rem;
  display: inline-block;
  float: none;
  vertical-align: bottom;
  text-align: center;
}
.search-sec div:hover {

  color: black;
}
.search-sec div:active {
  background-color: #04AA6D;
  color: white;
}
</style>

