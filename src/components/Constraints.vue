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
              <a href="#" class="nav-item nav-link active" @click="goToHome"> <b>Home</b> </a>
              <a href="#" class="nav-item nav-link" @click="goToPapers"> <b>Paper List</b> </a>
              <a href="#" class="nav-item nav-link"> <b>About Us</b> </a>
            </div>
          </div>
        </div>
      </nav>
      <section class="search-sec">
        <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <b-card no-body>
                    <b-tabs v-model="tabIndex" card>
                      <b-tab title="DAY 1" :title-link-class="linkClass(0)">
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                        <label> <b>Number of Parallel Sessions </b> </label>
                          <input
                            type="text"
                            placeholder=" Enter a number"
                            id="session1"
                            name="session1"
                          />
                        </div>
                        
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session Start Time</b> </label>
                          <input
                          
                          type="text"
                          placeholder="Enter start time"
                            name="appt"
                            required
                            id="stime1"
                            
                          />
                        </div>

                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime1"
                           
                          />
                        </div>
                        <div class="buttonsave" id="save1" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg bg-light"
                            @click="saveArray1"
                          >
                            Save
                          </button>
                        </div>
                        
                      </b-tab>
                      <b-tab title="DAY 2" :title-link-class="linkClass(1)">
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          id="parallelsessioncount2"
                          style="float:left;"
                        >
                        <label> <b>Number of Parallel Sessions</b> </label>
                          <input
                            type="text"
                            placeholder=" Enter a number "
                            id="session2"
                            name="session2"
                          />
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session Start Time</b> </label>
                          <input
                            type="text"
                            name="appt"
              
                            required
                            id="stime2"
                            
                          />
                        </div>

                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime2"
                            
                          />
                        </div>
                        <div class="buttonsave" id="save2" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg bg-light"
                            @click="saveArray2"
                          >
                            Save
                          </button>
                        </div>
                        
                      </b-tab>
                      <b-tab title="DAY 3" :title-link-class="linkClass(2)">
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          id="parallelsessioncount3"
                          style="float:left;"
                        >
                        <label> <b>Number of Parallel Sessions</b> </label>
                          <input
                            type="text"
                            placeholder=" Enter a number "
                            id="session3"
                            name="session3"
                          />
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session Start Time</b> </label>
                          <input
                            type="text"
                            
                            
                            id="stime3"
                            
                          />
                        </div>

                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime3"
                            
                          />
                        </div>
                        <div class="buttonsave" id="save3" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg bg-light"
                            @click="saveArray3"
                          >
                            Save
                          </button>
                        </div>
                        
                      </b-tab>
                      <b-tab title="DAY 4" :title-link-class="linkClass(3)">
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          id="parallelsessioncount4"
                          style="float:left;"
                        >
                        <label> <b>Number of Parallel Sessions</b> </label>
                          <input
                            type="text"
                            placeholder=" Enter a number "
                            id="session4"
                            name="session4"
                          />
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session Start Time</b> </label>
                          <input
                            type="text"
                            
                            id="stime4"
                            
                          />
                        </div>

                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime4"
                            
                          />
                        </div>
                        <div class="buttonsave" id="save4" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg bg-light"
                            @click="saveArray4"
                          >
                            Save
                          </button>
                        </div>
                        
                      </b-tab>
                      <b-tab title="DAY 5" :title-link-class="linkClass(4)">
                        
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          id="parallelsessioncount5"
                          style="float:left;"
                        >
                        <label> <b>Number of Parallel Sessions</b> </label>
                          <input
                            type="text"
                            placeholder=" Enter a number "
                            id="session5"
                            name="session5"
                          />
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session Start Time</b> </label>
                          <input
                            type="text"
                          
                
                            id="stime5"
                            
                          />
                        </div>

                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Session End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime5"
                            
                          />
                        </div>
                        <div class="buttonsave" id="save5" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg bg-light"
                            @click="saveArray5"
                          >
                            Save
                          </button>
                        </div>
                      
                      </b-tab>
                    </b-tabs>
                  </b-card>
                </div>
              </div>
            </div>
          
        </div>
      </section>
      <!--<div class="showlist" id="showlist">
        <b-button @click="modalShow = !modalShow">Show List</b-button>

        <b-modal v-model="modalShow">
          LIST
          <div class="edit" id="edit" style="float:right;">
            <b-button title="Edit">Edit </b-button>
          </div>
        </b-modal>
      </div>-->
      
    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      tabIndex: 0,
      modalShow: false,
      
      
    };
  },
  methods: {
    goToPapers(){
      this.$router.push('/papers');

    },
    goToHome(){
      this.$router.push('/');
    },
    goToConstraints(){
      this.$router.push('/constraints');

    },
    goToSchedule(){
      this.$router.push('/schedule')
    },
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
    saveArray1: function(event) {
    console.log("test");
    let sessioncount= document.getElementById("session1").value;
    let startime = document.getElementById("stime1").value;
    let endtime = document.getElementById("etime1").value;
    let day1 =1;
    let presentationduration='30';
    let sessionno = 1;

    
    //stime= startime.toString();
    //atime = andtime.toString();



     axios
        .post('http://localhost:8081/constraint/create', {

        
    "dayNo": day1,
    "parallelSessionCount": sessioncount,
    "sessionNo":sessionno,
    "startTime": startime,
    "endTime": endtime,
    "presentationDuration": presentationduration
        },
        {
        headers:{
        'Content-Type': 'application/json'
        }})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

  sessionno = sessionno+1;

  document.getElementById("session1").value = '';
  document.getElementById("stime1").value = '';
  document.getElementById("etime1").value = '';

    },
    saveArray2: function(event) {
    console.log("test");
    let sessioncount= document.getElementById("session2").value;
    let startime = document.getElementById("stime2").value;
    let endtime = document.getElementById("etime2").value;
    let day1 =2;
    let presentationduration='30';
    let sessionno = 1;

    
    //stime= startime.toString();
    //atime = andtime.toString();



     axios
        .post('http://localhost:8081/constraint/create', {

        
    "dayNo": day1,
    "parallelSessionCount": sessioncount,
    "sessionNo":sessionno,
    "startTime": startime,
    "endTime": endtime,
    "presentationDuration": presentationduration

        
         
        },
        {
        headers:{
        'Content-Type': 'application/json'
        }})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

  sessionno = sessionno+1;

  document.getElementById("session2").value = '';
  document.getElementById("stime2").value = '';
  document.getElementById("etime2").value = '';

    },
    saveArray3: function(event) {
    console.log("test");
    let sessioncount= document.getElementById("session3").value;
    let startime = document.getElementById("stime3").value;
    let endtime = document.getElementById("etime3").value;
    let day1 =3;
    let presentationduration='30';
    let sessionno = 1;

    
    //stime= startime.toString();
    //atime = andtime.toString();



     axios
        .post('http://localhost:8081/constraint/create', {

        
    "dayNo": day1,
    "parallelSessionCount": sessioncount,
    "sessionNo":sessionno,
    "startTime": startime,
    "endTime": endtime,
    "presentationDuration": presentationduration

        
         
        },
        {
        headers:{
        'Content-Type': 'application/json'
        }})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

  sessionno = sessionno+1;

  document.getElementById("session3").value = '';
  document.getElementById("stime3").value = '';
  document.getElementById("etime3").value = '';

    },
    saveArray4: function(event) {
    console.log("test");
    let sessioncount= document.getElementById("session4").value;
    let startime = document.getElementById("stime4").value;
    let endtime = document.getElementById("etime4").value;
    let day1 =4;
    let presentationduration='30';
    let sessionno = 1;

    
    //stime= startime.toString();
    //atime = andtime.toString();



     axios
        .post('http://localhost:8081/constraint/create', {

        
    "dayNo": day1,
    "parallelSessionCount": sessioncount,
    "sessionNo":sessionno,
    "startTime": startime,
    "endTime": endtime,
    "presentationDuration": presentationduration

        
         
        },
        {
        headers:{
        'Content-Type': 'application/json'
        }})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

  sessionno = sessionno+1;

  document.getElementById("session4").value = '';
  document.getElementById("stime4").value = '';
  document.getElementById("etime4").value = '';

    },
    saveArray5: function(event) {
    console.log("test");
    let sessioncount= document.getElementById("session5").value;
    let startime = document.getElementById("stime5").value;
    let endtime = document.getElementById("etime5").value;
    let day1 =5;
    let presentationduration='30';
    let sessionno = 1;

    
    //stime= startime.toString();
    //atime = andtime.toString();



     axios
        .post('http://localhost:8081/constraint/create', {

        
    "dayNo": day1,
    "parallelSessionCount": sessioncount,
    "sessionNo":sessionno,
    "startTime": startime,
    "endTime": endtime,
    "presentationDuration": presentationduration

        
         
        },
        {
        headers:{
        'Content-Type': 'application/json'
        }})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

  sessionno = sessionno+1;

  document.getElementById("session5").value = '';
  document.getElementById("stime5").value = '';
  document.getElementById("etime5").value = '';

    }
    
  }
};
</script>

