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
      <h1>
        <h1 class="Paperlist-msg">
          <h1>YOUR OPTIMIZED SCHEDULE</h1>
        </h1>
        <button
        
          type="button"
          class="btn btn-secondary btn-lg btn-dark mb-4"
          
          @click="
            createPapers();
            say();
          "
        >
        
          Optimize
        </button>
      </h1>

      <div class="container">
        <table class="table table-light table-bordered">
          <thead>
            <tr>
              <th scope="col">Day</th>
              <th scope="col">Session No</th>
              <th scope="col">Parallel Session No</th>
              <th scope="col">Authors</th>
              <th scope="col">Presenter</th>
              <th scope="col">Title</th>
              <th scope="col">Keywords</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(paper, index) in papers" :key="index">
              <td v-text="paper.dayNo"></td>
              <td v-text="paper.sessionNo"></td>
              <td v-text="paper.parallelSessionNo"></td>
              <td v-text="paper.authors"></td>
              <td v-text="paper.presenter"></td>
              <td v-text="paper.title"></td>
              <td v-text="paper.keywords"></td>
              <td v-text="paper.start_time"></td>
              <td v-text="paper.end_time"></td>
            </tr>
          </tbody>
        </table>
        <button
          id="button"
          class="btn-lg btn-secondary btn-dark mb-5"
          @click="deleteAllPresentations"
        >
          Clean Result
        </button>
      </div>
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
      papers: []
    };
  },
  methods: {
    say() {
      return alert("OPTIMIZATION IS STARTED!");
      
    },
    getPapers() {
      axios.get("http://localhost:8081/presentation/getAll").then(response => {
        this.papers = response.data;
      });
    },
    createPapers() {
      axios.post("http://localhost:8081/presentation/create");
      window.location.reload();
    },
    deleteAllPresentations: function(event) {
      axios
        .delete("http://localhost:8081/presentation/deleteAll", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
      window.location.reload();
    },
    goToConstraints() {
      this.$router.push("/constraints");
    },
    goToAddPaperPage() {
      this.$router.push("/addpaper");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToPapers() {
      this.$router.push("/papers");
    },
    goToAboutUs() {
      this.$router.push("/aboutus");
    }
  },
  mounted() {
    this.getPapers();
  }
};
</script>
<style scoped>
#home-page {
  background: url("../assets/background/clock.jpg") no-repeat center center;
  -moz-background-size: 100% 100%; /* Firefox 3.6 */
  -o-background-size: 100% 100%; /* Opera 9.5 */
  -webkit-background-size: 100% 100%; /* Safari 3.0, Chrome */
  background-size: 100% 100%;
  min-height: 100vh;
  opacity: 1;
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
  color: rgb(217, 105, 1);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(7, 7, 5), 0 0 25px rgb(15, 14, 10),
    0 0 5px rgb(16, 15, 12);
  font-size: 50px;
}
</style>
