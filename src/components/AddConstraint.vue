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
              <a href="#" class="nav-item nav-link active" @click="goToAboutUs"> <b>About Us</b> </a>
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
                    <b-tab
                      v-for="i in tabs"
                      :key="'dyn-tab-' + i"
                      :title="'DAY ' + i"
                    >
                      <div
                        class="col-lg-6 col-md-2 col-sm-12 p-2"
                        style="float: left"
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
                        class="col-lg-6 col-md-2 col-sm-12 p-2"
                        style="float: left"
                      >
                        <label> <b>Session End Time</b> </label>
                        <input
                          type="text"
                          placeholder="Session End Time "
                          id="etime1"
                          required
                        />
                      </div>

                      <div
                        class="col-lg-6 col-md-2 col-sm-12 p-2"
                        style="float: left"
                      >
                        <label> <b> # Parallel Sessions </b> </label>
                        <input
                          type="text"
                          placeholder=" Enter a number"
                          id="session1"
                          name="session1"
                          required
                        />
                      </div>

                      <div
                        class="col-lg-6 col-md-2 col-sm-12 p-2"
                        style="float: left"
                      >
                        <label> <b>Session Duration</b> </label>
                        <input
                          type="text"
                          placeholder="Session Duration "
                          id="dtime1"
                          required
                        />
                      </div>

                      <b-button
                        id="close"
                        size="sm"
                        variant="danger"
                        class="float-right"
                        @click="closeTab(i)"
                      >
                        Close Day
                      </b-button>

                      <div class="buttonsave" id="save1" style="float: left">
                        <button
                          type="button"
                          class="btn btn-warning wrn-btn btn-lg bg-light"
                          @click="saveArray1"
                        >{{buttonText}}
                          Save
                        </button>
                      </div>
                    </b-tab>
                    <template #tabs-end>
                      <b-nav-item
                        role="presentation"
                        @click.prevent="newTab"
                        href="#"
                        ><b>+</b></b-nav-item
                      >
                    </template>
                    <template #empty>
                      <div class="text-center text-muted">
                        There are no days here <br />
                        Open a new day using the <b>+</b> button above.
                      </div>
                    </template>
                  </b-tabs>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
      tabs: [],
      tabCounter: 1,
      tabIndex: 0,
      modalShow: false,
      papers: []
    };
  },
  methods: {
    newTab() {
      this.tabs.push(this.tabCounter++);
      this.saveArray1();
    },
    goToPapers() {
      this.$router.push("/papers");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToConstraints() {
      this.$router.push("/constraints");
    },
    goToSchedule() {
      this.$router.push("/schedule");
    },
    goToAboutUs() {
      this.$router.push("/aboutus");
    },
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
    saveArray1: function(event) {
      console.log("test");
      let sessioncount = document.getElementById("session1").value;
      let startime = document.getElementById("stime1").value;
      let endtime = document.getElementById("etime1").value;
      let presentationduration = document.getElementById("dtime1").value;
      let day1 = 1;
      let sessionno = 1;

      console.log(startime);
      console.log(endtime);
      console.log(sessioncount);
      console.log(presentationduration);

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

      document.getElementById("session1").value = "";
      document.getElementById("stime1").value = "";
      document.getElementById("etime1").value = "";
      document.getElementById("dtime1").value = "";
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
  opacity: 1;
}

.buttonsave {
  height: 3rem;
  width: 3rem;
  position: relative;
  bottom: -3.5rem;
  right: -350px;
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
</style>
