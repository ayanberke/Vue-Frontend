<template>
  <div>
    <div id="home-page">
      <nav id="nav-bar" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">CONFY</a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" class="nav-item nav-link active">Home</a>
              <a href="#" class="nav-item nav-link">Profiles</a>
              <a href="#" class="nav-item nav-link">Messages</a>
              <a href="#" class="nav-item nav-link">Reports</a>
            </div>
            <div class="navbar-nav ms-auto">
              <a href="#" class="nav-item nav-link">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
   
    

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
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

/*ids*/
#home-page {
  background: url("../assets/conference.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
}
#nav-bar {
  opacity: 0.7;
}

/*classes*/
.search-sec {
  margin: -400px 300px;
  width: 70%;
  padding: 10px;
  background: rgba(145, 132, 129, 0.4);
  
}
.text-field {
  margin: -800px 100px;
}

.wrn-btn {
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
}


</style>