<style scoped>
#home-page {
  background: url("../assets/background/constraint.jpg") no-repeat center center;
  -moz-background-size: 100% 100%; /* Firefox 3.6 */
  -o-background-size: 100% 100%; /* Opera 9.5 */
  -webkit-background-size: 100% 100%; /* Safari 3.0, Chrome */
  background-size: 100% 100%;
  min-height: 100vh;
  opacity: 0.9;
}

.buttonsave {
  height: 3rem;
  width: 3rem;
  position: relative;
  bottom: -6.5rem;
  right: 300px;
}
.showlist {
  height: 3rem;
  position: relative;
  top: -3rem;
  left: 10px;
}

.search-sec {
  margin: 15rem;
  position: relative;
  text-align: center;
  
}
select {
  border-radius: 0.5rem;
  margin: 0.3rem;
  padding: 0.3rem;
  width: 16.2rem;
  height: 2.1rem;
  display: flex;
  position: relative;
  top: -1.2rem;
  left: -0.1rem;
}
textarea {
  border-radius: 0.5rem;
  border-collapse: collapse;
  resize: none;
  margin: 2rem;
  padding: 0.3rem;
  width: 16rem;
  height: 2rem;
  justify-content: center;
  display: flex;
  font-size: 1rem;
}
input[type="time"] {
  border-radius: 0.5rem;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  width: 9.2rem;
  height: 2rem;
  justify-content: center;
  font-size: 1rem;
}
#icon {
  margin-left: 3px;
  display: block;
  max-width: 110px;
  opacity: 1;
}
#nav-bar {
  opacity: 0.9;
}
</style>
