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

      <h1 class="welcome-msg"> Enter Paper Info </h1>

      <div class="col-xl-8 col-lg-6 col-md-12 col-sm-12 col-12 mx-auto my-5 ">
        <div class="card">
          <div
            class="row justify-content-center"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="col-sm-3">
              <div class="form-group">
                <label class="sr-only">Author Names and Surnames</label>
                <input
                  class="form-control"
                  aria-describedby="authorname"
                  id="authorname"
                  placeholder="Enter multiple authors with comma"
                  name="items[][authorName]"
                  required
                />
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label class="sr-only">Presenter Name and Surname</label>
                <input
                  class="form-control"
                  aria-describedby="presentername"
                  id="presentername"
                  placeholder="Enter a presenter"
                  name="items[][presenterName]"
                  required
                />
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label class="sr-only">Title</label>
                <input
                  class="form-control"
                  aria-describedby="Title"
                  id="titlename"
                  placeholder="Enter title of the paper"
                  name="items[][titleName]"
                  required
                />
              </div>
            </div>
           
              <div class="col-sm-3">
                <div class="form-group">
                <label class="sr-only">Select Keywords</label>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                    multiple
                    :select-size="4"
                  ></b-form-select>
                  <!--<div class="mt-3">
                    Selected Keywords: <strong>{{ selected }}</strong>
                  </div> -->
                </div>
              </div>
         
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-6"></div>
      <!--       <div class="col-sm-2">
               <button
                type="button"
                class="btn btn-secondary"
                @click.prevent="addAttendee"
              >
                Add New Paper
              </button> 
            </div> -->
          </div>
          <!-- <input
                    method="post"
                    methodname="authorname"
                    id="itemForm"
                    v-on:keyup.enter="addItem"
                    placeholder="Enter Names and Surnames"
                    v-model="authorName"
                  />-->

          <!--<button v-on:click="addItem">Add Paper</button>-->
        </div>
        <ul></ul>

        <span id="result"></span>

          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3"></div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3"></div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3"></div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
              <button
                style="width: 100px"
                type="submit"
                id="sbm-btn"
                class="btn-lg col-md-3 offset-md-3btn btn-light mb-3"
                @click="savePapers"
              >
                Save
              </button>
              <input type="hidden" id="str" name="str" value="" />
            </div>
          </div> 
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let counter = 0;
export default {
  data() {
    return {
      items: [
        { authorName: "", presenterName: "", titleName: "", keyword: "" }
      ],
      papers: [{ aName: "", pName: "", tName: "", kName: "" }],
      selected: ["Robotics"], // Array reference
      options: [
        { value: "Robotics", text: "Robotics" },
        { value: "Machine Learning", text: "Machine Learning" },
        { value: "Artificial Intelligence", text: "Artificial Intelligence" },
        { value: "Human Interactıon", text: "Human Interactıon" }
      ]
    };
  },

  methods: {
    createPost() {
      axios
        .post("/paper/create", paperValues)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
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
    removeAttendee: function(index) {
      this.items.splice(index, 1);
    },
    
    savePapers: function(event) {
    console.log("test");
    let author= document.getElementById("authorname").value;
    let presenter = document.getElementById("presentername").value;
    let title = document.getElementById("titlename").value;
    let keywords = this.selected;

    const paperValues = new Object();
    paperValues.author = author;
    paperValues.presenter = presenter;
    paperValues.title = title;
    paperValues.keyword = keywords.toString(); 
    let data = JSON.stringify(paperValues);
    console.log(data);
     axios
        .post('http://localhost:8081/paper/create', data,{
        headers:{
        'Content-Type': 'application/json'
        }})
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
    goToPapers(){
      this.$router.push('/papers');
    },
    goToHome(){
      this.$router.push('/');
    },
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

.welcome-msg {
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  margin: 150px 100px;
  color: rgb(232, 164, 16);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(7, 7, 5), 0 0 25px rgb(15, 14, 10),
    0 0 5px rgb(16, 15, 12);
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

.btn-blue {
  background-color: #1a237e;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #1a23de;
  color: #fff;

  cursor: pointer;
}
</style>
