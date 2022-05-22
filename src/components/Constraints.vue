<template>
  <div>
    <div id="home-page">
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
                        <label> <b>Parallel Session Count</b> </label>
                          <input
                            type="text"
                            placeholder=" Enter Parallel Session Count "
                            id="session1"
                            name="session-1"
                          />
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Start Time</b> </label>
                          <input
                          
                          type="text"
                          placeholder="start time"
                            name="appt"
                            required
                            id="stime1"
                            
                          />
                        </div>

                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime1"
                           
                          />
                        </div>
                        <div class="buttonsave" id="save1" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg"
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
                        <label> <b>Parallel Session Count</b> </label>
                          <input
                            type="text"
                            placeholder=" Enter Parallel Session Count "
                            v-model="parallelsessionCount"
                            id="session2"
                            name="session2"
                          />
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Start Time</b> </label>
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
                          <label> <b>End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime2"
                            
                          />
                        </div>
                        <div class="buttonsave" id="save2" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg"
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
                        <label> <b>Parallel Session Count</b> </label>
                          <input
                            type="text"
                            placeholder=" Enter Parallel Session Count "
                            v-model="parallelsessionCount"
                            id="session3"
                            name="session3"
                          />
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Start Time</b> </label>
                          <input
                            type="text"
                            
                            
                            id="stime3"
                            
                          />
                        </div>

                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime3"
                            
                          />
                        </div>
                        <div class="buttonsave" id="save3" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg"
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
                        <label> <b>Parallel Session Count</b> </label>
                          <input
                            type="text"
                            placeholder=" Enter Parallel Session Count "
                            v-model="parallelsessionCount"
                            id="session4"
                            name="session4"
                          />
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Start Time</b> </label>
                          <input
                            type="text"
                            
                            id="stime4"
                            
                          />
                        </div>

                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime4"
                            
                          />
                        </div>
                        <div class="buttonsave" id="save4" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg"
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
                        <label> <b>Parallel Session Count</b> </label>
                          <input
                            type="text"
                            placeholder=" Enter Parallel Session Count "
                            v-model="parallelsessionCount"
                            id="session5"
                            name="session5"
                          />
                        </div>
                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>Start Time</b> </label>
                          <input
                            type="text"
                          
                
                            id="stime5"
                            
                          />
                        </div>

                        <div
                          class="col-lg-3 col-md-3 col-sm-12 p-0"
                          style="float:left;"
                        >
                          <label> <b>End Time</b> </label>
                          <input
                            type="text"
                            placeholder="Session End Time "
                            id="etime5"
                            
                          />
                        </div>
                        <div class="buttonsave" id="save5" style="float:left;">
                          <button
                            type="button"
                            class="btn btn-warning wrn-btn btn-lg"
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

  document.getElementById("session2").value = '';
  document.getElementById("stime2").value = '';
  document.getElementById("etime2").value = '';

    },
    saveArray3: function(event) {
    console.log("test");
    let sessioncount= document.getElementById("session3").value;
    let startime = document.getElementById("stime3").value;
    let endtime = document.getElementById("etime3").value;
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

  document.getElementById("session3").value = '';
  document.getElementById("stime3").value = '';
  document.getElementById("etime3").value = '';

    },
    saveArray4: function(event) {
    console.log("test");
    let sessioncount= document.getElementById("session4").value;
    let startime = document.getElementById("stime4").value;
    let endtime = document.getElementById("etime4").value;
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

  document.getElementById("session4").value = '';
  document.getElementById("stime4").value = '';
  document.getElementById("etime4").value = '';

    },
    saveArray5: function(event) {
    console.log("test");
    let sessioncount= document.getElementById("session5").value;
    let startime = document.getElementById("stime5").value;
    let endtime = document.getElementById("etime5").value;
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

  document.getElementById("session5").value = '';
  document.getElementById("stime5").value = '';
  document.getElementById("etime5").value = '';

    }
    
  }
};
</script>

<style scoped>
#home-page {
  background: url("../assets/conference.jpg") no-repeat center center;
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

.search-sec div {
  margin: 1rem;
  position: relative;
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
</style>
