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
              <a href="#" class="nav-item nav-link active" @click="goToHome">
                <b>Home</b>
              </a>
              <a href="#" class="nav-item nav-link active" @click="goToPapers">
                <b>Paper List</b>
              </a>
              <a
                href="#"
                class="nav-item nav-link active"
                @click="goToConstraints"
              >
                <b>Constraints</b>
              </a>
              <a href="#" class="nav-item nav-link active" @click="goToAboutUs">
                <b>About Us</b>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <h1 class="welcome-msg">Define Constraints</h1>

      <div class="container">
        <div class="col-lg-5 mx-auto">
          <b-card
            no-body
            body-class="text-center"
            style="max-width: 800px"
            class="mytitle2"
          >
            <b-tabs v-model="tabIndex" pills card align="center">
              <b-tab title="DAY 1" :title-link-class="linkClass(0)">
                <label>
                  <b style="float: right">Daily Start Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Exp= 09:00"
                  id="daystarttime_1"
                  name="daystarttime_1"
                  v-model="daystarttime_1"
                  autocomplete="off"
                  required
                />

                <br />

                <label>
                  <b style="float: right"> Daily End Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 18:00"
                  id="dayendtime_1"
                  name="dayendtime_1"
                  v-model="dayendtime_1"
                  autocomplete="off"
                  required
                />

                <br />

                <label>
                  <b style="float: right">Total # of Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="totalsessionnumber_1"
                  required
                  id="totalsessionnumber_1"
                  v-model="totalsessionnumber_1"
                  autocomplete="off"
                />

                <br />

                <label> <b style="float: right">Session Duration </b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="sessionduration_1"
                  id="sessionduration_1"
                  v-model="sessionduration_1"
                  autocomplete="off"
                />
                <br />
                <div class="mb-6" id="save1">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveinfo1"
                  >
                    Save the Day Info
                  </button>
                </div>
                <br />
                <br />
                <label>
                  <b style="float: right">Number of Parallel Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Enter a number "
                  id="session1"
                  name="session-1"
                  autocomplete="off"
                />

                <br />

                <label>
                  <b style="float: right">Presentation Duration</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  value="30"
                  name="appt"
                  required
                  id="pduration1"
                  autocomplete="off"
                />

                <br />

                <label> <b style="float: right">Session Start Time</b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 13:00"
                  name="appt"
                  required
                  id="stime1"
                  autocomplete="off"
                />

                <br />

                <label> <b style="float: right">Session End Time</b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 15:00"
                  id="etime1"
                  autocomplete="off"
                />
                <br />
                <label>
                  <b class="mytitle" style="float: left"
                    >Presentation Duration is set to 30 minutes</b
                  >
                </label>
                <br />
                <br />
                <tbody id="author-list-body"></tbody>
                <tbody class="thead-dark">
                  <tr></tr>
                </tbody>
                <br />

                <div class="mb-6" id="save1">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveArray1"
                  >
                    Save the Session Info
                  </button>
                </div>
              </b-tab>
              <b-tab title="DAY 2" :title-link-class="linkClass(1)">
                <label>
                  <b style="float: right">Daily Start Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Exp= 09:00"
                  id="daystarttime_2"
                  name="daystarttime_2"
                  v-model="daystarttime_2"
                  autocomplete="off"
                />

                <br />

                <label>
                  <b style="float: right"> Daily End Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 18:00"
                  name="dayendtime_2"
                  v-model="dayendtime_2"
                  required
                  id="dayendtime_2"
                  autocomplete="off"
                />

                <br />

                <label>
                  <b style="float: right"> Total # of Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="totalsessionnumber_2"
                  v-model="totalsessionnumber_2"
                  required
                  id="totalsessionnumber_2"
                  autocomplete="off"
                />

                <br />

                <label> <b style="float: right">Session Duration </b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="sessionduration_2"
                  v-model="sessionduration_2"
                  id="sessionduration_2"
                  autocomplete="off"
                />
                <br />
                <div class="mb-6" id="save1">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveinfo2"
                  >
                    Save the Day Info
                  </button>
                </div>
                <br />
                <br />
                <label>
                  <b style="float: right">Number of Parallel Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Enter a number"
                  id="session2"
                  name="session2"
                  autocomplete="off"
                />
                <br />

                <label>
                  <b style="float: right">Presentation Duration</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  value="30"
                  name="appt"
                  required
                  id="pduration2"
                  autocomplete="off"
                />

                <br />

                <label> <b style="float: right">Session Start Time</b> </label>
                <input
                  class="form-control"
                  placeholder="Exp = 13:00"
                  type="text"
                  name="appt"
                  required
                  id="stime2"
                  autocomplete="off"
                />
                <br />

                <label> <b style="float: right">Session End Time</b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 15:00 "
                  id="etime2"
                  autocomplete="off"
                />
                <br />
                <label>
                  <b class="mytitle" style="float: left"
                    >Presentation Duration is set to 30 minutes</b
                  >
                </label>
                <br />
                <br />
                <tbody id="author-list-body2"></tbody>
                <tbody class="thead-dark">
                  <tr></tr>
                </tbody>
                <br />

                <div class="mb-6" id="save2">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveArray2"
                  >
                    Save the Session Info
                  </button>
                </div>
              </b-tab>
              <b-tab title="DAY 3" :title-link-class="linkClass(2)">
                <label>
                  <b style="float: right">Daily Start Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Exp= 09:00"
                  id="daystarttime_3"
                  name="daystarttime_3"
                  v-model="daystarttime_3"
                  autocomplete="off"
                />

                <br />

                <label>
                  <b style="float: right">Daily End Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 18:00"
                  name="dayendtime_3"
                  v-model="dayendtime_3"
                  required
                  id="dayendtime_3"
                  autocomplete="off"
                />

                <br />

                <label>
                  <b style="float: right"> Total # of Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="totalsessionnumber_3"
                  v-model="totalsessionnumber_3"
                  required
                  id="totalsessionnumber_3"
                  autocomplete="off"
                />

                <br />

                <label> <b style="float: right">Session Duration </b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="sessionduration_3"
                  v-model="sessionduration_3"
                  id="sessionduration_3"
                  autocomplete="off"
                />
                <br />
                <div class="mb-6" id="save1">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveinfo3"
                  >
                    Save the Day Info
                  </button>
                </div>
                <br />
                <br />
                <label>
                  <b style="float: right">Number of Parallel Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Enter a number "
                  id="session3"
                  name="session3"
                  autocomplete="off"
                />
                <br />

                <label>
                  <b style="float: right">Presentation Duration</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  value="30"
                  name="appt"
                  required
                  id="pduration3"
                  autocomplete="off"
                />

                <br />
                <label> <b style="float: right">Session Start Time</b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 13:00"
                  id="stime3"
                  autocomplete="off"
                />
                <br />

                <label> <b style="float: right">Session End Time</b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 15:00"
                  id="etime3"
                  autocomplete="off"
                />
                <br />
                <label>
                  <b class="mytitle" style="float: left"
                    >Presentation Duration is set to 30 minutes</b
                  >
                </label>
                <br />
                <br />
                <tbody id="author-list-body3"></tbody>
                <tbody class="thead-dark">
                  <tr></tr>
                </tbody>
                <br />

                <div class="mb-6" id="save3">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveArray3"
                  >
                    Save the Session Info
                  </button>
                </div>
              </b-tab>
              <b-tab title="DAY 4" :title-link-class="linkClass(3)">
                <label>
                  <b style="float: right">Daily Start Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Exp= 09:00"
                  id="daystarttime_4"
                  v-model="daystarttime_4"
                  name="daystarttime_4"
                  autocomplete="off"
                />

                <br />

                <label>
                  <b style="float: right">Daily End Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 18:00"
                  name="dayendtime_4"
                  v-model="dayendtime_4"
                  required
                  id="dayendtime_4"
                  autocomplete="off"
                />

                <br />

                <label>
                  <b style="float: right"> Total # of Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="totalsessionnumber_4"
                  v-model="totalsessionnumber_4"
                  required
                  id="totalsessionnumber_4"
                  autocomplete="off"
                />

                <br />

                <label> <b style="float: right">Session Duration </b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="sessionduration_4"
                  v-model="sessionduration_4"
                  id="sessionduration_4"
                  autocomplete="off"
                />
                <br />
                <div class="mb-6" id="save1">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveinfo4"
                  >
                    Save the Day Info
                  </button>
                </div>
                <br />
                <br />
                <label>
                  <b style="float: right">Number of Parallel Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Enter a number "
                  id="session4"
                  name="session4"
                  autocomplete="off"
                />
                <br />

                <label>
                  <b style="float: right">Presentation Duration</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  value="30"
                  name="appt"
                  required
                  id="pduration4"
                  autocomplete="off"
                />

                <br />
                <label> <b style="float: right">Session Start Time</b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 13:00"
                  id="stime4"
                  autocomplete="off"
                />
                <br />

                <label> <b style="float: right">Session End Time</b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 15:00"
                  id="etime4"
                  autocomplete="off"
                />
                <br />
                <label>
                  <b class="mytitle" style="float: left"
                    >Presentation Duration is set to 30 minutes</b
                  >
                </label>
                <br />
                <br />
                <tbody id="author-list-body4"></tbody>
                <tbody class="thead-dark">
                  <tr></tr>
                </tbody>
                <br />

                <div class="mb-6" id="save4">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveArray4"
                  >
                    Save the Session Info
                  </button>
                </div>
              </b-tab>
              <b-tab title="DAY 5" :title-link-class="linkClass(4)">
                <label>
                  <b style="float: right">Daily Start Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Exp= 09:00"
                  id="daystarttime_5"
                  name="daystarttime_5"
                  v-model="daystarttime_5"
                  autocomplete="off"
                />

                <br />

                <label>
                  <b style="float: right"> Daily End Time</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 18:00"
                  name="dayendtime_5"
                  required
                  id="dayendtime_5"
                  v-model="dayendtime_5"
                  autocomplete="off"
                />

                <br />

                <label>
                  <b style="float: right"> Total # of Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="totalsessionnumber_5"
                  v-model="totalsessionnumber_5"
                  required
                  id="totalsessionnumber_5"
                  autocomplete="off"
                />

                <br />

                <label> <b style="float: right">Session Duration </b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  name="sessionduration_5"
                  v-model="sessionduration_5"
                  id="sessionduration_5"
                  autocomplete="off"
                />
                <br />
                <div class="mb-6" id="save1">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveinfo5"
                  >
                    Save the Day Info
                  </button>
                </div>
                <br />
                <br />
                <label>
                  <b style="float: right">Number of Parallel Sessions</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" Enter a number "
                  id="session5"
                  name="session5"
                  autocomplete="off"
                />
                <br />

                <label>
                  <b style="float: right">Presentation Duration</b>
                </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 30"
                  value="30"
                  name="appt"
                  required
                  id="pduration5"
                  autocomplete="off"
                />

                <br />

                <label> <b style="float: right"> Session Start Time</b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 13:00"
                  id="stime5"
                  autocomplete="off"
                />
                <br />

                <label> <b style="float: right">Session End Time</b> </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Exp = 15:00"
                  id="etime5"
                  autocomplete="off"
                />
                <br />
                <label>
                  <b class="mytitle" style="float: left"
                    >Presentation Duration is set to 30 minutes</b
                  >
                </label>
                <br />
                <br />
                <tbody id="author-list-body5"></tbody>
                <tbody class="thead-dark">
                  <tr></tr>
                </tbody>
                <br />

                <div class="mb-6" id="save5">
                  <button
                    type="button"
                    class="btn btn-primary wrn-btn btn-lg"
                    @click="saveArray5"
                  >
                    Save the Session Info
                  </button>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
      <br />
    </div>
    <br />
    <footer class="bg-light text-center text-lg-start">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0)">
        © 2022 Copyright:
        <a class="text-dark" href="https://confy.com/">confy.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tabIndex: 0,
      modalShow: false
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
      let sessioncount = document.getElementById("session1").value;
      let startime = document.getElementById("stime1").value;
      let endtime = document.getElementById("etime1").value;
      let presentationduration = document.getElementById("pduration1").value;
      let day1 = 1;
      let sessionno = 1;

      //stime= startime.toString();
      //atime = andtime.toString();

      axios
        .post(
          "http://localhost:8081/constraint/create",
          {
            dayNo: day1,
            parallelSessionCount: sessioncount,
            sessionNo: sessionno,
            startTime: startime,
            endTime: endtime,
            presentationDuration: presentationduration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;

      document.getElementById(
        "author-list-body"
      ).innerHTML += `<b> Session: </b> ${sessionno} , <b> # of parallel session: </b> ${sessioncount}, <b> Presentation duration: </b> ${presentationduration}, <b> Start time: </b> ${startime}, <b> End time: </b> ${endtime} `;

      document.getElementById("session1").value = "";
      document.getElementById("stime1").value = "";
      document.getElementById("etime1").value = "";
      document.getElementById("pduration1").value = "";
    },
    saveArray2: function(event) {
      console.log("test");
      let sessioncount = document.getElementById("session2").value;
      let startime = document.getElementById("stime2").value;
      let endtime = document.getElementById("etime2").value;
      let presentationduration = document.getElementById("pduration2").value;

      let day1 = 2;
      let sessionno = 2;

      axios
        .post(
          "http://localhost:8081/constraint/create",
          {
            dayNo: day1,
            parallelSessionCount: sessioncount,
            sessionNo: sessionno,
            startTime: startime,
            endTime: endtime,
            presentationDuration: presentationduration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;

      document.getElementById(
        "author-list-body2"
      ).innerHTML += `<b> Session: </b> ${sessionno} , <b> # of parallel session: </b> ${sessioncount}, <b> Presentation duration: </b> ${presentationduration}, <b> Start time: </b> ${startime}, <b> End time: </b> ${endtime}`;

      document.getElementById("session2").value = "";
      document.getElementById("stime2").value = "";
      document.getElementById("etime2").value = "";
      document.getElementById("pduration2").value = "";
    },
    saveArray3: function(event) {
      console.log("test");
      let sessioncount = document.getElementById("session3").value;
      let startime = document.getElementById("stime3").value;
      let endtime = document.getElementById("etime3").value;
      let presentationduration = document.getElementById("pduration3").value;
      let day1 = 3;
      let sessionno = 3;

      axios
        .post(
          "http://localhost:8081/constraint/create",
          {
            dayNo: day1,
            parallelSessionCount: sessioncount,
            sessionNo: sessionno,
            startTime: startime,
            endTime: endtime,
            presentationDuration: presentationduration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;

      document.getElementById(
        "author-list-body3"
      ).innerHTML += `<b> Session: </b> ${sessionno} , <b> # of parallel session: </b> ${sessioncount}, <b> Presentation duration: </b> ${presentationduration}, <b> Start time: </b> ${startime}, <b> End time: </b> ${endtime} `;

      document.getElementById("session3").value = "";
      document.getElementById("stime3").value = "";
      document.getElementById("etime3").value = "";
      document.getElementById("pduration3").value = "";
    },
    saveArray4: function(event) {
      console.log("test");
      let sessioncount = document.getElementById("session4").value;
      let startime = document.getElementById("stime4").value;
      let endtime = document.getElementById("etime4").value;
      let presentationduration = document.getElementById("pduration4").value;

      let day1 = 4;
      let sessionno = 4;

      axios
        .post(
          "http://localhost:8081/constraint/create",
          {
            dayNo: day1,
            parallelSessionCount: sessioncount,
            sessionNo: sessionno,
            startTime: startime,
            endTime: endtime,
            presentationDuration: presentationduration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;
      document.getElementById(
        "author-list-body4"
      ).innerHTML += ` <b> Session: </b> ${sessionno} , <b> # of parallel session: </b> ${sessioncount}, <b> Presentation duration: </b> ${presentationduration}, <b> Start time: </b> ${startime}, <b> End time:${endtime} </b> `;

      document.getElementById("session4").value = "";
      document.getElementById("stime4").value = "";
      document.getElementById("etime4").value = "";
      document.getElementById("pduration4").value = "";
    },
    saveArray5: function(event) {
      console.log("test");
      let sessioncount = document.getElementById("session5").value;
      let startime = document.getElementById("stime5").value;
      let endtime = document.getElementById("etime5").value;
      let presentationduration = document.getElementById("pduration5").value;

      let day1 = 5;
      let sessionno = 5;

      axios
        .post(
          "http://localhost:8081/constraint/create",
          {
            dayNo: day1,
            parallelSessionCount: sessioncount,
            sessionNo: sessionno,
            startTime: startime,
            endTime: endtime,
            presentationDuration: presentationduration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;

      document.getElementById(
        "author-list-body5"
      ).innerHTML += `<b> Session: </b> ${sessionno} , <b> # of parallel session: </b> ${sessioncount}, <b> Presentation duration: </b> ${presentationduration}, <b> Start time: </b> ${startime}, <b> End time: </b> ${endtime}`;

      document.getElementById("session5").value = "";
      document.getElementById("stime5").value = "";
      document.getElementById("etime5").value = "";
      document.getElementById("pduration5").value = "";
    },
    goToConstraints() {
      this.$router.push("/constraints");
    },
    goToPapers() {
      this.$router.push("/papers");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToAboutUs() {
      this.$router.push("/aboutus");
    },
    saveinfo1: function(event) {
      let dayStart = document.getElementById("daystarttime_1").value;
      let dayEnd = document.getElementById("dayendtime_1").value;
      let sessionCount = document.getElementById("totalsessionnumber_1").value;
      let sessionDuration = document.getElementById("sessionduration_1").value;
      let day1 = 1;

      axios
        .post(
          "http://localhost:8081/info/create",
          {
            dayNo: day1,
            dayStart: dayStart,
            dayEnd: dayEnd,
            sessionCount: sessionCount,
            sessionDuration: sessionDuration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      document.getElementById("daystarttime_1").disabled = true;
      document.getElementById("dayendtime_1").disabled = true;
      document.getElementById("totalsessionnumber_1").disabled = true;
      document.getElementById("sessionduration_1").disabled = true;
    },
    saveinfo2: function(event) {
      let dayStart = document.getElementById("daystarttime_2").value;
      let dayEnd = document.getElementById("dayendtime_2").value;
      let sessionCount = document.getElementById("totalsessionnumber_2").value;
      let sessionDuration = document.getElementById("sessionduration_2").value;
      let day1 = 2;

      axios
        .post(
          "http://localhost:8081/info/create",
          {
            dayNo: day1,
            dayStart: dayStart,
            dayEnd: dayEnd,
            sessionCount: sessionCount,
            sessionDuration: sessionDuration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      document.getElementById("daystarttime_2").disabled = true;
      document.getElementById("dayendtime_2").disabled = true;
      document.getElementById("totalsessionnumber_2").disabled = true;
      document.getElementById("sessionduration_2").disabled = true;
    },
    saveinfo3: function(event) {
      let dayStart = document.getElementById("daystarttime_3").value;
      let dayEnd = document.getElementById("dayendtime_3").value;
      let sessionCount = document.getElementById("totalsessionnumber_3").value;
      let sessionDuration = document.getElementById("sessionduration_3").value;
      let day1 = 3;

      axios
        .post(
          "http://localhost:8081/info/create",
          {
            dayNo: day1,
            dayStart: dayStart,
            dayEnd: dayEnd,
            sessionCount: sessionCount,
            sessionDuration: sessionDuration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      document.getElementById("daystarttime_3").disabled = true;
      document.getElementById("dayendtime_3").disabled = true;
      document.getElementById("totalsessionnumber_3").disabled = true;
      document.getElementById("sessionduration_3").disabled = true;
    },
    saveinfo4: function(event) {
      let dayStart = document.getElementById("daystarttime_4").value;
      let dayEnd = document.getElementById("dayendtime_4").value;
      let sessionCount = document.getElementById("totalsessionnumber_4").value;
      let sessionDuration = document.getElementById("sessionduration_4").value;
      let day1 = 4;

      axios
        .post(
          "http://localhost:8081/info/create",
          {
            dayNo: day1,
            dayStart: dayStart,
            dayEnd: dayEnd,
            sessionCount: sessionCount,
            sessionDuration: sessionDuration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      document.getElementById("daystarttime_4").disabled = true;
      document.getElementById("dayendtime_4").disabled = true;
      document.getElementById("totalsessionnumber_4").disabled = true;
      document.getElementById("sessionduration_4").disabled = true;
    },
    saveinfo5: function(event) {
      let dayStart = document.getElementById("daystarttime_5").value;
      let dayEnd = document.getElementById("dayendtime_5").value;
      let sessionCount = document.getElementById("totalsessionnumber_5").value;
      let sessionDuration = document.getElementById("sessionduration_5").value;
      let day1 = 5;

      axios
        .post(
          "http://localhost:8081/info/create",
          {
            dayNo: day1,
            dayStart: dayStart,
            dayEnd: dayEnd,
            sessionCount: sessionCount,
            sessionDuration: sessionDuration
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

      document.getElementById("daystarttime_5").disabled = true;
      document.getElementById("dayendtime_5").disabled = true;
      document.getElementById("totalsessionnumber_5").disabled = true;
      document.getElementById("sessionduration_5").disabled = true;
    }
  }
};
</script>

<style scoped>
#home-page {
  background: url("../assets/background/pencil.jpg") no-repeat center center;
  -moz-background-size: 100% 100%; /* Firefox 3.6 */
  -o-background-size: 100% 100%; /* Opera 9.5 */
  -webkit-background-size: 100% 100%; /* Safari 3.0, Chrome */
  background-size: 100% 100%;
  min-height: 100vh;
  opacity: 1;
}
.mytitle2 {
  color: rgb(14, 43, 204);
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
  opacity: 1;
}
.welcome-msg {
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  margin: 150px 100px;
  color: rgb(249, 248, 248);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(17, 9, 225), 0 0 25px rgb(15, 15, 10),
    0 0 5px rgb(250, 250, 250);
  font-size: 50px;
}
.mytitle {
  color: rgb(218, 4, 4);
}
</style>