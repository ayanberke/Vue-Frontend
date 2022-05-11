<template>
  <div>
    <div id="home-page">
      <nav
        id="nav-bar"
        class="navbar navbar-expand-lg sticky-top navbar-light bg-white"
      >
        <div class="container">
          <a href="#" class="navbar-brand"
            ><img id="icon" src="../assets/logo.png"
          /></a>
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
              <a href="#" class="nav-item nav-link"> <b>About Us</b> </a>
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
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="numberofroom">
                    <textarea placeholder="Enter Number Of Room " v-model="roomCount"> </textarea>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="numberofpaper">
                    <textarea placeholder="Enter Number of Paper " v-model="paperCount" > </textarea>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="numberofsession">
                    <textarea placeholder="Enter Number of Session " v-model="sessionCount"></textarea>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                    <label> <b>Start Time</b> </label>
                    <input type="time" name="appt" min="00:00" max="23:59" required  id="sessionstarttime"  v-model="sessionstarttime">
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                    <label> <b>End Time</b> </label>
                    <input type=time placeholder="Session End Time " id="sessionendtime"v-model="sessionendtime">
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="parallelsessioncount">
                    <textarea placeholder=" Enter Parallel Session Count " v-model="parallelsessionCount"></textarea>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="numberofbreak">
                    <textarea placeholder="Enter Number Of Break Time" v-model="breakCount" ></textarea>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="sessionduration">
                    <textarea placeholder="Enter One Session Duration" v-model="duration"></textarea>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="breaktime">
                    <textarea placeholder=" Enter Break Time" v-model="breaktime"></textarea>
                  </div>
                  <div class="sdate" >
                    <label> <b>Start Date</b> </label>
                    <input type="date" name="" max="" id="startdate">
                  </div>
                  <div class="edate" >
                    <label> <b>End Date</b> </label>
                    <input type="date" name="" max="" id="enddate">
                  </div>
                  <div class="buttonprev" id="prev">
                    <button type="button" class="btn btn-warning wrn-btn btn-lg" @click="goToPapers"> Previous Page </button>
                  </div>
                  <div class="buttonsch" id="schedule">
                    <button type="button" class="btn btn-warning wrn-btn btn-lg" v-on:click="postData()"> Schedule </button>
                  </div>
                 </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer class="bg-light text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Information</h5>
              <p>
                This is a web-based application that will schedule conferences using optimization.
                The application finds the most suitable conference program by optimization.
                Users schedule conferences and can view the scheduling result as a table.
              </p>
            </div>
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Mission</h5>

              <p>
                The purpose of the system is to solve problems that organizers face when planning their conferences more quickly and conveniently.
                The organizers will collect the information from the presenters and plan the day, time-slots and rooms of the conference with the help of the system.
                The possibility of conflict and loss of time will be prevented.


              </p>
            </div>
          </div>
        </div>
        <div
          class="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2022 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">confy.com</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {

  data (){
    return{
      roomCount:null,
      paperCount:null,
      sessionCount:null,
      timeInterval:null,
      duration:null,
      selectedDate:null,
      sessionstarttime:null,
      sessionendtime:null,
      parallelsessionCount:null,
      breakCount:null,
      breaktime:null,
      selected:" ",
    }
  },

  methods: {
    postData(){
      console.log(this.roomCount," ", this.paperCount, " ", this.sessionCount, " ", this.timeInterval," ",this.duration," ", this.selectedDate," ",this.selected);

    },
    goToPapers(){
      this.$router.push('/papers');

    }

  }
};
</script>

<style scoped>
#home-page {
  background: url("../assets/conference.jpg") no-repeat center center;
  -moz-background-size: 100% 100%;           /* Firefox 3.6 */
	-o-background-size: 100% 100%;           /* Opera 9.5 */
	-webkit-background-size: 100% 100%;           /* Safari 3.0, Chrome */
	background-size: 100% 100%;
  min-height: 100vh;
  opacity: 0.9;
}

#nav-bar {
  opacity: 0.9;
}

#icon {
  margin-left: 3px;
  display: block;
  max-width: 110px;
  opacity: 1;
}
.sdate{
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding:0.3rem;
  width: 16rem;
  height:2rem;
  position: relative;
  top: -0.5rem;
  right: 145px;
  justify-content: center;
  display: flex;
}
.edate{
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding:0.3rem;
  width: 16rem;
  height:2rem;
  position: relative;
  top: -0.5rem;
  left: -145px;
}
.buttonprev{
  height: 2rem;
  position: relative;
  top: -0.5rem;
  left: -100px
}
.buttonsch{
  height: 2rem;
  position: relative;
  top: -4.5rem;
  right: -100px
}
.search-sec div {
  margin: 1rem;
  position:relative;
  display: inline-block;
}
select{
  border-radius: 0.5rem;
  margin: 0.3rem;
  padding: 0.3rem;
  width: 16.2rem;
  height:2.1rem;
  display:flex;
  position: relative;
  top: -1.2rem;
  left: -0.1rem;
}
textarea{
  border-radius: 0.5rem;
  border-collapse: collapse;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  width: 16rem;
  height:2rem;
  justify-content:center;
  display:flex;
  font-size: 1rem;
}
input[type=date],input[type=time]{
  border-radius: 0.5rem;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  width: 9.2rem;
  height:2rem;
  justify-content:center;
  font-size: 1rem;
}


</style>
