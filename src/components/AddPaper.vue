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

      <h1 class="welcome-msg">Enter Paper Info</h1>

      <div class="col-lg-5 mx-auto">
        <b-card no-body >
          <b-tabs pills card >
            <b-tab title="AUTHORS" active:title-link-class="linkClass(0)">
              <label> <b style="float: right">Author Name </b></label>
              <input
                class="form-control"
                aria-describedby="authorname"
                id="authorname"
                placeholder="Enter a name for the author"
                name="authorname"
                required
              />
              <br />
              <br />
              <label> <b style="float: right">Author Surname </b></label>
              <input
                class="form-control"
                aria-describedby="authorsurname"
                id="authorsurname"
                placeholder="Enter a surname for the author"
                name="authorsurname"
                required
              />
              <br />
              <button
                type="button"
                class="btn btn-primary btn-lg mb-4"
                @click="SaveAuthors"
              >
                Add Author
              </button>
              <div class="authorstext">Authors You Have Added:</div>
              <tbody id="author-list-body"></tbody>
              <tbody class="thead-dark">
                <tr></tr>
              </tbody>
            </b-tab>
            <b-tab title="PRESENTER" active:title-link-class="linkClass(1)">
              <label> <b style="float: right"> Presenter Name </b></label>

              <input
                class="form-control"
                aria-describedby="presentername"
                id="presentername"
                placeholder="Enter a presenter name"
                name="presentername"
                required
              />
              <br />
              <br />
              <label> <b style="float: right"> Presenter Surname </b></label>
              <input
                class="form-control"
                aria-describedby="presentersurname"
                id="presentersurname"
                placeholder="Enter a presenter Surname"
                name="presentersurname"
                required
              />
              <br />
            </b-tab>
            <b-tab title="TITLE" active:title-link-class="linkClass(2)">
              <label> <b style="float: right">Title </b></label>
              <input
                class="form-control"
                aria-describedby="Title"
                id="titlename"
                placeholder="Enter title of the paper"
                name="titlename"
                required
              />
              <br />
              <br />
            </b-tab>

            <b-tab title="KEYWORD" active:title-link-class="linkClass(3)">
              <label> <b> Select Keywords with CTRL</b> </label>
              <div class="col-sm-15" align="center">
                <b-form-select
                  v-model="selected"
                  :options="options"
                  multiple
                  :select-size="5"
                  class="mb-5"
                ></b-form-select>
                <div class="mt-3">
                  Selected Keywords: <strong>{{ selected }}</strong>
                </div>
                <br />
              </div>
              <button
                style="width: 150px"
                type="submit"
                id="sbm-btn"
                class="btn-lg btn-primary"
                @click="
                  savePapers();
                  say();
                "
              >
                Save Paper
              </button>
            </b-tab>
          </b-tabs>
        </b-card>
        <br />
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
let counter = 0;
export default {
  data() {
    return {
      author: [],
      selected: [""], // Array reference
      options: [
        { value: "Artificial Intelligence", text: "Artificial Intelligence" },
        { value: "Augmented Reality", text: "Augmented Reality" },
        { value: "Health", text: "Health" },
        { value: "Human Interaction", text: "Human Interaction" },
        { value: "Machine Learning", text: "Machine Learning" },
        { value: "Mixed-Reality", text: "Mixed-Reality" },
        { value: "Robotics", text: "Robotics" },
        { value: "Science", text: "Science" },
        { value: "Virtual Reality", text: "Virtual Reality" },
      ],
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
    say: function () {
      if (
        //document.getElementById("authorname").value == "" ||
        //document.getElementById("authorsurname").value == "" ||
        document.getElementById("presentername").value == "" ||
        document.getElementById("presentersurname").value == "" ||
        document.getElementById("tittlename").value == "" ||
        document.getElementById("keywordname").value == ""
      ) {
        return alert("ALL FIELDS MUST BE FILLED IN ORDER TO SAVE THE PAPER!");
      } else {
        return alert("YOUR PAPER IS SAVED!");
      }
    },
    SaveAuthors() {
      let fname = document.getElementById("authorname").value;
      let sname = document.getElementById("authorsurname").value;

      if (
        document.getElementById("authorname").value == "" ||
        document.getElementById("authorsurname").value == ""
      ) {
        return alert("YOU CAN NOT LEAVE NAME OR SURNAME FIELD EMPTY!");
      }

      document.getElementById(
        "author-list-body"
      ).innerHTML += `${fname} ${sname}, `;

      let fullname = fname + sname;

      this.author.push(fullname);

      console.log(this.author);

      document.getElementById("authorname").value = "";
      document.getElementById("authorsurname").value = "";
    },
    addAttendee: function (event) {
      event.preventDefault();
      var authorid = "authorname" + counter;
      var presname = "presentername" + counter;
      var titname = "titlename" + counter;

      this.items.push({
        authorName: authorid,
        presenterName: presname,
        titleName: titname,
        keyword: "",
      });
      this.papers.aName = document.getElementById("authorname").value;
      this.papers.pName = document.getElementById("presentername").value;
      this.papers.tName = document.getElementById("titlename").value;
      this.papers.kName = document.getElementById("keywordname").value;
      console.log(this.papers);
      counter += 1;
      console.log(counter);
    },
    savePapers: function (event) {
      //let author = document.getElementById("authorname").value;
      let presentername = document.getElementById("presentername").value;
      let presentersurname = document.getElementById("presentersurname").value;
      let presenter = presentername + presentersurname;
      let title = document.getElementById("titlename").value;
      let keywords = this.selected;

      const paperValues = new Object();
      paperValues.author = this.author.toString();
      paperValues.presenter = presenter;
      paperValues.title = title;
      paperValues.keyword = keywords.toString();
      let data = JSON.stringify(paperValues);
      console.log(data);
      axios
        .post("http://localhost:8081/paper/create", data, {
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
    removeAttendee: function (index) {
      this.items.splice(index, 1);
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
  },
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

#nav-bar {
  opacity: 1;
}
.authorstext {
  color: rgb(225, 9, 9);
  text-align: left;
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
.abutton {
  height: 2rem;
  position: relative;
  top: -1rem;
  left: -100px;
}
.nbutton {
  height: 2rem;
  position: relative;
  top: -5rem;
  right: -80px;
}
.mytitle {
  color: rgb(14, 43, 204);
}
.welcome-msg {
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  margin: 150px 100px;
  color: rgb(254, 229, 0);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(7, 7, 5), 0 0 25px rgb(15, 14, 10),
    0 0 5px rgb(250, 250, 250);
  font-size: 50px;
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

#mytab {
  background-color: rgb(15, 11, 11);
}
</style>