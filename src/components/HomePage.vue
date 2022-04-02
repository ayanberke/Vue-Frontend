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

      <h1 class="welcome-msg">
       :) GOZUM KANADI BERKE ASKMM :)
      </h1>

      <section class="search-sec">
        <div class="container">
          <form action="#" method="post" novalidate="novalidate">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <textarea placeholder="Enter Building Info"> </textarea>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <textarea placeholder="Enter Room No "></textarea>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <textarea placeholder="Enter Presenter "></textarea>
                  </div>
                     <label for="date"></label> 
                     <input type="date" id="date" name="date" /> 
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
  opacity: 0.9;
}
#nav-bar {
  opacity: 0.75;
}
.search-sec div {
  margin: 1rem;
  padding: 1rem;
  display: inline-block;
}
.welcome-msg{
  margin: 150px 100px;
  color:rgb(75, 73, 72);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px black, 0 0 25px rgb(102, 100, 98), 0 0 5px rgb(199, 190, 177);
  font-family:"Avenir", Helvetica, Arial, sans-serif, cursive;
  font-size: 50px;
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
label{
  border-radius: 0.5rem;
  border-collapse: collapse;
  border-style: #000 1px solid;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  width: 15rem;
  display: flex;
  font-size: 1rem;
  align-self: center;

 
}
</style>

