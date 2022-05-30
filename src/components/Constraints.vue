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

      <section class="search-sec">
        <h1>
          <h1 class="Paperlist-msg">Constraint List</h1>
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-dark"
            @click="goToAddConstraintPage"
          >
            Add Constraint
          </button>
        </h1>

        <div class="container">
          <div class="row">
            <table class="table table-light table-bordered">
              <thead>
                <tr>
                  <th scope="col">Day No</th>
                  <th scope="col">Session No</th>
                  <th scope="col">Parallel Session No</th>
                  <th scope="col">Session Start Time</th>
                  <th scope="col">Session End Time</th>
                  <th scope="col">Session Duration</th>
                  <th scope="col">Presentation Duration</th>
                  <td>
                    <button
                      id="button"
                      class="btn btn-secondary btn-dark"
                      @click="deleteAllConstraints"
                    >
                      Remove All
                    </button>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(paper, index) in papers" :key="index">
                  <td v-text="paper.dayNo"></td>
                  <td v-text="paper.sessionNo"></td>
                  <td v-text="paper.parallelSessionCount"></td>
                  <td v-text="paper.startTime"></td>
                  <td v-text="paper.endTime"></td>
                  <td v-text="paper.sessionDuration"></td>
                  <td v-text="paper.presentationDuration"></td>
                  <td>
                    <button id="button" class="btn btn-secondary btn-dark">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="buttonadd" id="add"></div>
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
      tabIndex: 0,
      modalShow: false,
      papers: [],
    };
  },
  mounted() {
    this.getConstraints();
  },
  methods: {
    getConstraints() {
      axios.get("http://localhost:8081/constraint/getAll").then((response) => {
        this.papers = response.data;
      });
    },
    deleteAllConstraints: function (event) {
      axios
        .delete("http://localhost:8081/constraint/deleteAll", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
      window.location.reload();
    },
    goToPapers() {
      this.$router.push("/papers");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToAddConstraintPage() {
      this.$router.push("/addconstraint");
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
    saveArray1: function (event) {
      console.log("test");
      let sessioncount = document.getElementById("session1").value;
      let startime = document.getElementById("stime1").value;
      let endtime = document.getElementById("etime1").value;
      let day1 = 1;
      let presentationduration = "30";
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
            presentationDuration: presentationduration,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;

      document.getElementById("session1").value = "";
      document.getElementById("stime1").value = "";
      document.getElementById("etime1").value = "";
    },
    saveArray2: function (event) {
      console.log("test");
      let sessioncount = document.getElementById("session2").value;
      let startime = document.getElementById("stime2").value;
      let endtime = document.getElementById("etime2").value;
      let day1 = 2;
      let presentationduration = "30";
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
            presentationDuration: presentationduration,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;

      document.getElementById("session2").value = "";
      document.getElementById("stime2").value = "";
      document.getElementById("etime2").value = "";
    },
    saveArray3: function (event) {
      console.log("test");
      let sessioncount = document.getElementById("session3").value;
      let startime = document.getElementById("stime3").value;
      let endtime = document.getElementById("etime3").value;
      let day1 = 3;
      let presentationduration = "30";
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
            presentationDuration: presentationduration,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;

      document.getElementById("session3").value = "";
      document.getElementById("stime3").value = "";
      document.getElementById("etime3").value = "";
    },
    saveArray4: function (event) {
      console.log("test");
      let sessioncount = document.getElementById("session4").value;
      let startime = document.getElementById("stime4").value;
      let endtime = document.getElementById("etime4").value;
      let day1 = 4;
      let presentationduration = "30";
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
            presentationDuration: presentationduration,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;

      document.getElementById("session4").value = "";
      document.getElementById("stime4").value = "";
      document.getElementById("etime4").value = "";
    },
    saveArray5: function (event) {
      console.log("test");
      let sessioncount = document.getElementById("session5").value;
      let startime = document.getElementById("stime5").value;
      let endtime = document.getElementById("etime5").value;
      let day1 = 5;
      let presentationduration = "30";
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
            presentationDuration: presentationduration,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

      sessionno = sessionno + 1;

      document.getElementById("session5").value = "";
      document.getElementById("stime5").value = "";
      document.getElementById("etime5").value = "";
    },
  },
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
  opacity:1;
}

#nav-bar {
  opacity: 1;
}

#icon {
  margin-left: 3px;
  display: block;
  max-width: 110px;
  opacity: 1;
}

.search-sec div {
  margin: 1rem;
  position: relative;
  display: inline-block;
}
textarea,
select {
  border-radius: 0.5rem;
  border-collapse: collapse;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  width: 16rem;
  justify-content: center;
  display: flex;
  font-size: 1rem;
}
.Paperlist-msg {
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  margin: 150px 100px;
  color: rgb(246, 246, 246);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(7, 7, 5), 0 0 25px rgb(15, 14, 10),
    0 0 5px rgb(16, 15, 12);
  font-size: 50px;
}
</style>
