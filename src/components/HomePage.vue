<template>
  <div>
    <div id="home-page">
      <nav id="nav-bar" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="#" class="navbar-brand"> <b>CONFERENCE</b> </a>
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
              <a href="#" class="nav-item nav-link active"> <b>Home</b> </a>
              <a href="#" class="nav-item nav-link"> <b>About</b> </a>
              <a href="#" class="nav-item nav-link"> <b>Contact</b> </a>
              <a href="#" class="nav-item nav-link"> <b>Info</b> </a>
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
                    <textarea placeholder="Write a building info"> </textarea>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <textarea placeholder="Write a room no "></textarea>
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
    <div id="About" class="bg-warning p-4"><b> About </b></div>
    <div id="Contact" class="bg-info p-4"><b> Contact </b></div>
    <div id="Footer" class="bg-primary p-4">
      <b> Info </b>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#home-page {
  background-color: #0a090a;
  background: url("../assets/conference.jpg") no-repeat center center;
  opacity: 0.8;
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
  color: rgb(224, 11, 11);
}
textarea {
  border-radius: 0.5rem;
  border-collapse: collapse;
  border-style: #000 1px solid;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  width: 15rem;
  justify-content: center;
  display: flex;
  font-size: 1rem;
}
button {
  border-radius: 0.5rem;
  border-collapse: collapse;
  border-style: #000 1px solid;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  width: 15rem;
  justify-content: center;
  display: flex;
  font-size: 1rem;
}
</style>

