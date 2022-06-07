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
        <b-card no-body>
          <b-tabs pills card align="center">
            <b-tab title="AUTHORS" active:title-link-class="linkClass(0)">
              <label> <b style="float: right">Author Name </b></label>
              <input
                class="form-control"
                aria-describedby="authorname"
                id="authorname"
                placeholder="Enter a name for the author"
                name="authorname"
                autocomplete="off"
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
                autocomplete="off"
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
                autocomplete="off"
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
                autocomplete="off"
                required
              />
              <br />
              <!-- <button
                type="button"
                class="btn btn-primary btn-lg mb-4"
                @click="Check"
              >
                SAVE PRESENTER
              </button> -->
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
                autocomplete="off"
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
                  :select-size="10"
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
        { value: "COMPUTER SCIENCE", text: "COMPUTER SCIENCE", disabled: true },
        { value: "Artificial Intelligence", text: "Artificial Intelligence" },
        { value: "Augmented Reality", text: "Augmented Reality" },
        {
          value: "Prototyping Mixed Reality",
          text: "Prototyping Mixed Reality"
        },
        { value: "Human Interaction", text: "Human Interaction" },
        { value: "Machine Learning", text: "Machine Learning" },
        { value: "Mixed-Reality", text: "Mixed-Reality" },
        { value: "Robotics", text: "Robotics" },
        { value: "Database", text: "Database" },
        { value: "CPU", text: "CPU" },
        { value: "ASCII", text: "ASCII" },
        { value: "Algorithm", text: "Algorithm" },
        { value: "Assembly Language", text: "Assembly Language" },
        { value: "Malware", text: "Malware" },
        { value: "Web Server", text: "Web Server" },
        { value: "Network", text: "Network" },
        { value: "Hacking", text: "Hacking" },
        { value: "Api", text: "Api" },

        { value: "ECONOMICS", text: "ECONOMICS", disabled: true },
        {
          value: "Financial Markets and Institutions",
          text: "Financial Markets and Institutions"
        },
        {
          value: "Macroeconomic Theory and Policy",
          text: "Macroeconomic Theory and Policy"
        },
        {
          value: "International Monetary Economics",
          text: "International Monetary Economics"
        },
        { value: "International Finance", text: "International Finance" },
        {
          value: "Banking and Financial Intermediation",
          text: "Banking and Financial Intermediation"
        },
        { value: "HEALTH INSURANCE", text: "HEALTH INSURANCE", disabled: true },
        { value: "Private Health Insurance", text: "Private Health Insurance" },
        { value: "Health Insurance Plans", text: "Health Insurance Plans" },
        { value: "United Healthcare", text: "United Healthcare" },
        { value: "Home Insurance", text: "Home Insurance" },

        { value: "ART", text: "ART", disabled: true },
        { value: "Gallery", text: "Gallery" },
        { value: "Sculpture", text: "Sculpture" },
        { value: "Oil Painting", text: "Oil Painting" },
        { value: "Modern Art", text: "Modern Art" },
        { value: "Artwork", text: "Artwork" },

        { value: "BUSINESS", text: "BUSINESS", disabled: true },
        { value: "Income", text: "Income" },
        { value: "Profitability", text: "Profitability" },
        { value: "Money", text: "Money" },
        { value: "Business Plan", text: "Business Plan" },
        { value: "Online Business", text: "Online Business" },

        { value: "ENTERTAINMENT", text: "ENTERTAINMENT", disabled: true },
        { value: "Intern", text: "Intern" },
        { value: "Celebrity Movie", text: "Celebrity Movie" },
        { value: "Breaking News", text: "Breaking News" },

        { value: "MARKETING", text: "MARKETING", disabled: true },
        { value: "Pr", text: "Pr" },
        { value: "Advertisement", text: "Advertisement" },
        { value: "Marketing strategy", text: "Marketing strategy" },
        { value: "Online Marketing", text: "Online Marketing" },
        { value: "Digital Marketing", text: "Digital Marketing" },

        { value: "NUTRITION", text: "NUTRITION", disabled: true },
        { value: "Fitness", text: "Fitness" },
        { value: "Health", text: "Health" },
        { value: "Vitamin", text: "Vitamin" },
        { value: "Diet", text: "Diet" },
        { value: "Supplement", text: "Supplement" },
        { value: "Calories", text: "Calories" },
        { value: "Dietitian", text: "Dietitian" }
      ]
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
    //   Check: function() {
    //     let presenterName = document.getElementById("presentername").toString();
    //    let presenterSurname = document.getElementById("presentersurname").toString();
    //    let authorName = document.getElementById("authorname").toString();
    //    let authorSurname = document.getElementById("authorsurname").toString();
    //   let message= "";

    //   if (presenterName+presenterSurname != authorName+authorSurname)
    //   {
    //     message= "PRESENTER MUST BE ONE OF THE AUTHOR";
    //    alert(message);
    //  }Ã§
    //  {
    //   message= "PRESENTER IS ONE OF THE AUTHOR PLEASE GO TO NEXT TAB";
    //    alert(message);
    //   }
    // },
    say: function() {
      if (
       // document.getElementById("authorname").value == "" ||
       // document.getElementById("authorsurname").value == "" ||
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
      let space = " ";
      if (
        document.getElementById("authorname").value == "" ||
        document.getElementById("authorsurname").value == ""
      ) {
        return alert("YOU CAN NOT LEAVE NAME OR SURNAME FIELD EMPTY!");
      }

      document.getElementById(
        "author-list-body"
      ).innerHTML += `${fname} ${sname}, `;

      let fullname = fname + space + sname;

      this.author.push(fullname);

      console.log(this.author);

      document.getElementById("authorname").value = "";
      document.getElementById("authorsurname").value = "";
    },
    addAttendee: function(event) {
      event.preventDefault();
      var authorid = "authorname" + counter;
      var presname = "presentername" + counter;
      var titname = "titlename" + counter;

      this.items.push({
        authorName: authorid,
        presenterName: presname,
        titleName: titname,
        keyword: ""
      });
      this.papers.aName = document.getElementById("authorname").value;
      this.papers.pName = document.getElementById("presentername").value;
      this.papers.tName = document.getElementById("titlename").value;
      this.papers.kName = document.getElementById("keywordname").value;
      console.log(this.papers);
      counter += 1;
      console.log(counter);
    },
    savePapers: function(event) {
      //let author = document.getElementById("authorname").value;
      let presentername = document.getElementById("presentername").value;
      let presentersurname = document.getElementById("presentersurname").value;
      let space1 = " ";
      let presenter = presentername + space1 + presentersurname;
      let title = document.getElementById("titlename").value;
      let keywords = this.selected;

      const paperValues = new Object();
      paperValues.author = this.author.toString();
      paperValues.presenter = presenter.toString();
      paperValues.title = title;
      paperValues.keyword = keywords.toString();
      let data = JSON.stringify(paperValues);
      console.log(data);
      axios
        .post("https://conference-scheduling-bau.herokuapp.com/paper/create", data, {
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
      this.$router.push("/papers");
      window.location.reload();
    },
    removeAttendee: function(index) {
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